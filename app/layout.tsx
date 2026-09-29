import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nik | Full-Stack Developer",
  description:
    "Full-Stack Developer & CS Student at BINUS University, seeking a software engineering internship.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#090A0F] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}