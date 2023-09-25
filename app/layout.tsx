import "./globals.css";
import { kanit } from "./fonts"; 
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBarDaisyUI";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: {
    template: "%s | Pops",
    default: "Pops Recording System", // a default is required when creating a template
  },
  description: "Created using next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/apple-icon.png"
        />
      </head>
      <body className={`${kanit.className}`}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer position="bottom-right" theme="dark" autoClose={3000}/>
        </AuthProvider>
      </body>
    </html>
  );
}
