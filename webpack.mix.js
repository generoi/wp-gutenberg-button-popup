const mix = require('laravel-mix');
require('@tinypixelco/laravel-mix-wp-blocks');

mix.sass('src/frontend.scss', 'dist')
   .sass('src/editor.scss', 'dist');

 mix.js('src/frontend.js', 'dist')
  .blocks('src/editor.js', 'dist');

mix.setPublicPath('.')
  .version();
