import classnames from 'classnames';
import {
  BlockControls,
  useBlockProps,
  useInnerBlocksProps,
} from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarItem } from '@wordpress/components';
import ContentJustificationDropdown from './content-justification-dropdown';

const ALLOWED_BLOCKS = [
  'genero/button-popup',
];

const BUTTONS_TEMPLATE = [
  ['genero/button-popup'],
];

function BlockEdit({
  attributes: { contentJustification },
  setAttributes,
}) {
  const blockProps = useBlockProps({
    className: classnames({
      [`is-content-justification-${contentJustification}`]: contentJustification,
    }),
  });
  const innerBlocksProps = useInnerBlocksProps({
    className: 'wp-block-genero-button-popups__inner-container',
  }, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: BUTTONS_TEMPLATE,
    templateInsertUpdatesSelection: true,
  });

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarItem>
            { (toggleProps) => (
              <ContentJustificationDropdown
                toggleProps={ toggleProps }
                value={ contentJustification }
                onChange={ (updatedValue) => {
                  setAttributes({
                    contentJustification: updatedValue,
                  });
                } }
              />
            ) }
          </ToolbarItem>
        </ToolbarGroup>
      </BlockControls>
      <div { ...blockProps }>
        <div { ...innerBlocksProps }/>
      </div>
    </>
  );
}

export default BlockEdit;
