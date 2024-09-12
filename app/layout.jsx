import { roboto } from "./fonts";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <title>Learn Next Js Fundamental</title>
      </head>
      <body className="bg-gray-100 flex flex-col px-4 py-4 min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="border-t py-3 text-center text-xs">
          <span>i am always here (footer)</span>
        </footer>
      </body>
    </html>
  );
}
