import type { Metadata } from "next";
import { inter } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  // we can modify our page title to be dynamic in every sub page
  title: {
    template: "%s - Rainbow SHop", // This applies custom content to every page before "%s"
    default: "Home - Rainbow Shop", // default value to "%s"
  },
  description: "La mejor tienda online",
  metadataBase: new URL("http://localhost:3000/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
