import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "icon-check": "url('~/assets/icons/checkbox/ico_check.svg')",
        "icon-checkbox-dis":
          "url('~/assets/icons/checkbox/ico_checkbox_dis.svg')",
        "icon-checkbox-err":
          "url('~/assets/icons/checkbox/ico_checkbox_err.svg')",
        "icon-checkbox-on":
          "url('~/assets/icons/checkbox/ico_checkbox_on.svg')",
        "icon-checkbox": "url('~/assets/icons/checkbox/ico_checkbox.svg')",
      },
      colors: {
        default: "black", // text black
        primary: "#90253f", // text brown
        secondary: "#5c43c4", // text purple
        error: "red",
        grey: "#4b5563", // gray-600
        light: "#94a3b8", // gray-400
      },
      fontFamily: {
        spoqa: ["var(--font-spoqa)"],
        mont: ["var(--font-mont)"],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "700",
      },
    },
  },
  plugins: [],
};
export default config;
