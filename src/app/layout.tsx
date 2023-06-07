import Header from "./components/header";
import "./globals.css";

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
      <body className="font-Roboto">
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
        <footer className="w-full bg-new-black text-white text-center py-4">
          <p>&copy; {new Date().getFullYear()} HULK-Pharma. All rights reserved.</p>
          <p>Address: 1234 Main Street, City, Country</p>
          <p>Email: info@hulk-pharma.com</p>
        </footer>
      </body>
    </html>
  );
}
