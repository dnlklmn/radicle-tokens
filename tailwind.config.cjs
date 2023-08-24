/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      background: {
        default: "var(--background-default)",
        float: "var(--background-float)",
        dip: "var(--background-dip)"
      },
      foreground: {
        contrast: "var(--foreground-contrast)",
        dim: "var(--foreground-dim)",
        emphasized: "var(--foreground-emphasized)",
        primary: "var(--foreground-primary)",
        primaryDim: "var(--foreground-primary-dim)",
        matchBackground: "var(--foreground-match-background)"
      },
      border: {
        hint: "var(--border-hint)",
        focus: "var(--border-focus)",
        contrast: "var(--border-contrast)"
      },
      lg: "var(--lg)",
      fill: {
        default: "var(--fill-default)",
        primary: "var(--fill-primary)"
      },
      colors: {
        purple: {
          50: "var(--colors-purple-50)",
          100: "var(--colors-purple-100)",
          200: "var(--colors-purple-200)",
          300: "var(--colors-purple-300)",
          400: "var(--colors-purple-400)",
          500: "var(--colors-purple-500)",
          600: "var(--colors-purple-600)",
          700: "var(--colors-purple-700)",
          800: "var(--colors-purple-800)",
          900: "var(--colors-purple-900)",
          950: "var(--colors-purple-950)"
        },
        pink: {
          50: "var(--colors-pink-50)",
          100: "var(--colors-pink-100)",
          200: "var(--colors-pink-200)",
          300: "var(--colors-pink-300)",
          400: "var(--colors-pink-400)",
          500: "var(--colors-pink-500)",
          600: "var(--colors-pink-600)",
          700: "var(--colors-pink-700)",
          800: "var(--colors-pink-800)",
          900: "var(--colors-pink-900)",
          950: "var(--colors-pink-950)"
        },
        black: "var(--colors-black)",
        white: "var(--colors-white)"
      }
    },
  },
  plugins: [require("@tailwindcss/forms")]
}