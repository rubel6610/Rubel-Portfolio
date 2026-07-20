import { NextResponse } from "next/server";

type ContactPayload = {
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  const start = Date.now();
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const { email, subject, message } = body;

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

    // Simulate database write latency
    await new Promise((resolve) => setTimeout(resolve, 350));
    const latency = Date.now() - start;

    const mockId = Math.random().toString(36).substring(2, 9);

    // Construct rich, realistic server-side logs that the frontend will print out in the terminal!
    const sqlQuery = `INSERT INTO contacts (id, email, subject, message, created_at) VALUES ('${mockId}', '${email.replace(/'/g, "''")}', '${(subject || "No Subject").replace(/'/g, "''")}', '${message.replace(/'/g, "''")}', NOW());`;

    const serverLogs = [
      `[${new Date().toISOString()}] [INFO] POST /api/contact - Connection opened`,
      `[HEADERS] Content-Type: application/json | User-Agent: Fetch`,
      `[PARSING] Payload: { email: "${email}", subject: "${subject || ""}", message_length: ${message.length} }`,
      `[DB] Connecting to PostgreSQL cluster at dev-db-primary...`,
      `[DB] Connection pool active: 4/10 connections utilized`,
      `[DB] Running Query: ${sqlQuery}`,
      `[DB] Row inserted successfully. ID: ${mockId} (1 row affected)`,
      `[REDIS] Invalidating cache key: contacts_count`,
      `[REDIS] Key contacts_count cleared`,
      `[SMTP] Queued welcome email notification to admin via SMTP`,
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
          `[STACK] ${errorStack || errorMessage}`,
        ],
      },
      { status: 500 },
    );
  }
}
