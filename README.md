# wp-gutenberg-button-popup

> A Gutenberg block for creating buttons that open popups

![gutenberg-popups](https://user-images.githubusercontent.com/302736/111697504-69c25900-8814-11eb-8d05-636bc41b17bc.gif)

## Installation

    composer require generoi/wp-gutenberg-button-popup
    
## Requirements

- WordPress 5.6 or newer

## Usage

You can customize the default template for popups with a filter.

```js
import { addFilter } from '@wordpress/hooks'

addFilter('wp-gutenberg-button-popup.popupTemplate', 'theme/popup-template', () => {
  return [
    ['core/columns', {align: 'full'}, [
      ['core/column', {}, [
        ['core/image'],
        ['core/group']
      ]],
      ['core/column', {}, [
        ['core/heading'],
        ['core/paragraph'],
        ['core/list'],
        ['core/buttons'],
      ]],
    ]],
  ];
})
```

## Development

Install dependencies

    composer install
    npm install

Run the tests

    npm run test

Build assets

    # Minified assets which are to be committed to git
    npm run build:production

    # Watch for changes and re-compile while developing the plugin
    npm run start
