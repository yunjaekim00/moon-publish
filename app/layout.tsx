import type { ReactNode } from "react";
import type { Metadata } from "next";
import { familySpoqa, familyMont } from "@/assets/styles/font";
import "./globals.css";

export interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "NEXT MALL",
    template: "%s | NEXT MALL",
  },
  description: "X2BEE MALL FO by Plateer",
  icons: {
    icon: "../assets/icons/favicon.ico",
  },
};

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html
      lang="ko"
      className={`${familyMont.variable} ${familySpoqa.variable}`}
    >
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
