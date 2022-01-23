module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "font-green": "#7D990C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
