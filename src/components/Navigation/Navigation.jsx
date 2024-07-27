import { useState } from 'react';
import styles from './Navigation.module.scss';
import NavigationItem from './NavigationItem';

function Navigation() {
	const [showNav, setShowNav] = useState(false);

	const clickHandler = (param) => {
		setShowNav(param);
	};
	return (
		<nav
			className={
				showNav
					? `${styles['navigation']} ${styles['show-nav']}`
					: styles['navigation']
			}
		>
			<ul className={styles['nav-list']}>
				<NavigationItem name="О нас" id="about-us" func={setShowNav} />
				<NavigationItem
					name="Преимущества"
					id="our-advantages"
					func={setShowNav}
				/>
				<NavigationItem
					name="Популярные туры"
					id="popular-tours"
					func={setShowNav}
				/>
				<NavigationItem name="Галерея" id="gallery" func={setShowNav} />
				<NavigationItem name="Отзывы" id="feedbacks" func={setShowNav} />
				<NavigationItem name="Контакты" id="contacts" func={setShowNav} />
				<button
					onClick={() => {
						clickHandler(false);
					}}
					className={styles['button-close']}
				>
					✕
				</button>
			</ul>
			<button
				onClick={() => {
					clickHandler(true);
				}}
				className={styles['button-open']}
			>
				<span>—</span>
				<span>—</span>
				<span>—</span>
			</button>
		</nav>
	);
}

export default Navigation;
