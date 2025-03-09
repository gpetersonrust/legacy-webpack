exports.button_utilities = ({ addUtilities }) => {
  addUtilities({
    ".brand-button": {
      padding: "12px 24px",
      borderRadius: "var(--brand-radius, 8px)",
      fontWeight: "600",
      transition: "all 0.3s ease-in-out",
    },
    ".brand-button-primary": {
      backgroundColor: "var(--brand-primary, #007AFF)",
      color: "white",
      "&:hover": { backgroundColor: "#005ecb" },
    },
    ".brand-button-secondary": {
      backgroundColor: "var(--brand-secondary, #EFEFF4)",
      color: "#333",
      "&:hover": { backgroundColor: "#d6d6db" },
    },
  });
};
