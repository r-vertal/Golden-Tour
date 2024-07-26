import { useEffect, useRef } from 'react';
import styles from './ButtonUp.module.scss';

function ButtonUp() {
	const buttonUpRef = useRef(null);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 700) {
				buttonUpRef.current.classList.add(styles.visible);
			} else {
				buttonUpRef.current.classList.remove(styles.visible);
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	const clickHandler = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div
			ref={buttonUpRef}
			onClick={clickHandler}
			className={styles['button-up']}
		>
			&#11165;
		</div>
	);
}
export default ButtonUp;
