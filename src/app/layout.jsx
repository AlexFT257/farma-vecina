import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Farma Vecina",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48" />
      </head>
      <body className={`${inter.className} h-screen`}>
        <Header />
        <main className="h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
