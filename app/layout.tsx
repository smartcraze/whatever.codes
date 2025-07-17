import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://whatever.codes"),
  title: {
    default: "whatever.codes – DevOps + GenAI Lab by Suraj Vishwakarma",
    template: "%s | whatever.codes",
  },
  description:
    "An experimental DevOps + AI playground by Suraj Vishwakarma. Explore real projects with Docker, LangChain, CI/CD, Terraform, Kubernetes, and more.",
  keywords: [
    "DevOps",
    "GenAI",
    "LangChain",
    "AI Agents",
    "Kubernetes",
    "CI/CD",
    "Terraform",
    "Fullstack DevOps",
    "Suraj Vishwakarma",
    "whatever.codes",
  ],
  openGraph: {
    title: "whatever.codes – DevOps + GenAI Lab",
    description:
      "Explore infrastructure-heavy, intelligent apps built with AI agents, CI/CD, K8s, and more — by Suraj Vishwakarma.",
    url: "https://whatever.codes",
    siteName: "whatever.codes",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "whatever.codes – DevOps + GenAI Lab by Suraj",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "whatever.codes – DevOps + GenAI Lab",
    description:
      "A lab of infra and intelligent agents by Suraj Vishwakarma. Powered by Docker, CI/CD, LangChain, and more.",
    creator: "@surajv354",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased ` }
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="">
            <Navbar />
            {children}
            </main>
          </ThemeProvider>
      </body>
    </html>
  );
}
