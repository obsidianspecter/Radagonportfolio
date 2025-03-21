import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        amber: {
          100: "#fef3c7",
          200: "#fde68a",
          400: "#fbbf24",
          500: "#f59e0b",
          900: "#78350f",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-slow-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "sparkle-1": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(4px, -4px)" },
        },
        "sparkle-2": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-4px, -4px)" },
        },
        "sparkle-3": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(4px, 4px)" },
        },
        "sparkle-4": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-4px, 4px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin-slow 8s linear infinite",
        "spin-slow-reverse": "spin-slow-reverse 8s linear infinite",
        "sparkle-1": "sparkle-1 2s ease-in-out infinite",
        "sparkle-2": "sparkle-2 2s ease-in-out infinite 0.5s",
        "sparkle-3": "sparkle-3 2s ease-in-out infinite 1s",
        "sparkle-4": "sparkle-4 2s ease-in-out infinite 1.5s",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

