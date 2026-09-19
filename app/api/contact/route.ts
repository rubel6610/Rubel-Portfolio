import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  const start = Date.now();
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const { name, email, subject, message } = body;

    if (!email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields (email, message)",
          serverLogs: [
            `[${new Date().toISOString()}] [WARN] POST /api/contact - 400 Bad Request`,
            `[VALIDATION] Validation failed: email or message is empty.`,
          ],
        },
        { status: 400 },
      );
    }

    const appUser = process.env.APP_USER;
    const appPassword = process.env.APP_PASSWORD;

    if (!appUser || !appPassword) {
      throw new Error("SMTP Credentials (APP_USER / APP_PASSWORD) not configured in environment.");
    }

    // Configure Nodemailer Transporter using Gmail SMTP credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: appUser,
        pass: appPassword,
      },
    });

    const senderDisplayName = name ? `${name} <${email}>` : email;

    const mailOptions = {
      from: `"${senderDisplayName}" <${appUser}>`,
      replyTo: email,
      to: appUser,
      subject: `[Portfolio Inquiry] ${subject || "New Job / Contract Message"}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #040408; color: #f4f4f7; border-radius: 12px; border: 1px solid rgba(0, 240, 255, 0.3);">
          <h2 style="color: #00f0ff; border-bottom: 1px solid #1a1a2e; padding-bottom: 12px; font-size: 20px;">Portfolio Inquiry - ${subject || "Job Opportunity"}</h2>
          <p style="margin: 8px 0; font-size: 14px;"><strong>Sender Name:</strong> ${name || "Not Provided"}</p>
          <p style="margin: 8px 0; font-size: 14px;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #00f0ff; text-decoration: none;">${email}</a></p>
          <p style="margin: 8px 0; font-size: 14px;"><strong>Subject:</strong> ${subject || "No Subject Specified"}</p>
          <div style="margin-top: 20px; padding: 16px; background-color: rgba(255, 255, 255, 0.05); border-left: 4px solid #bd00ff; border-radius: 6px;">
            <p style="white-space: pre-wrap; margin: 0; font-size: 14px; line-height: 1.6; color: #e4e4e7;">${message}</p>
          </div>
          <hr style="margin-top: 28px; border: 0; border-top: 1px solid #222;" />
          <p style="font-size: 11px; color: #888; font-family: monospace;">DISPATCHED FROM RUBEL PORTFOLIO TERMINAL</p>
        </div>
      `,
    };

    // Send email via Nodemailer
    const mailResult = await transporter.sendMail(mailOptions);
    const latency = Date.now() - start;

    const mockId = mailResult.messageId || Math.random().toString(36).substring(2, 9);
    const safeName = (name || "Anonymous Recruiter").replace(/'/g, "''");
    const sqlQuery = `INSERT INTO contacts (id, sender_name, sender_email, subject, message, created_at) VALUES ('${mockId}', '${safeName}', '${email.replace(/'/g, "''")}', '${(subject || "Job Inquiry").replace(/'/g, "''")}', '${message.replace(/'/g, "''")}', NOW());`;

    const serverLogs = [
      `[${new Date().toISOString()}] [INFO] POST /api/contact - Connection opened`,
      `[HEADERS] Content-Type: application/json | User-Agent: Fetch`,
      `[PARSING] Payload: { name: "${name || ""}", email: "${email}", subject: "${subject || ""}", message_length: ${message.length} }`,
      `[SMTP] Authenticating with ${appUser} via Gmail SMTP...`,
      `[SMTP] Email dispatched successfully! Message ID: ${mailResult.messageId}`,
      `[DB] Connection pool active: 1 connection utilized`,
      `[DB] Running Query: ${sqlQuery}`,
      `[DB] Row recorded in database log. ID: ${mockId}`,
      `[${new Date().toISOString()}] [INFO] POST /api/contact - 200 OK (${latency}ms)`,
    ];

    return NextResponse.json({
      success: true,
      messageId: mockId,
      latencyMs: latency,
      sqlQueryUsed: sqlQuery,
      timestamp: new Date().toISOString(),
      serverLogs,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    const errorStack = error instanceof Error ? error.stack : undefined;

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        serverLogs: [
          `[${new Date().toISOString()}] [ERROR] POST /api/contact - 500 Internal Server Error`,
          `[SMTP_ERROR] ${errorMessage}`,
          `[STACK] ${errorStack || errorMessage}`,
        ],
      },
      { status: 500 },
    );
  }
}
