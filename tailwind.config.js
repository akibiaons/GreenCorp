/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Shrikhand", "serif"],
    },
    extend: {},
  },
  options: {
    safelist: [
      "swiper-slide-active",
      "swiper-slide-next",
      "swiper-slide-prev",
      // any other dynamic classes you are using
    ],
  },
  plugins: [],
};
