import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Slider from '../Slider/Slider';
import styles from './Header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.menu}>
				<div className={styles.container}>
					<Logo />
					<Navigation />
				</div>
			</div>

			<Slider />
		</header>
	);
}

export default Header;
