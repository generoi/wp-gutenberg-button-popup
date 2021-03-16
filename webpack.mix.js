const mix = require('laravel-mix');
require('@tinypixelco/laravel-mix-wp-blocks');

mix.sass('src/style.scss', 'dist')
   .sass('src/editor.scss', 'dist');

 mix.js('src/index.js', 'dist')
  .blocks('src/editor.js', 'dist');
