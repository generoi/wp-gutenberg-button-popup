<?php

namespace GeneroWP\BlockBoilerplate\blocks\button_popup;

use GeneroWP\BlockBoilerplate\Block;

class ButtonPopup extends Block
{
    public function render($attributes, $content): string
    {
        $this->id = wp_unique_id('button-popup--');
        d($this->id);

        return parent::render($attributes, $content);
    }
}
