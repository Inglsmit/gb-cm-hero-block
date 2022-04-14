/* eslint-disable no-unused-vars */
// import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { id, url, alt, type } = attributes;
	return (
		<div {...useBlockProps.save()}>
			{url && (
				<>
					{type === 'image' ? (
						<img
							src={url}
							alt={alt}
							className={id ? `wp-image-${id}` : null}
						/>
					) : (
						<video
							autoPlay
							muted
							src={url}
							alt={alt}
							className={id ? `wp-video-${id}` : null}
						></video>
					)}
				</>
			)}
			<InnerBlocks.Content />
		</div>
	);
}
