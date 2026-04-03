import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "../components/providers/query-provider";

export const metadata: Metadata = {
  title: "ShopExplorer - Your Ultimate Product Content Explorer",
  description: "Explore a wide range of products with our Content Explorer. Discover detailed information, images, and reviews to make informed purchasing decisions. Start exploring now!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}