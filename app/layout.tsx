import type { Metadata } from "next";
import "../styles.css";

export const metadata: Metadata = {
  title: "Trading Kannada | Stock Market Education in Kannada",
  description:
    "Trading Kannada helps Kannada-speaking learners understand stock market trading with simple lessons, price action concepts, and structured day trading courses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
