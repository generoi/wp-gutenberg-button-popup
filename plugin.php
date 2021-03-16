<?php
/*
Plugin Name:        Gutenberg Plugin Boilerplate
Plugin URI:         http://genero.fi
Description:        A boilerplate WordPress Gutenberg block
Version:            1.0.0
Author:             Genero
Author URI:         http://genero.fi/
License:            MIT License
License URI:        http://opensource.org/licenses/MIT
*/
namespace GeneroWP\BlockBoilerplate;

use Puc_v4_Factory;
use GeneroWP\Common\Singleton;
use GeneroWP\Common\Assets;
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
    use Singleton;
    use Assets;

    public $version = '1.0.0';
    public $plugin_name = 'wp-gutenberg-boilerplate';
    public $plugin_path;
    public $plugin_url;
    public $github_url = 'https://github.com/generoi/wp-gutenberg-boilerplate';

    public function __construct()
    {
        $this->plugin_path = plugin_dir_path(__FILE__);
        $this->plugin_url = plugin_dir_url(__FILE__);

        Puc_v4_Factory::buildUpdateChecker($this->github_url, __FILE__, $this->plugin_name);

        add_action('plugins_loaded', [$this, 'init']);
    }

    public function init()
    {
        add_action('enqueue_block_assets', [$this, 'block_assets']);
        add_action('enqueue_block_editor_assets', [$this, 'block_editor_assets']);

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

    public function block_assets()
    {
        $this->enqueueStyle("{$this->plugin_name}/css", 'dist/style.css');
        $this->enqueueScript("{$this->plugin_name}/js", 'dist/index.js');
    }

    public function block_editor_assets()
    {
        $this->enqueueStyle("{$this->plugin_name}/editor/css", 'dist/editor.css', ['wp-edit-blocks', 'common']);

        if ($manifest = include __DIR__ . '/dist/manifest.asset.php') {
            $this->enqueueScript("{$this->plugin_name}/editor/js", 'dist/editor.js', $manifest['dependencies']);
        }
    }
}

Plugin::getInstance();
