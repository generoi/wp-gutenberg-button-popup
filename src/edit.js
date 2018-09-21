const blockClassName = 'wp-block-gutenberg-boilerplate';

import { Component } from '@wordpress/element';

class GutenbergBoilerplateBlock extends Component {
  render() {
    return (
      <div className={ blockClassName }>
          Example block
      </div>
    );
  }
}

export default GutenbergBoilerplateBlock;
