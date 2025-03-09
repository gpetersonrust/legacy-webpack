const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const { file_path } = require('./library/constants/global');

// ✅ Set your local WordPress domain (NO PROXY)
const localDomain = "http://darker-than-blood-series.local/";

// ✅ File paths to watch
const paths = {
  php: `${file_path}/**/*.php`,
  css: `${file_path}/**/*.css`,
  scss: `${file_path}/**/*.scss`,
  js: `${file_path}/**/*.js`
};

// ✅ BrowserSync Task (Directly Reload `.local`)
function watchFiles() {
  browserSync.init({
    // Don't use proxy
    proxy: false,
    // Use snippet mode
    snippet: true,
    // Open this URL when starting
    urls: {
      local: "http://darker-than-blood-series.local/t"
    },
    port: 800,
    // You can open specific paths
    startPath: "/components/your-component",
    // Add notify: false if you don't want the browserSync notification
    notify: true
  });

  // ✅ Watch PHP files → Full Page Reload
  gulp.watch(paths.php).on('change', browserSync.reload);

  // ✅ Watch JS files → Inject JS Changes (or Reload if Needed)
  gulp.watch(paths.js).on('change', browserSync.reload);

  // ✅ Watch SCSS & CSS → Inject Styles Without Reload
  gulp.watch([paths.css, paths.scss], (done) => {
    browserSync.reload("*.css");
    done();
  });
}

// ✅ Default Gulp Task
exports.default = watchFiles;
