import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/providers/AuthProvider";
import { cookies } from "next/headers";
import config from "@/utils/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
  display: "swap",
});
const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["500", "600", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FindCare",
  description: "Streamline access to healthcare services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReactQueryClientProvider>
        <AuthProvider>
          <body className={`${inter.variable} ${lexend.variable}`}>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </body>
        </AuthProvider>
      </ReactQueryClientProvider>
    </html>
  );
}
