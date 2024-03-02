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
    container: {
      center: true,
      background: "#0B9B8A",
    },
  },
  plugins: [
    require("flowbite/plugin"),
    function ({ addUtilities }) {
      const extendUnderline = {
        ".underline-green-200": {
          textDecoration: "underline",
          "text-decoration-thickness": "0.2em",
          "text-decoration-color": "rgb(188 240 218 / var(--tw-text-opacity))",
        },
        ".underline-indigo-300": {
          textDecoration: "underline",
          "text-decoration-thickness": "0.3em",
          "text-decoration-color": "rgb(180 198 252 / var(--tw-text-opacity))",
        },
        ".underline-mintGreen": {
          textDecoration: "underline",
          "text-decoration-thickness": "0.4em",
          "text-decoration-color": "rgb(103 221 171 / var(--tw-text-opacity))",
        },
        ".underline-skyBlue": {
          textDecoration: "underline",
          "text-decoration-thickness": "0.5em",
          "text-decoration-color": "rgb(128 218 235 / var(--tw-text-opacity))",
        },
      };
      addUtilities(extendUnderline);
    },
  ],
};
