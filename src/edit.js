/* eslint-disable no-unused-vars */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InnerBlocks,
	InspectorControls,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { isBlobURL } from '@wordpress/blob';
import {
	Spinner,
	ToolbarButton,
	PanelBody,
	SelectControl,
	TextareaControl,
} from '@wordpress/components';
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

	const imageObject = useSelect(
		(select) => {
			const { getMedia } = select('core');
			return id ? getMedia(id) : null;
		},
		[id]
	);

	const imageSizes = useSelect((select) => {
		return select(blockEditorStore).getSettings().imageSizes;
	}, []);

	const getImageSizeOptions = () => {
		if (!imageObject) return [];
		const options = [];
		const sizes = imageObject.media_details.sizes;
		for (const key in sizes) {
			const size = sizes[key];
			const imageSize = imageSizes.find((s) => s.slug === key);
			if (imageSize) {
				options.push({
					label: imageSize.name,
					value: size.source_url,
				});
			}
		}
		return options;
	};

	const onChangeImageSize = (newURL) => {
		setAttributes({ url: newURL });
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

	const onChangeAlt = (newAlt) => {
		setAttributes({ alt: newAlt });
	};

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
			<InspectorControls>
				<PanelBody title={__('Image Settings', 'hero-block')}>
					{id && (
						<SelectControl
							label={__('Image Size', 'hero-block')}
							options={getImageSizeOptions()}
							value={url}
							onChange={onChangeImageSize}
						/>
					)}
					{url && !isBlobURL(url) && (
						<TextareaControl
							label={__('Alt Text', 'hero-block')}
							value={alt}
							onChange={onChangeAlt}
							help={__(
								"Alternative text describes your image to people can't see it. Add a short description with its key details.",
								'hero-block'
							)}
						/>
					)}
				</PanelBody>
			</InspectorControls>
			{url && (
				<BlockControls group="inline">
					<MediaReplaceFlow
						name={__('Replace Media', 'hero-block')}
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
						{__('Remove Media', 'hero-block')}
					</ToolbarButton>
				</BlockControls>
			)}
			<div {...useBlockProps()} data-align="full">
				<div className="wp-block-cm-block-hero-block__holder">
					{url && (
						<div
							className={`wp-block-cm-block-hero-block__media-wrap${
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
								<video
									autoPlay
									muted
									loop
									className="wp-block-cm-block-hero-block__video"
									src={url}
								/>
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
							<div className="wp-block-cm-block-hero-block__container">
								<InnerBlocks
									template={HERO_BLOCK_TEMPLATE}
									templateLock="all"
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
