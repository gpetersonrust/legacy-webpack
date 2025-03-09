const path = require("path");
const { file_path } = require("./library/constants/global");
const fg = require('fast-glob');
const { typography_components } = require("./tailwind/typography,");
const { container_utilities } = require("./tailwind/container");
 
const { gap_utilities } = require("./tailwind/gaps");
const { safe_list } = require("./tailwind/options");
const { typography_utilities } = require("./tailwind/typography");
const { spacing_utilities } = require("./tailwind/spacing");
const { shadow_utilities } = require("./tailwind/shadows");
const { button_utilities } = require("./tailwind/buttons");
 

const phpFilesPattern = "**/*.php"; // The glob pattern to find PHP files recursively

// Use fast-glob to find PHP files
const phpFiles = fg.sync(phpFilesPattern, {
  ignore: ["node_modules", "dist", ".git"],
  cwd: file_path, // The base directory where the search starts
});

module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ React components
    ...phpFiles.map((file) => path.join(file_path, file)), // ✅ Add all PHP files
  ],
  safelist: safe_list,

  theme: {
    extend: {
      colors: {
        app: {
          primary: "#007AFF", // Apple’s signature blue
          ["primary-light"]: "#60AFFF", // Lighter blue for accents
          light: "#8E8E93", // Apple's system gray
          secondary: "#EFEFF4", // Background gray
          tertiary: "#FF9500", // Apple’s orange highlight
          confirm: "#34C759", // Apple’s green for confirmations
          raven: "#3A3A3C", // Dark mode-friendly gray
          dark: "#1C1C1E", // System dark background
          ["light-grey"]: "#F2F2F7", // Soft Apple gray for UI elements
        },
      },

      fontFamily: {
        header: ["Merriweather", "serif"],
        body: ["Open Sans", "sans-serif"],
      },

      spacing: {
        4: "4px",
        8: "8px",
        16: "16px",
        24: "24px",
        32: "32px",
        40: "40px",
        48: "48px",
        56: "56px",
        64: "64px",
      },

      maxWidth: {
        mobile: "100%",
        tablet: "720px",
        desktop: "1024px",
        large: "1280px",
      },

      screens: {
        sm: "640px", // Mobile
        md: "768px", // Tablet
        lg: "1024px", // Small desktop
        xl: "1280px", // Large desktop
        "2xl": "1536px", // Extra large screens
      },

      gap: {
        4: "4px",
        8: "8px",
        16: "16px",
        24: "24px",
        32: "32px",
        40: "40px",
      },

      flex: {
        "1": "1 1 0%",
        "auto": "1 1 auto",
        "none": "none",
      },

      gridTemplateColumns: {
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
      },

      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
      },

      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
      },
    },
  },

  plugins: [
    typography_utilities,
    spacing_utilities,
    shadow_utilities, 
    button_utilities
  ],
};