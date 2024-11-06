import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "zeco shopping",
  description: "buy clothes online in bamenda, buea,douala,cameroon ",
  icon: "/favicon.png",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="l7FBNCY3ohZpAdZki4ZBpIMpW8SXrHJ6o5AoYH5PwEg"
        />
      </head>
      <Head>
        <meta
          name="google-site-verification"
          content="l7FBNCY3ohZpAdZki4ZBpIMpW8SXrHJ6o5AoYH5PwEg"
        />
      </Head>

      <body className={`${inter.className} `}>{children}</body>
    </html>
  );
}
