/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Enable dark mode using class-based toggling
  content: [
    "./pages/**/*.{js,jsx}", // Specify files to process for Tailwind CSS utilities
    "./components/**/*.{js,jsx}",
  ],
  prefix: "", // No prefix added to generated utility classes
  theme: {
    container: {
      center: true, // Center align content within container
      padding: "15px", // Padding applied to all sides of the container
    },
    screens: {
      sm: "640px", // Responsive screen breakpoints definition
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)", // Define custom font family
    },
    extend: {
      colors: {
        primary: {
          light: "#ffffff", // Light mode primary color
          dark: "#1c1c22", // Dark mode primary color
        },
        accent: {
          DEFAULT: "#189EDA", // Default accent color
          hover: "#29B6F6", // Hover state for accent color
        },
        text: {
          light: "#000000", // Light mode text color
          dark: "#ffffff", // Dark mode text color
        },
      },
      keyframes: {
        "accordion-down": { // Define custom keyframes for animations
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out", // Define animation presets
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Enable additional Tailwind CSS plugin
};
