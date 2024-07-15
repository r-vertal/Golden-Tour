import styles from './Slider.module.scss';

export default function SliderItem({ title, description, image }) {
	const style = {
		background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.55)), ${image}`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
	};
	return (
		<div className={styles['slider-item']} style={style}>
			<div className={styles.info}>
				<h2>{title}</h2>
				<h1>Golden Tour</h1>
				<p>{description}</p>
				<button className={styles.button}>Оставить заявку</button>
			</div>
		</div>
	);
}
