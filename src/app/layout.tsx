import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "에버파인 | AR·XR 인지 퍼즐 전문 기업",
  description: "AR·XR 기술을 기반으로 어린이와 어르신의 기억과 인지를 놀이로 자극하는 인터랙티브 퍼즐 콘텐츠 전문 기업입니다.",
  keywords: ["에버파인", "AR", "XR", "퍼즐", "인지", "어린이 퍼즐", "어르신 퍼즐", "기억력"],
  openGraph: {
    title: "에버파인 | AR·XR 인지 퍼즐 전문 기업",
    description: "AR·XR 기술을 기반으로 어린이와 어르신의 기억과 인지를 놀이로 자극하는 인터랙티브 퍼즐 콘텐츠 전문 기업입니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
