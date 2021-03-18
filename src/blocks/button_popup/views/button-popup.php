<div class="<?php echo $block->classes; ?>">
    <button class="<?php echo $block->className; ?>__button" aria-controls="<?php echo $block->id; ?>" aria-haspopup>
        <?php echo wp_kses_post($block->attributes->text); ?>
    </button>

    <div class="<?php echo $block->className; ?>__popup" id="<?php echo $block->id; ?>" aria-expanded="false">
        <div class="<?php echo $block->className; ?>__popup__inner-container">
            <div class="<?php echo $block->className; ?>__popup__header">
                <span class="<?php echo $block->className; ?>__popup__title">
                    <?php echo wp_kses_post($block->attributes->text); ?>
                </span>
                <button class="<?php echo $block->className; ?>__popup__close-button" aria-controls="<?php echo $block->id; ?>">
                    <?php echo __('Close'); ?>
                </button>
            </div>
            <div class="<?php echo $block->className; ?>__popup__content">
                <?php echo $content; ?>
            </div>
        </div>
    </div>
</div>
