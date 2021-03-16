import {
  useBlockProps,
} from '@wordpress/block-editor';

function BlockEdit() {
  const blockProps = useBlockProps();

  return (
    <>
      <div {...blockProps}>
        Example block
      </div>
    </>
  );
}

export default BlockEdit;
