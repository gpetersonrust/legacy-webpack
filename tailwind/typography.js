exports.typography_utilities = ({ addUtilities }) => {
  addUtilities({
    ".brand-font-header": { fontFamily: "'Merriweather', serif" },
    ".brand-font-body": { fontFamily: "'Open Sans', sans-serif" },

    ".brand-text-sm": { fontSize: "14px", lineHeight: "1.4" },
    ".brand-text-md": { fontSize: "16px", lineHeight: "1.6" },
    ".brand-text-lg": { fontSize: "20px", lineHeight: "1.8" },
    ".brand-text-xl": { fontSize: "24px", lineHeight: "1.8" },
    ".brand-text-2xl": { fontSize: "32px", lineHeight: "2.0" },

    ".brand-font-light": { fontWeight: "300" },
    ".brand-font-regular": { fontWeight: "400" },
    ".brand-font-semibold": { fontWeight: "600" },
    ".brand-font-bold": { fontWeight: "700" },
  });
};

