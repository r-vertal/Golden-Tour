import { useState } from 'react';
import styles from './SpecialOffers.module.scss';

function SpecialOffers() {
	const [date, setDate] = useState(new Date());
	// const nowDate = new Date();
	// const deadlineDate = nowDate.setDate(nowDate.getDay() + 3);
	const deadlineDate = new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate() + 3,
	);
	const msec = deadlineDate - date;
	let ostatok = msec;
	const day = Math.trunc(msec / (1000 * 60 * 60 * 24));

	ostatok = msec - 1000 * 60 * 60 * 24 * day;
	const hour = Math.trunc(ostatok / (1000 * 60 * 60));

	ostatok = ostatok - 1000 * 60 * 60 * hour;
	const min = Math.trunc(ostatok / (1000 * 60));

	ostatok = ostatok - 1000 * 60 * min;

	const sec = Math.trunc(ostatok / 1000);

	console.log(day, hour, min, sec);

	setInterval(() => {
		setDate(new Date());
	}, 60000);
	return (
		<section className={styles['special-offers']}>
			<div className={styles.container}>
				<h2 className={styles.title}>Специальное предложение</h2>
				<h3 className={styles.subtitle}>
					<span>Cкидка 15%</span> на ваш первый тур! <br /> Акция действует
					<span> до 15.08.2024</span> включительно!
				</h3>
				<p className={styles.paragraph}>до окончания акции осталось:</p>

				<div className={styles.timer}>
					{day} <span>дней</span> {hour} <span>часов</span> {min}{' '}
					<span>минут</span>
					{/* {sec} <span>секунд</span> */}
				</div>
				<img
					className={styles['img-style-one']}
					src="images/img_special_offers1.png"
					alt="sale"
					title="Sale"
				/>
				<img
					className={styles['img-style-two']}
					src="images/img_special_offers2.png"
					alt="sale"
					title="Sale"
				/>
			</div>
		</section>
	);
}

export default SpecialOffers;
