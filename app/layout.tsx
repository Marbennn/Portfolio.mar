import type { Metadata, Viewport } from "next";
import { Geist_Mono, Lexend } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-lexend",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Marvin Recepcion | AI Specialist & Developer",
  description:
    "Portfolio of Marvin A. Recepcion - AI Specialist, Frontend Developer, and Backend Developer. Building intelligent systems and pixel-perfect digital experiences.",
  keywords: [
    "AI Specialist",
    "Frontend Developer",
    "Backend Developer",
    "Machine Learning",
    "React",
    "Python",
    "TensorFlow",
    "NLP",
  ],
  authors: [{ name: "Marvin A. Recepcion" }],
  creator: "Marvin A. Recepcion",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Marvin Recepcion | AI Specialist & Developer",
    description:
      "Building intelligent systems and pixel-perfect digital experiences.",
    siteName: "Marvin Recepcion Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marvin Recepcion | AI Specialist & Developer",
    description:
      "Building intelligent systems and pixel-perfect digital experiences.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1419" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lexend.className} ${lexend.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
