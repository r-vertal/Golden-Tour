import styles from './Logo.module.scss';

function Logo() {
	return (
		<div className={styles.logo}>
			<img
				className={styles.image}
				src="./images/logo.png"
				alt="Logo"
				title="Logo"
			/>
			<div className={styles['title-container']}>
				<span className={styles.title}>Golden Tour</span>
				<span className={styles.subtitle}>Туристическое агентство</span>
			</div>
		</div>
	);
}

export default Logo;
