import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Rubel | Full Stack Software Developer",
  description: "Portfolio of Rubel, a Full Stack Software Developer trained through Programming Hero Level 1 & Level 2 Bootcamps, with professional experience as a Frontend Developer at Ilmify Tech Agency.",
  keywords: [
    "Rubel",
    "Full Stack Software Developer",
    "Frontend Developer",
    "Ilmify Tech Agency",
    "Programming Hero",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "PostgreSQL Developer",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "Rubel" }],
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased light`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-[#fb3602] selection:text-white font-sans overflow-x-hidden transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
