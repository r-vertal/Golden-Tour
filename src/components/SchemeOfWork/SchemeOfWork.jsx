import styles from './SchemeOfWork.module.scss';

function SchemeOfWork() {
	return (
		<section className={styles['scheme-of-work']}>
			<h2 className={styles.title}>Схема работы</h2>

			<div className={styles.container}>
				<div className={styles.item}>
					<div className={styles['item-icon']}>
						<img src="/images/icon_scheme_of_work1.png" alt="icon" />
					</div>
					<p className={styles['item-title']}>
						Вы оставляете на сайте заявку на бесплатную консультацию
					</p>
				</div>
				<div className={styles.arrow}>
					<img src="/images/icon_arrow_right.png" alt="icon" />
				</div>
				<div className={styles.item}>
					<div className={styles['item-icon']}>
						<img src="/images/icon_scheme_of_work2.png" alt="icon" />
					</div>
					<p className={styles['item-title']}>
						Наш менеджер связывается с вами для обсуждения условий
					</p>
				</div>
				<div className={styles.arrow}>
					<img src="/images/icon_arrow_right.png" alt="icon" />
				</div>
				<div className={styles.item}>
					<div className={styles['item-icon']}>
						<img src="/images/icon_scheme_of_work3.png" alt="icon" />
					</div>
					<p className={styles['item-title']}>
						Вы отправляетесь в путешествие, которое перевернёт вашу жизнь
					</p>
				</div>
			</div>
		</section>
	);
}

export default SchemeOfWork;
