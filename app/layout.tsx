import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김한결 | 퍼포먼스 마케터",
  description: "Performance Marketer · Data-Driven Growth",
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
