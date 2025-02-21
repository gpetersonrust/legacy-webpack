// site-shadow 0px 20px 48px -12px rgba(0, 0, 0, 0.12
exports.site_utities = ({ addUtilities }) => {
    addUtilities({
        '.site-shadow': {
            boxShadow: '0px 20px 48px -12px rgba(0, 0, 0, 0.12)',
        },
        '.site-shadow-sm': {
            boxShadow: '0px 10px 24px -8px rgba(0, 0, 0, 0.12)',
        },
        '.site-shadow-md': {
            boxShadow: '0px 16px 40px -8px rgba(0, 0, 0, 0.12)',
        },
        '.site-shadow-lg': {
            boxShadow: '0px 24px 64px -16px rgba(0, 0, 0, 0.12)',
        },
    });
}
