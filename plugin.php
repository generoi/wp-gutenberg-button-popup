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
}

Plugin::getInstance();
