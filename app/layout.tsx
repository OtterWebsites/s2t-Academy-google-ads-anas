import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free Education Ebooks | S2TAcademy by Lennart",
  description:
    "Request three free English ebooks covering platform controls, chart patterns and a structured risk-management overview from S2TAcademy by Lennart.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
