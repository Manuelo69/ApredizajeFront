/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#f7f7f7",
        "my-gray": "#e2e2e2",
        "dark-gray": "#888888",
        "darker-gray": "#666666",
        "main-green": "#5ee85b",
      },
      fontSize: {
        "text-xs": "12px",
        "text-sm": " 14px",
        "text-base": "16px",
        "text-md": "18px",
        "text-xl": "40px",
        "text-2xl": "64px",
      },
    },
  },
  plugins: [],
};
