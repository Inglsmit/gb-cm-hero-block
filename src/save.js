/* eslint-disable no-unused-vars */
// import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { id, url, alt, type } = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: ` alignfull`,
			})}
		>
			{url && (
				<div className="wp-block-cm-block-hero-block__holder">
					<div className="wp-block-cm-block-hero-block__media-wrap">
						{type === 'image' ? (
							<img
								src={url}
								alt={alt}
								className={
									id
										? `wp-block-cm-block-hero-block__img wp-image-${id}`
										: null
								}
							/>
						) : (
							<video
								autoPlay
								muted
								loop
								src={url}
								alt={alt}
								className={
									id
										? `wp-block-cm-block-hero-block__video wp-video-${id}`
										: null
								}
							></video>
						)}
					</div>
					<div className="wp-block-cm-block-hero-block__inner-block">
						<div className="wp-block-cm-block-hero-block__container">
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
