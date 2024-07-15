import { useEffect, useRef, useState } from 'react';
import { slider as data } from '../../../data.js';
import styles from './Slider.module.scss';
import SliderItem from './SliderItem';

export default function Slider() {
	const [position, setPosition] = useState(0);
	const sliderRef = useRef(null);
	const [progressBar, setProgressBar] = useState(0);
	const progressBarRef = useRef(null);

	useEffect(() => {
		sliderRef.current.style.left = -position + '%';
		setTimeout(() => {
			sliderRef.current.classList.remove(styles.animation);
		}, 2000);
	}, [position]);

	useEffect(() => {
		progressBarRef.current.width = `${progressBar}%`;
	}, [progressBar]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (progressBar >= 100) {
				sliderRef.current.classList.add(styles.animation);
				setProgressBar(1);
				position >= 200 ? setPosition(0) : setPosition(position + 100);
			} else {
				setProgressBar(progressBar + 0.2);
			}
		}, 30);

		return () => {
			clearInterval(interval);
		};
	});

	return (
		<>
			<div className={styles.slider}>
				<div
					ref={sliderRef}
					className={`${styles['slider-line']} ${styles['animation']}`}
				>
					<SliderItem
						title={data[0].title}
						description={data[0].description}
						image="url('./images/slider1.jpg')"
					/>
					<SliderItem
						title={data[1].title}
						description={data[1].description}
						image="url('./images/slider2.jpg')"
					/>
					<SliderItem
						title={data[2].title}
						description={data[2].description}
						image="url('./images/slider3.jpg')"
					/>
				</div>
				<div
					ref={progressBarRef}
					className={styles['progress-bar']}
					style={{ width: `${progressBar}%` }}
				></div>
			</div>
		</>
	);
}
