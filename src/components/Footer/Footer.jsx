import SocialNetworks from '../SocialNetworks/SocialNetworks';
import styles from './Footer.module.scss';
import FooterSubscription from './FooterSubscription';

function Footer() {
	return (
		<footer className={styles.footer}>
			<FooterSubscription />
			<SocialNetworks />

			<div className={styles['footer-info']}>
				<span>Golden Tour — Туристическое агентство № 1.</span>
				<br />
				<span> &#169; 2024</span>
			</div>
		</footer>
	);
}
export default Footer;
