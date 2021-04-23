<?php
/*
Plugin Name:        Block Button Popup
Plugin URI:         http://genero.fi
Description:        A boilerplate WordPress Gutenberg block
Version:            1.0.0
Author:             Genero
Author URI:         http://genero.fi/
License:            MIT License
License URI:        http://opensource.org/licenses/MIT
*/
namespace GeneroWP\BlockButtonPopup;

use Illuminate\Support\Str;
use ReflectionClass;

if (!defined('ABSPATH')) {
    exit;
}

if (file_exists($composer = __DIR__ . '/vendor/autoload.php')) {
    require_once $composer;
}

class Plugin
{
    protected static $instance;

    public static function getInstance()
    {
        if (!isset(self::$instance)) {
            self::$instance = new static();
        }
        return self::$instance;
    }

    public function __construct()
    {
        add_action('plugins_loaded', [$this, 'init']);
    }

    public function init()
    {
        add_action('enqueue_block_editor_assets', [$this, 'blockEditorAssets']);
        add_action('enqueue_block_assets', [$this, 'blockAssets']);

        foreach (glob(__DIR__ . '/src/blocks/*/*.php') as $file) {
            $composer = __NAMESPACE__ . str_replace(
                ['/', '.php'],
                ['\\', ''],
                Str::after($file, __DIR__ . '/src')
            );

            if (is_subclass_of($composer, Block::class) && ! (new ReflectionClass($composer))->isAbstract()) {
                (new $composer())->compose();
            }
        }
    }

    public function assetUrl(string $asset): string
    {
        $manifest = json_decode(file_get_contents(__DIR__ . '/mix-manifest.json'), true);
        return plugins_url($manifest[$asset], __FILE__);
    }

    public function blockAssets()
    {
        if ($manifest = include __DIR__ . '/dist/frontend.asset.php') {
            wp_enqueue_style(
                'wp-gutenberg-button-popup/frontend.css',
                $this->assetUrl('/dist/frontend.css'),
                ['wp-edit-blocks', 'common'],
                null
            );
            wp_enqueue_script(
                'wp-gutenberg-button-popup/frontend.js',
                $this->assetUrl('/dist/frontend.js'),
                $manifest['dependencies'],
                null,
                true
            );
        }
    }

    public function blockEditorAssets()
    {
        if ($manifest = include __DIR__ . '/dist/editor.asset.php') {
            wp_enqueue_style(
                'wp-gutenberg-button-popup/editor.css',
                $this->assetUrl('/dist/editor.css'),
                ['wp-edit-blocks', 'common'],
                null
            );
            wp_enqueue_script(
                'wp-gutenberg-button-popup/editor.js',
                $this->assetUrl('/dist/editor.js'),
                $manifest['dependencies'],
                null
            );
        }
    }
}

Plugin::getInstance();
