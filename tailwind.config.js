/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-transparent":
          "linear-gradient(50deg,#2e312c 5%,#00000000 50%,#2e312c 95%)",
        "hero-transparent2":
          "linear-gradient(-50deg,#2e312c 5%,#00000000 50%,#2e312c 95%)",
        "hero-transparent3":
          "linear-gradient(180deg,#2e312c 5%,#00000000 50%,#2e312c 95%)",
        "hero-transparent4":
          "linear-gradient(-90deg,#2e312c 5%,#00000000 50%,#2e312c 95%)",
      },

      colors: {
        "deep-blue": "#0666c7",
        "vibrant-green": "#4cd819",
        "vibrant-green-light": "#d1f1c6",
        "vibrant-green-dark": "#3d8124",
        "clean-white": "#FFFFFF",
        "energetic-orange": "#FF6600",
        "subtle-gray": "#CCCCCC",
        "new-black": "#1f1f1f",
        "new-black-green": "#2e312c",
        "dark-black": "#2f312e",
      },
    },
  },
  plugins: [],
};
