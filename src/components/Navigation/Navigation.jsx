import styles from './Navigation.module.scss';
import NavigationItem from './NavigationItem';

function Navigation() {
	return (
		<nav className={styles.navigation}>
			<ul className={styles['nav-list']}>
				<NavigationItem name="О нас" />
				<NavigationItem name="Преимущества" />
				<NavigationItem name="Популярные туры" />
				<NavigationItem name="Галерея" />
				<NavigationItem name="Отзывы" />
				<NavigationItem name="Контакты" />
			</ul>
		</nav>
	);
}

export default Navigation;
