import animate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        "nature-green": "hsl(var(--nature-green))",
        "nature-blue": "hsl(var(--nature-blue))",
        "nature-light-bg": "hsl(var(--nature-light-bg))",
        "nature-orange": "hsl(var(--nature-orange))",
        "space-dark-purple": "hsl(var(--space-dark-purple))",
        "space-blue": "hsl(var(--space-blue))",
        "space-light-blue": "hsl(var(--space-light-blue))",
        "space-glow": "hsl(var(--space-glow))",
        "space-accent": "hsl(var(--space-accent))",
        "rainbow-red": "hsl(var(--rainbow-red))",
        "rainbow-orange": "hsl(var(--rainbow-orange))",
        "rainbow-yellow": "hsl(var(--rainbow-yellow))",
        "rainbow-green": "hsl(var(--rainbow-green))",
        "rainbow-blue": "hsl(var(--rainbow-blue))",
        "rainbow-purple": "hsl(var(--rainbow-purple))",
        "rainbow-pink": "hsl(var(--rainbow-pink))",
        "gold": "hsl(var(--gold))",
        "ancient-brown": "hsl(var(--ancient-brown))",
        "parchment": "hsl(var(--parchment))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [animate],
}