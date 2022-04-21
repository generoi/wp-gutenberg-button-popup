import { applyFilters } from '@wordpress/hooks';

import {
  useBlockProps,
  useInnerBlocksProps,
  BlockControls,
  RichText,
} from '@wordpress/block-editor';
import {
  ToolbarGroup,
  ToolbarButton,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const DEFAULT_POPUP_TEMPLATE = [
  ['core/columns', {align: 'full'}, [
    ['core/column', {}, [
      ['core/image'],
      ['core/group'],
    ]],
    ['core/column', {}, [
      ['core/heading'],
      ['core/paragraph'],
      ['core/list'],
    ]],
  ]],
];

function BlockEdit({
  name,
  attributes,
  setAttributes,
}) {
  const {
    text,
  } = attributes;
  const className = `wp-block-${name.replace('/', '-')}`;

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  }

  const blockProps = useBlockProps();
  const innerBlocksProps = useInnerBlocksProps({
    className: `${className}__popup__content`,
  }, {
    template: applyFilters('wp-gutenberg-button-popup.popupTemplate', DEFAULT_POPUP_TEMPLATE),
    templateInsertUpdatesSelection: false,
  });

  return (
    <>
      <div {...blockProps}>
        <BlockControls>
          <ToolbarGroup>
            <ToolbarButton onClick={ onTogglePopup }>
              { isPopupOpen ? 'Close popup' : 'Open popup ' }
            </ToolbarButton>
          </ToolbarGroup>
        </BlockControls>

        <RichText
          placeholder={ __( 'Add text…' ) }
          tagName='button'
          value={ text }
          onChange={ (value) => setAttributes({ text: value }) }
          withoutInteractiveFormatting
          className={ `${className}__button` }
        />

        { isPopupOpen && (
          <div
            aria-expanded={ isPopupOpen ? 'true' : 'false' }
            className={ `${className}__popup` }>
            <div className={ `${className}__popup__inner-container` }>
              <div className={ `${className}__popup__header` }>
                <RichText
                  placeholder={ __( 'Add text…' ) }
                  tagName='span'
                  value={ text }
                  onChange={ (value) => setAttributes({ text: value }) }
                  withoutInteractiveFormatting
                  className={ `${className}__popup__title` }
                />
                <button
                  onClick={ onTogglePopup }
                  className={ `${className}__popup__close-button` }
                >
                  Close
                </button>
              </div>
              <div { ...innerBlocksProps } />
            </div>
          </div>
        ) }
      </div>
    </>
  );
}

export default BlockEdit;
