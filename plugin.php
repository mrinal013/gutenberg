<?php
/**
 * Plugin Name: Gutenberg handbook
 * 
 * @package gutenberg-brushup
 */

defined ( 'ABSPATH' ) || exit;

/**
 * Load all translations for gutenberg plugin from MO file
 */
add_action( 'init', 'gutenberg_mrinal_load_textdomain' );
function gutenberg_mrinal_load_textdomain() {
    load_plugin_textdomain( 'gutenberg-brushup', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Register all block assets so that they can be enqueued throught Gutenberg in the corresponding context
 * 
 * Passes translations to JavaScript
 */
add_action( 'init', 'gutenberg_mrinal_register_block' );
function gutenberg_mrinal_register_block() {

    /**
     * Return if gutenberg is not active.
     */
    if( ! function_exists( 'register_block_type') ) {
        return;
    }

    wp_register_script( 
        'gutenberg-mrinal',
        plugins_url( 'block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-i18n' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
    );

    wp_register_style(
        'gutenberg-mrinal-style-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array('wp-edit-blocks'),
        filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
    );

    wp_register_style(
        'gutenberg-mrinal-style',
        plugins_url( 'style.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
    );

    register_block_type( 'gutenberg-brushup/gutenberg-mrinal', array(
        'style'         => 'gutenberg-mrinal-style',
        'editor_style'  => 'gutenberg-mrinal-style-editor',
        'editor_script' => 'gutenberg-mrinal',
    ) );

    /**
     * May be extends wp_set_script_translations
     */
    if( ! function_exists( 'wp_set_script_translations' ) ) {
        wp_set_script_translations( 'gutenberg-mrinal', 'gutenberg-brushup' );
    }

}

