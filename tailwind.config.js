const { file_path } = require("./library/constants/global");
const fg = require('fast-glob');
const { typography_components } = require("./tailwind/typography,");
const { container_utilities } = require("./tailwind/container");
const { site_utities } = require("./tailwind/shadows");
const { gap_utilities } = require("./tailwind/gaps");
const { safe_list } = require("./tailwind/options");

const phpFilesPattern = "**/*.php"; // The glob pattern to find PHP files recursively

// Use fast-glob to find PHP files
const phpFiles = fg.sync(phpFilesPattern, {
  ignore: ["node_modules", "dist", ".git"],
  cwd: file_path, // The base directory where the search starts
});

module.exports = {
  mode: 'jit',
  content: phpFiles, // Set the content property to include the found PHP files
   safelist:  safe_list,

  theme: {
    extend: {
      colors: {
        app: {
          primary: '#f91942',
          ['primary-light']: '#ff395d',
          light: '#5c5c5c',
          secondary: '#f919420f',
          tertiary: '#FCB316',
          confirm: '#54ba1d',
          raven: '#333333cc;',
          dark: '#1b1b1b',
          ['light-grey']: '#fafafa',
        },
      },
    },
  },
  plugins: [
    typography_components, container_utilities, site_utities,
    gap_utilities,
    // Add typography components plugin
  ],
};

