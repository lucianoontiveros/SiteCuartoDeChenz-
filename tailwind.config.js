/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Nombres personalizados para tus colores
        gray: "#909090",
        skyBlue: "#80DAEB",
        teal: "#018DA5",
        mintGreen: "#67DDAB",
        darkGreen: "#0B9B8A",
        // Puedes definir más colores según tus necesidades
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
