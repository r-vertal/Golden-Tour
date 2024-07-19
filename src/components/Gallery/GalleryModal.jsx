import styles from './Gallery.module.scss';

function GalleryModal({ galleryData, setIsOpen, activeImage, setActiveImage }) {
	const closeModal = () => {
		setIsOpen(false);
	};

	const prevImage = () => {
		const prev = galleryData.indexOf(activeImage) - 1;
		galleryData[prev]
			? setActiveImage(galleryData[prev])
			: setActiveImage(galleryData[galleryData.length - 1]);
	};

	const nextImage = () => {
		const next = galleryData.indexOf(activeImage) + 1;
		galleryData[next]
			? setActiveImage(galleryData[next])
			: setActiveImage(galleryData[0]);
	};

	const navImages = galleryData.map((item, index) => {
		const classList =
			item === activeImage
				? `${styles['list-item']} ${styles.active}`
				: `${styles['list-item']} `;
		return (
			<li
				className={classList}
				key={index}
				onClick={() => {
					setActiveImage(item);
				}}
			>
				<img src={item} alt="image" />
			</li>
		);
	});
	return (
		<div className={styles['gallery-modal']}>
			<img src={activeImage} alt="image" />
			<div className={styles['gallery-nav']}>
				<ul className={styles['nav-list']}>{navImages}</ul>
			</div>
			<button className={styles['button-close']} onClick={closeModal}>
				✕
			</button>
			<button className={styles['button-prev']} onClick={prevImage}>
				&#10094;
			</button>
			<button className={styles['button-next']} onClick={nextImage}>
				&#10095;
			</button>
		</div>
	);
}

export default GalleryModal;
