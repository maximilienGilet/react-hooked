/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
        "slide-in-from-right": {
          "0%": { transform: "translateX(10%)" },
          "100%": { transform: "translateX(-10%)" },
        },
        "slide-in-from-left": {
          "0%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(10%)" },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.2s ease-out",
        "scale-in": "scale-in linear forwards",
        "slide-in-from-right": "slide-in-from-right linear forwards",
        "slide-in-from-left": "slide-in-from-left linear forwards",
      },
      supports: {
        "no-scroll-driven-animations": "not(animation-timeline: scroll())",
      },
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "latte",
    }),
  ],
};
