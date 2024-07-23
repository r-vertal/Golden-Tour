import styles from './Footer.module.scss';

function FooterSubscription() {
	return (
		<div className={styles['footer-subscription']}>
			<div className={styles['footer-subscription-info']}>
				<span>Подпишитесь и будьте первыми в курсе наших новостей!</span>
			</div>
			<div className={styles['footer-subscription-form']}>
				<form action="" method="get" target="_self">
					<input type="email" placeholder="Введите адрес эл.почты" />
					<button type="button">Подписаться</button>
				</form>
			</div>
		</div>
	);
}

export default FooterSubscription;
