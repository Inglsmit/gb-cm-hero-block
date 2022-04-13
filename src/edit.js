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
	const { id, url, alt } = attributes;

	const onSelectImage = (image) => {
		if (!image || !image.url) {
			setAttributes({ url: undefined, id: undefined, alt: '' });
			return;
		}
		setAttributes({ url: image.url, id: image.id, alt: image.alt });
	};

	const onSelectURL = (newURL) => {
		setAttributes({
			url: newURL,
			id: undefined,
			alt: '',
		});
	};

	const removeImage = () => {
		setAttributes({
			url: undefined,
			alt: '',
			id: undefined,
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
						name={__('Replace Image', 'team-members')}
						onSelect={onSelectImage}
						onSelectURL={onSelectURL}
						// eslint-disable-next-line no-console
						onError={(err) => console.log(err)}
						accept="image/*"
						allowedTypes={['image']}
						mediaId={id}
						mediaURL={url}
					/>
					<ToolbarButton onClick={removeImage}>
						{__('Remove Image', 'team-members')}
					</ToolbarButton>
				</BlockControls>
			)}
			<div {...useBlockProps()}>
				<div className="wp-block-cm-block-hero-block-holder">
					{url && (
						<div
							className={`wp-block-cm-block-hero-block-img-wrap${
								isBlobURL(url) ? ' is-loading' : ''
							}`}
						>
							<img
								className="wp-block-cm-block-hero-block-img"
								src={url}
								alt={alt}
							/>
							{isBlobURL(url) && <Spinner />}
						</div>
					)}

					<MediaPlaceholder
						icon="admin-users"
						onSelect={onSelectImage}
						onSelectURL={onSelectURL}
						// eslint-disable-next-line no-console
						onError={(err) => console.log(err)}
						accept="image/*"
						allowedTypes={['image']}
						disableMediaButtons={url}
					/>
					<div className="wp-block-cm-block-hero-block-inner-block">
						<InnerBlocks
							template={HERO_BLOCK_TEMPLATE}
							templateLock="all"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
