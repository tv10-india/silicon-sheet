import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionWrapper } from "./components/SessionWrapper";
import Footer from "./components/Footer"; 
import { ThemeProvider } from "./components/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Silicon Sheet",
  description: "Master DSA patterns.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning> {/* Add suppressHydrationWarning */}
      <body className={inter.className}>
        <SessionWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen">
               <div className="flex-grow">{children}</div>
               <Footer />
            </div>
          </ThemeProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}