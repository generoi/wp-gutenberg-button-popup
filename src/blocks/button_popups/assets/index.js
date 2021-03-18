/** @wordpress */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import { InnerBlocks } from '@wordpress/block-editor'

import edit from './edit'
import metadata from './block.json';

registerBlockType(metadata.name, {
  ...metadata,
  title: __('Button Popups'),
  description: __(''),
  icon: 'button',
  edit,
  save() {
    return <InnerBlocks.Content />;
  },
});
