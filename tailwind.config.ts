import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: "Clash Display",
        display: "Helvetica Now Display",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          base: "992px",
          lg: "1024px",
          xl: "1200px",
        },
      },
      screens: {
        sm: "640px",
        md: "750px",
        base: "992px", // Define the 'base' screen size globally
        lg: "1024px",
        xl: "1200px",
      },
      colors: {
        tourtext: "#3D3D3D",
        mapbtn: "#FEEA39",
        maptext: "#454545",
        cardtext: "#888888",
        subheading: "#1C1C1C",
        primary: "#724511",
        primarybg: "#FEEA39",
        secondary: "#EBC107",
        secondarybg: "#FEFCC3",
        lightgray: "#5D5D5D",
        lightyellow: "#FBDA14",
        grayvariation: "#B0B0B0",
        skincolor: "#FEFDE8",
      },
      borderColor: {
        solidcolor: "#FFF889",
      },
      backgroundColor: {
        "custom-gray": "rgba(229, 231, 235, 0.46)",
      },
      boxShadow: {
        white1: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
    },
  },
  plugins: [],
};
export default config;
