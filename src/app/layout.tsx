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
      <body >
        <Header/>
        <main className="flex min-h-screen flex-col items-center justify-between font-Roboto">
          {children}
          
        </main>

      </body>
    </html>
  );
}
