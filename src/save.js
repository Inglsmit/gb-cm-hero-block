/* eslint-disable no-unused-vars */
// import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { title, description, id, url, alt, btnTitle, btnUrl } = attributes;
	return (
		<div {...useBlockProps.save()}>
			{url && (
				<img
					src={url}
					alt={alt}
					className={id ? `wp-image-${id}` : null}
				/>
			)}
			{title && <RichText.Content tagName="h1" value={title} />}
			{description && (
				<RichText.Content tagName="p" value={description} />
			)}
		</div>
	);
}
