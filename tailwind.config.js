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
        "bg-popular-black": "rgba(12, 7, 10, 1)",
        "text-color": "rgba(255, 255, 255, 0.7)",
      },
    },
  },
  plugins: [],
};
