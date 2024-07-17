import styles from './OurStatistics.module.scss';

function OurStatistics() {
	return (
		<section className={styles['our-statistics']}>
			<div className={styles['our-statistics-item']}>
				<div className={styles['item-value']}>500+</div>
				<p className={styles['item-title']}>Организованных туров</p>
			</div>

			<div className={styles['our-statistics-item']}>
				<div className={styles['item-value']}>5</div>
				<p className={styles['item-title']}>Лет на рынке</p>
			</div>

			<div className={styles['our-statistics-item']}>
				<div className={styles['item-value']}>50+</div>
				<p className={styles['item-title']}>Сотрудников в штате</p>
			</div>

			<div className={styles['our-statistics-item']}>
				<div className={styles['item-value']}>150+</div>
				<p className={styles['item-title']}>Постояных клиентов</p>
			</div>
		</section>
	);
}

export default OurStatistics;
