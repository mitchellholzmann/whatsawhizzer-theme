/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

 const mix = require('laravel-mix');
 const tailwindcss = require('tailwindcss');

 /**
  * Set the public path to the location of the assets.
  */
 mix.setPublicPath('public');

 /**
  * Disable any css url rewriting by default.
  */
 mix.options({
     processCssUrls: false,
 });

 /**
  * Disable success notifications.
  */
  mix.disableSuccessNotifications();

 /**
  * Build source maps for assets.
  */
  mix.sourceMaps();

 /**
  * Versioning and cache busting.
  */
 if (mix.inProduction()) {
     mix.version();
 }

 /**
 * Compile Javascript and extract vendors.
 */
mix.js('resources/scripts/app.js', 'public/scripts').extract();
mix.js('resources/scripts/editor.js', 'public/scripts').extract();

/**
 * Compile css.
 */
 mix.postCss('resources/styles/app.css', 'public/styles', [
  require('postcss-import'),
  require('tailwindcss/nesting'),
  tailwindcss('./tailwind.config.js'),
  require('autoprefixer'),
]);

mix.postCss('resources/styles/editor.css', 'public/styles', [
  require('postcss-import'),
  require('autoprefixer'),
]);
