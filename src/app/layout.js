import "./globals.css";
import { inter } from "@/app/ui/fonts";

export const metadata = {
  title: "To do App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-slate-800 text-slate-100 container mx-auto p-4`}>{children}</body>
    </html>
  );
}
