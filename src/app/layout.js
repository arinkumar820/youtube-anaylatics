import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sohne-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-signifier-family",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Steep — Soft Dawn Analytics Workspace",
  description: "Daylight analytics workspace warmed by a rust-peach accent and soft serif display.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif4.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">{children}</body>
    </html>
  );
}
