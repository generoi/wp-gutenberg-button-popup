const mix = require('laravel-mix');

mix.sass('src/style.scss', 'dist/');
mix.sass('src/editor.scss', 'dist/');
mix.react('src/index.js', 'dist/');

mix.babelConfig({
  'plugins': [
    [
      '@wordpress/babel-plugin-makepot', { 'output': 'languages/javascript.pot' },
    ],
  ],
});

mix.webpackConfig({
  externals: {
    'lodash': 'lodash',
    'react': 'React',
    'react-dom': 'ReactDOM',
    '@wordpress/components': 'wp.components',
    '@wordpress/compose': 'wp.compose',
    '@wordpress/element': 'wp.element',
    '@wordpress/blocks': 'wp.blocks',
    '@wordpress/editor': 'wp.editor',
    '@wordpress/hooks': 'wp.hooks',
    '@wordpress/date': 'wp.date',
    '@wordpress/data': 'wp.data',
    '@wordpress/i18n': 'wp.i18n',
    '@wordpress/media': 'wp.media',
    '@wordpress/keycodes': 'wp.keycodes',
    '@wordpress/editPost': 'wp.editPost',
    '@wordpress/plugins': 'wp.plugins',
    '@wordpress/apiRequest': 'wp.apiRequest',
  },
});
