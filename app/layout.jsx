import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Header/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travel",
  description: "Website Travel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
