module.exports = {
  purge: ["./source/*.blade.php"],
  theme: {
    extend: {
      fontFamily: {
        "source-sans-pro": ["Source Sans Pro"],
        mitr: ["Mitr"],
        "roboto-slab": ["Roboto Slab"],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
