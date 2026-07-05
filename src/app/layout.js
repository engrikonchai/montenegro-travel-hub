import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const description =
  "Hotels, car rentals, tours and honest guides for visiting Montenegro — Kotor, Budva, Durmitor and the Adriatic coast.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Montenegro Travel Hub — Plan your trip to Montenegro",
    template: `%s — ${SITE_NAME}`,
  },
  description,
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    description,
  },
  twitter: {
    card: "summary_large_image",
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${workSans.variable} antialiased`}>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
