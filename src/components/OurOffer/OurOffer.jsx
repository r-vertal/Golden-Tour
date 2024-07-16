import { useState } from 'react';
import { ourOffer as data } from '../../../data';
import styles from './OurOffer.module.scss';
import OurOfferItem from './OurOfferItem';

function OurOffer() {
	const [activeItem, setActiveItem] = useState('flight');

	const handlerClick = (type) => {
		setActiveItem(type);
	};

	return (
		<section className={styles['our-offer']}>
			<div className={styles.content}>
				<h2 className={styles.title}>Плюсы в работе с нашей компанией</h2>
				<h3 className={styles.subtitle}>Что мы можем прежложить?</h3>
				<p className={styles.paragraph}>
					Подберем, расскажем, покажем, организуем любой тур от самых недорогих
					вариантов до VIP.
				</p>

				<OurOfferItem
					data={data.flight}
					isActive={activeItem === 'flight'}
					onClick={() => {
						handlerClick('flight');
					}}
				/>
				<OurOfferItem
					data={data.hotels}
					isActive={activeItem === 'hotels'}
					onClick={() => {
						handlerClick('hotels');
					}}
				/>
				<OurOfferItem
					data={data.program}
					isActive={activeItem === 'program'}
					onClick={() => {
						handlerClick('program');
					}}
				/>
				<OurOfferItem
					data={data.visa}
					isActive={activeItem === 'visa'}
					onClick={() => {
						handlerClick('visa');
					}}
				/>
				<img
					className={styles['background-image']}
					src="/images/logo_black.png"
					alt="background-image"
				/>
			</div>

			<div className={styles['our-offer-image']}>
				<img src="/images/offer.jpg" alt="our-offer" title="Our Offer" />
			</div>
		</section>
	);
}

export default OurOffer;
