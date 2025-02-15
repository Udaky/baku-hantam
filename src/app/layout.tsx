import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const jakartaSans = Plus_Jakarta_Sans({ display: "swap", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Debat Tech Twitter Indonesia",
    template: "%s | Debat Tech Twitter Indonesia",
  },
  description: "Nikmati kumpulan debat teknologi di Twitter Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakartaSans.className}>
        <div data-theme="light">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
