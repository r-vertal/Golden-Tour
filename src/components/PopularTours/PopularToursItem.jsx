import styles from './PopularTours.module.scss';

function PopularToursItem({ data }) {
	const style = {
		background: `${data.image}`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	};
	return (
		<div className={styles.tour} style={style}>
			<div className={styles['tour-rating']}>
				<img src="/images/icon_star.png" alt="star" title="rating" />
				<span>{data.rating}</span>
			</div>
			<div className={styles['tour-info']}>
				<div className={styles['tour-info-header']}>
					<div className={styles['tour-title-container']}>
						<p className={styles['tour-title']}>{data.title}</p>
						<p className={styles['tour-subtitle']}>{data.subtitle}</p>
					</div>
					<div className={styles['tour-price']}>
						<span>{data.price}$</span>
					</div>
				</div>
				<div className={styles['tour-info-content']}>
					<p className={styles['tour-description']}>{data.description}</p>
					<button className={styles.button}>Оставить заявку</button>
				</div>
			</div>
		</div>
	);
}

export default PopularToursItem;
