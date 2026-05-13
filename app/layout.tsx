import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김한결 | 포트폴리오",
  description: "Frontend Developer · UI/UX Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
