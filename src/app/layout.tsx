import type { Metadata } from "next";
import { Inter, Geist_Mono, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";


const inter = Inter({
  variable: "--font-inter",
  display: 'swap',
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Samuel Adebayo's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} ${firaCode.variable} antialiased `}>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <ThemeToggle />
          <Header />
          
            {children}
          
          <Footer />
        </div>
      </ThemeProvider>   
      </body>
    </html>
  );
}
