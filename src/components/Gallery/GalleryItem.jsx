import styles from './Gallery.module.scss';

function GalleryItem({ image, number, setIsOpen, setActiveImage }) {
	const style = {
		background: `url(${image})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	};

	const openModal = () => {
		setIsOpen(true);
		setActiveImage(image);
	};
	return (
		<div
			className={`${styles[`gallery-item${number}`]} ${styles['item-styles']}`}
			style={style}
		>
			<div className={styles['item-zoom']} onClick={openModal}>
				<img src="/images/icon_zoom.png" alt="zoom" />
			</div>
		</div>
	);
}

export default GalleryItem;
