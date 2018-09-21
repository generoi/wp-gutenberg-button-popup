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
        add_action('init', [$this, 'load_textdomain']);
    }

    public function init()
    {
        add_action('enqueue_block_assets', [$this, 'block_assets']);
        add_action('enqueue_block_editor_assets', [$this, 'block_editor_assets']);
    }

    public function block_assets()
    {
        $this->enqueueStyle("{$this->plugin_name}/css", 'dist/style.css', ['wp-blocks']);
    }

    public function block_editor_assets()
    {
        $this->enqueueStyle("{$this->plugin_name}/editor/css", 'dist/editor.css', ['wp-edit-blocks']);
        $this->enqueueScript("{$this->plugin_name}/editor/js", 'dist/index.js', ['wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor']);
        $this->localizeScript("${$this->plugin_name}/editor/js", gutenberg_get_jed_locale_data($this->plugin_name));
    }

    public function load_textdomain()
    {
        // WP Performance Pack
        include __DIR__ . '/languages/javascript.php';
        load_plugin_textdomain($this->plugin_name, false, dirname(plugin_basename(__FILE__)) . '/languages');
    }
}

Plugin::getInstance();
