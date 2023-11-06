/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,js,tx,txs}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        beige: "#ffedd5",
        black: "#1c1917",
        blue: "#318CE7",
        yellow: "#FDCC49",
        white: "#FFFFFF",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-yellow-black": 
        "linear-gradient(90deg, rgba(28,25,23,1) 0%, rgba(255,237,213,1) 34%, rgba(255,237,213,1) 59%, rgba(28,25,23,1) 100%)",
    
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person: "url('./assets/medin.JPG')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
  
