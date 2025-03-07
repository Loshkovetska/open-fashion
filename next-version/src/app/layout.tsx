import { Metadata } from "next";

import Providers from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open Fashion",
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head></head>
      <body className="antialiased">
        <Providers>{props.children}</Providers>
      </body>
    </html>
  );
}
