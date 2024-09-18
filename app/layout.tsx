import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pizzamania",
  description: "Pizzería Pizzamania",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`text-xl`}
      >
        {children}
      </body>
    </html>
  );
}
