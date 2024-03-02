import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "portfolio de Andres Lopez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head><link rel="icon" href="LogoXII.png"></link></head>
      <body className={inter.className}>{children}</body>

    </html>
  );
}
