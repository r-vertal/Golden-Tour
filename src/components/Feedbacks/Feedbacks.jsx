import { useRef, useState } from 'react';
import styles from './Feedbacks.module.scss';

import { feedbacks as data } from '../../../data';

const feedbacks = data.map((item, index) => {
	return (
		<div key={index} className={styles.item}>
			<p className={styles['item-name']}>{item.name}</p>
			<p className={styles['item-description']}>{item.description}</p>
		</div>
	);
});

function Feedbacks() {
	const [position, setPosition] = useState(0);
	const containerRef = useRef(null);
	const lastFeedback = (data.length - 1) * 100;

	const prevFeedback = () => {
		position === 0 ? setPosition(-lastFeedback) : setPosition(position + 100);
	};

	const nextFeedback = () => {
		position === -lastFeedback ? setPosition(0) : setPosition(position - 100);
	};

	return (
		<section id="feedbacks" className={styles.feedbacks}>
			<div className={styles.container}>
				<h2 className={styles.title}>Отзывы</h2>
				<h3 className={styles.subtitle}>То что о нас говорят клиенты:</h3>

				<div className={styles['feedback-items']}>
					<div
						ref={containerRef}
						className={styles['items-container']}
						style={{ left: `${position}%` }}
					>
						{feedbacks}
					</div>

					<button className={styles['button-prev']} onClick={prevFeedback}>
						&#10094;
					</button>
					<button className={styles['button-next']} onClick={nextFeedback}>
						&#10095;
					</button>
				</div>
			</div>
		</section>
	);
}

export default Feedbacks;
