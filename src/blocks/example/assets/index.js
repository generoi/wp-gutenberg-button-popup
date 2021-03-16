/** @wordpress */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import { InnerBlocks } from '@wordpress/block-editor'

import edit from './edit'
import metadata from './block.json';

registerBlockType(metadata.name, {
  ...metadata,
  title: __('Gutenberg Example'),
  description: __('Description'),
  icon: 'image-flip-horizontal',
  edit,
  save() {
    return <InnerBlocks.Content />;
  },
});
