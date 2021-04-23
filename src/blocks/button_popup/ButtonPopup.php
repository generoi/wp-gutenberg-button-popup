<?php

namespace GeneroWP\BlockButtonPopup\blocks\button_popup;

use GeneroWP\BlockButtonPopup\Block;

class ButtonPopup extends Block
{
    public function render($attributes, $content): string
    {
        $this->id = wp_unique_id('button-popup--');

        return parent::render($attributes, $content);
    }
}
