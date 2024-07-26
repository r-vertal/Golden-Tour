import styles from './Navigation.module.scss';
import NavigationItem from './NavigationItem';

function Navigation() {
	return (
		<nav className={styles.navigation}>
			<ul className={styles['nav-list']}>
				<NavigationItem name="О нас" id="about-us" />
				<NavigationItem name="Преимущества" id="our-advantages" />
				<NavigationItem name="Популярные туры" id="popular-tours" />
				<NavigationItem name="Галерея" id="gallery" />
				<NavigationItem name="Отзывы" id="feedbacks" />
				<NavigationItem name="Контакты" id="contacts" />
			</ul>
		</nav>
	);
}

export default Navigation;
