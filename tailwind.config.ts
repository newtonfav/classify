import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E1E8EF",
          100: "#D4DEE7",
          200: "#D9D9D9",
          300: "#3ee058",
          400: "#7C99B6",
          500: "#5E82A6",
          600: "#4C6B8A",
          700: "#3C546C",
          800: "#373532",
          900: "#5E5B57",
          950: "#141C24",
        },
        accent: {
          50: "#FAF5F0",
          100: "#fe5655",
          200: "#E8D6BF",
          300: "#DDC2A2",
          400: "#D2AF84",
          500: "#C69963",
          600: "#B78343",
          700: "#926835",
          800: "#6C4D28",
          900: "#4B351B",
          950: "#382814",
        },
      },
      screens: {
        largerDesktop: { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        mediumDesktop: { max: "1441px" },
        // => @media (max-width: 1441px) { ... }

        desktop: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        tabletLandscape: { max: "1116px" },
        // => @media (max-width: 1023px) { ... }

        tabletCustom: { max: "1000px" },
        // => @media (max-width: 1000px) { ... }

        tabletMedium: { max: "910px" },
        // => @media (max-width: 900px) { ... }

        tabletPortrait: { max: "770px" },
        // => @media (max-width: 767px) { ... }

        phone: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        midPhone: { max: "455px" },
        // => @media (max-width: 450px) { ... }

        smallPhone: { max: "395px" },
        //=> @media (max-width: 380px) { ... }

        smallestPhone: { max: "328px" },
        //=> @media (max-width: 320px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
