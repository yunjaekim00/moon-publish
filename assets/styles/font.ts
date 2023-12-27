import localFont from "next/font/local";

export const familySpoqa = localFont({
  src: [
    {
      path: "../fonts/SpoqaHanSansNeo-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../fonts/SpoqaHanSansNeo-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/SpoqaHanSansNeo-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-spoqa",
});

export const familyMont = localFont({
  src: [
    {
      path: "../fonts/Montserrat-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../fonts/Montserrat-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/Montserrat-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-mont",
});
