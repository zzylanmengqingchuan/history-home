import type { Metadata } from "next";
import { DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "古今人物堂 · 历史人物平行宇宙",
  description:
    "40 人共创 · 历史人物平行宇宙 Agent Demo。模板创作、世界线、召唤人物、本地记忆。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${dmSans.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="paper-bg flex min-h-full flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
