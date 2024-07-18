import { popularTours as data } from '../../../data';
import styles from './PopularTours.module.scss';
import PopularToursItem from './PopularToursItem';

const popularTours = data.map((item) => {
	return <PopularToursItem key={item.id} data={item} />;
});

function PopularTours() {
	return (
		<section className={styles['popular-tours']}>
			<div className={styles.container}>
				<h2 className={styles.title}>Популярные направления</h2>
				<h3 className={styles.subtitle}>По версии отдыхающих</h3>
				<p className={styles.paragraph}>
					Самые популярные направления по версии наших клиентов за последний
					год.
				</p>

				<div className={styles['tours-container']}>{popularTours}</div>
			</div>
		</section>
	);
}

export default PopularTours;
