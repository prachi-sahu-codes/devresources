/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-end": "#3129E7",
        "neutral-base": "#020014",
        "neutrals-100": "#ECECF2",
        "neutrals-200": "#D6D6E1",
        "neutrals-300": "#B1B3C8",
        "neutrals-400": "#878BA9",
        "neutrals-500": "#686C8F",
        "neutrals-600": "#535576",
        "neutrals-700": "#444560",
        "neutrals-800": "#3B3C51",
        "neutrals-900": "#2C2C3B",
        "indigos-op-100": "#3129e714",
        "indigos-op-200": "#3129e729",
        "indigos-op-300": "#3129e73d",
        "grays-op-200": "#f6f6f980",
        "whites-800": "#f7f6fe",
        "whites-op-500": "#ffffffb8",
      },
      screens: {
        xs: "375px",
        "xs-450": "450px",
        "4xl": "2000px",
      },
    },
  },
  plugins: [],
};
