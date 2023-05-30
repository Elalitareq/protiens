import Header from "./components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HULK-Pharma",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main className="flex h-screen flex-col items-center justify-between ">
          {children}
          
        </main>
      </body>
    </html>
  );
}
