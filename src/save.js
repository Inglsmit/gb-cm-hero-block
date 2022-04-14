/* eslint-disable no-unused-vars */
// import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { id, url, alt, type } = attributes;
	return (
		<div {...useBlockProps.save()}>
			{url && (
				<>
					<section className="hero">
						<div className="section-wrap">
							<div className="hero__text-box">
								<InnerBlocks.Content />
							</div>
						</div>
						<div className="hero__bg-mask">
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
						</div>
					</section>
				</>
			)}
		</div>
	);
}
