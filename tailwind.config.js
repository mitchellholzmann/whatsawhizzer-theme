const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.php", "./resources/**/*.{php,vue,js}", "./index.php"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bgreen: {
          400: "#4FF461",
          500: "#4AE95B",
          600: "#40D04F",
        },
        bpurple: {
          200: "#8b88ff",
          300: "#9B7DFF",
          400: "#9668ff",
          500: "#7750f8",
          600: "#5538B5",
        },
        bgray: {
          100: "#C9D1D9",
          200: "#9AA4BF",
          300: "#616A82",
          400: "#3f485f",
          500: "#293249",
          600: "#212529",
          700: "#1D2333",
          800: "#161B22",
          900: "#0D1117",
        },
        bred: {
          500: "#f1315e",
        },
      },
    },
  },
  plugins: [],
};
