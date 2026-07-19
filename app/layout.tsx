import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rubel | Full Stack Developer & Systems Engineer",
  description: "Portfolio of Rubel, a Full Stack Developer specializing in high-performance web applications, 3D interactive graphics, and scalable backend architectures. Frontend Engineer at Ilmify Tech Agency.",
  keywords: [
    "Rubel",
    "Full Stack Developer",
    "Frontend Developer",
    "Ilmify Tech Agency",
    "Next.js Developer",
    "React Developer",
    "Three.js Portfolio",
    "GSAP Animations",
    "Economics Developer",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "Rubel" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-purple-accent selection:text-white font-sans overflow-x-hidden transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
