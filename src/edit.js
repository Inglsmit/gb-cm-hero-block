/* eslint-disable no-unused-vars */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import { isBlobURL } from '@wordpress/blob';
import { Spinner } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { title, description, id, url, alt, btnTitle, btnUrl } = attributes;

	const onChangeTitle = (newTitle) => {
		setAttributes({ title: newTitle });
	};
	const onChangeDescription = (newDescription) => {
		setAttributes({ description: newDescription });
	};
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

	return (
		<p {...useBlockProps()}>
			{url && (
				<div
					className={`wp-block-cm-block-hero-block-img${
						isBlobURL(url) ? ' is-loading' : ''
					}`}
				>
					<img src={url} alt={alt} />
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
			<RichText
				placeholder={__('Title', 'hero-block')}
				tagName="h4"
				onChange={onChangeTitle}
				value={title}
				allowedFormats={[]}
			/>
			<RichText
				placeholder={__('Description', 'hero-block')}
				tagName="p"
				onChange={onChangeDescription}
				value={description}
				allowedFormats={[]}
			/>
		</p>
	);
}
