import styles from './OurAdvantages.module.scss';

function ButtonNav({ children, onClick, image, isActive }) {
	return (
		<button
			onClick={onClick}
			className={
				isActive
					? `${styles.button} ${styles['button-active']}`
					: `${styles.button}`
			}
		>
			<img src={image} alt="icon" />
			{children}
		</button>
	);
}

export default ButtonNav;
