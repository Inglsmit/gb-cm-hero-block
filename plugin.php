<?php
/**
 * Plugin Name:       CM hero block
 * Description:       CM hero block - image, title, subtitle.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Paul Inglsmit
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       hero-block
 *
 * @package           cm-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_boilerplate_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'create_block_boilerplate_block_init' );
