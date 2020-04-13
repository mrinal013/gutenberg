<?php
/**
 * Plugin Name: Guten block development brushup
 */

 add_action( 'enqueue_block_editor_assets', 'mrinal_enqueue_block' );

 function mrinal_enqueue_block() {
     wp_enque_script( 'mrinal-block', plugins_url( 'block.js', __FILE__ ), array( 'wp-blocks', 'wp-element' ) );
 }