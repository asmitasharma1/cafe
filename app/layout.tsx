import type { Metadata } from "next";
import { Libre_Baskerville, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { FavoritesProvider } from "@/contexts/favourites-context";
import Navigation from "@/components/navigation";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-libre-franklin",
});

export const metadata: Metadata = {
  title: "Cafe Cucina",
  description: "Savor the taste of artisan coffee and continental food",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${libreFranklin.variable} antialiased`}>
      <body className="font-franklin">
        <FavoritesProvider>
          <Navigation />
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}