/* eslint-disable no-unused-vars */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InnerBlocks,
} from '@wordpress/block-editor';
import { isBlobURL } from '@wordpress/blob';
import { Spinner, ToolbarButton } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { id, url, alt, type } = attributes;

	const onSelectMedia = (media) => {
		// console.log(media);
		if (!media || !media.url) {
			setAttributes({ url: undefined, id: undefined, alt: '', type: '' });
			return;
		}
		setAttributes({
			url: media.url,
			id: media.id,
			alt: media.alt,
			type: media.type,
		});
	};

	// const onSelectURL = (...debug) => {
	// 	console.log(debug);
	// 	setAttributes({
	// 		url: newURL,
	// 		id: undefined,
	// 		alt: '',
	// 		type: '',
	// 	});
	// };

	const removeMedia = () => {
		setAttributes({
			url: undefined,
			alt: '',
			id: undefined,
			type: '',
		});
	};

	const HERO_BLOCK_TEMPLATE = [
		['core/heading', { placeholder: 'Title' }],
		['core/paragraph', { placeholder: 'Description' }],
		['core/button', { placeholder: 'Link' }],
	];

	return (
		<>
			{url && (
				<BlockControls group="inline">
					<MediaReplaceFlow
						name={__('Replace Media', 'team-members')}
						onSelect={onSelectMedia}
						// onSelectURL={onSelectURL}
						// eslint-disable-next-line no-console
						onError={(err) => console.log(err)}
						accept="image/*, video/*"
						allowedTypes={['image', 'video']}
						mediaId={id}
						mediaURL={url}
					/>
					<ToolbarButton onClick={removeMedia}>
						{__('Remove Media', 'team-members')}
					</ToolbarButton>
				</BlockControls>
			)}
			<div {...useBlockProps()}>
				<div className="wp-block-cm-block-hero-block__holder">
					{url && (
						<div
							className={`wp-block-cm-block-hero-block__img-wrap${
								isBlobURL(url) ? ' is-loading' : ''
							}`}
						>
							{type === 'image' ? (
								<img
									className="wp-block-cm-block-hero-block__img"
									src={url}
									alt={alt}
								/>
							) : (
								<video src={url} />
							)}

							{isBlobURL(url) && <Spinner />}
						</div>
					)}

					<MediaPlaceholder
						icon="admin-users"
						onSelect={onSelectMedia}
						// eslint-disable-next-line no-console
						onError={(err) => console.log(err)}
						accept="image/*, video/*"
						allowedTypes={['image', 'video']}
						disableMediaButtons={url}
					/>
					{url && (
						<div className="wp-block-cm-block-hero-block__inner-block">
							<InnerBlocks
								template={HERO_BLOCK_TEMPLATE}
								templateLock="all"
							/>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
