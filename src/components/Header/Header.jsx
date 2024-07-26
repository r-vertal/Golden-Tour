import { useEffect, useRef } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Slider from '../Slider/Slider';
import styles from './Header.module.scss';

function Header() {
	const menuRef = useRef(null);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 75) {
				menuRef.current.classList.add(styles.active);
			} else {
				menuRef.current.classList.remove(styles.active);
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	return (
		<header className={styles.header}>
			<div ref={menuRef} className={styles.menu}>
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
