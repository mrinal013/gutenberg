<?php
/**
 * Plugin Name: Guten block development brushup
 */

add_action( 'enqueue_block_editor_assets', 'mrinal_enqueue_blocks' );
function mrinal_enqueue_blocks() {
    wp_enqueue_script( 'mrinal-block', plugins_url( 'block.js', __FILE__ ), [ 'wp-blocks', 'wp-element' ] );
}

add_action( 'enque_block_assets', 'mrinal_enqueue_style' );
function mrinal_enqueue_style() {
    wp_enqueue_style( 'mrinal-block-style', plugins_url( 'block.css', __FILE__ ), [], filemtime( plugin_dir_path( __FILE__ ) . 'block.css') );
}