const mix = require('laravel-mix');
require('@tinypixelco/laravel-mix-wp-blocks');

mix.sass('src/blocks/button_popup/assets/style.scss', 'src/blocks/button_popup/dist')
  .sass('src/blocks/button_popup/assets/editor.scss', 'src/blocks/button_popup/dist')
  .js('src/blocks/button_popup/assets/script.js', 'src/blocks/button_popup/dist')
  .blocks('src/blocks/button_popup/assets/index.js', 'src/blocks/button_popup/dist');

 mix
  .sass('src/blocks/button_popups/assets/style.scss', 'src/blocks/button_popups/dist')
  .sass('src/blocks/button_popups/assets/editor.scss','src/blocks/button_popups/dist')
  .blocks('src/blocks/button_popups/assets/index.js', 'src/blocks/button_popups/dist');


mix.setPublicPath('.')
  .version();
