import edit from './edit';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'

registerBlockType('genero/gutenberg-boilerplate', {
  title: __('Example block', 'wp-gutenberg-boilerplate'),
  icon: 'email',
  category: 'embed',
  supports: {
    html: false,
    align: ['center', 'wide', 'full'],
  },
  keywords: [
    __('example', 'wp-gutenberg-boilerplate'),
  ],

  edit,

  save: (props) => {
    return (
      <div className={ props.className }>
          Example block
      </div>
    );
  },
});
