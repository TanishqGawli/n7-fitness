import type { Metadata } from "next";

import "./globals.css";

import {
  Prata,
  Montserrat_Alternates,
} from "next/font/google";

const prata = Prata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const montserratAlt = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "N7 Fitness",
  description: "Premium Fitness Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body
        className={`${prata.variable} ${montserratAlt.variable} bg-black text-white`}
      >

        {children}

      </body>

    </html>
  );
}