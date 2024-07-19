import { useState } from 'react';
import { gallery as data } from '../../../data';
import styles from './Gallery.module.scss';
import GalleryItem from './GalleryItem';
import GalleryModal from './GalleryModal';

function Gallery() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeImage, setActiveImage] = useState('');

	const images = data.map((item, index) => {
		return (
			<GalleryItem
				key={index}
				image={item}
				number={index + 1}
				setIsOpen={setIsOpen}
				setActiveImage={setActiveImage}
			/>
		);
	});

	return (
		<section className={styles.gallery}>
			<div className={styles.container}>
				<h2 className={styles.title}>Галерея</h2>
				<h3 className={styles.subtitle}>Делимся впечатлениями</h3>

				<div className={styles['gallery-container']}>{images}</div>

				{isOpen && (
					<GalleryModal
						galleryData={data}
						setIsOpen={setIsOpen}
						activeImage={activeImage}
						setActiveImage={setActiveImage}
					/>
				)}
			</div>
		</section>
	);
}

export default Gallery;
