import styles from './AboutUs.module.scss';

function AboutUs() {
	return (
		<section className={styles['about-us']}>
			<div className={styles['about-us-image']}>
				<img src="/images/office.jpg" alt="about-us" title="About Us" />
			</div>

			<div className={styles['about-us-content']}>
				<h2 className={styles.title}>О нас</h2>
				<h3 className={styles.subtitle}>
					Туристическое агентство GOLDEN TOUR — Ваш надежный партнер в мире
					путешествий!
				</h3>
				<p className={styles.paragraph}>
					Туристическое агентство GOLDEN TOUR - одна из ведущих компаний,
					специализирующаяся на организации путешествий по всему миру. Мы
					предлагаем широкий выбор мест для отдыха. <br />
					<br /> Наша команда профессионалов готова предоставить консультации и
					помощь в выборе оптимального места для отдыха. Мы гарантируем
					надежность и индивидуальный подход к каждому, а также оперативность в
					обработке заявок. Благодаря нашим надежным партнерам и постоянному
					контролю качества, мы стремимся удовлетворить потребности самых
					требовательных клиентов. Доверьтесь нашему опыту и профессионализму
					для успешных путешествий.
					<br />
					<br />
					<span>GOLDEN TOUR — надежный партнер для вашего отдыха!</span>
				</p>
				<img
					className={styles['background-image']}
					src="/images/logo.png"
					alt="background-image"
				/>
			</div>
		</section>
	);
}

export default AboutUs;
