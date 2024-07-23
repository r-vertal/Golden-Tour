import styles from './SocialNetworks.module.scss';

function SocialNetworks() {
	return (
		<div className={styles['social-networks']}>
			<a
				href="https://www.youtube.com"
				target="_blank"
				className={styles['social-networks-youtube']}
			>
				<img
					src="/images/logo_youtube_black.png"
					alt="Youtube"
					title="Youtube"
				/>
			</a>
			<a
				href="https://www.instagram.com/"
				target="_blank"
				className={styles['social-networks-instagram']}
			>
				<img
					src="/images/logo_instagram_black.png"
					alt="Instagram"
					title="Instagram"
				/>
			</a>
			<a
				href="https://vk.com/"
				target="_blank"
				className={styles['social-networks-vk']}
			>
				<img src="/images/logo_vk_black.png" alt="VK" title="VK" />
			</a>
			<a
				href="https://telegram.org/"
				target="_blank"
				className={styles['social-networks-telegram']}
			>
				<img
					src="/images/logo_telegram_black.png"
					alt="Telegram"
					title="Telegram"
				/>
			</a>
			<a
				href="https://www.twitch.tv/"
				target="_blank"
				className={styles['social-networks-twitch']}
			>
				<img src="/images/logo_twitch_black.png" alt="Twitch" title="Twitch" />
			</a>
		</div>
	);
}

export default SocialNetworks;
