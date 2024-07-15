import { useRef, useState } from 'react';
import { ourAdvantages as data } from '../../../data';
import ButtonNav from './ButtonNav';
import styles from './OurAdvantages.module.scss';

function OurAdvantages() {
	const [content, setContent] = useState(data.unique);
	const descriptionRef = useRef(null);

	const handlerClick = (type) => {
		setContent(data[type]);
	};

	return (
		<section className={styles['our-advantages']}>
			<div className={styles.container}>
				<h2 className={styles.title}>Наши преимущества</h2>
				<h3 className={styles.subtitle}>
					Почему более 1000 путешествинеков купили тур у нас ?
				</h3>
				<p className={styles.paragraph}>
					Каждый тур включает еще и страховку. Каждый путешественник будет
					застрахован на определенную сумму.
				</p>

				<div className={styles['content-nav']}>
					<ButtonNav
						isActive={content.title === 'unique'}
						onClick={() => {
							handlerClick('unique');
						}}
						image="./images/icon_our-advantages1.png"
					>
						Уникальнось
					</ButtonNav>
					<ButtonNav
						isActive={content.title === 'availability'}
						onClick={() => {
							handlerClick('availability');
						}}
						image="./images/icon_our-advantages2.png"
					>
						Доступность
					</ButtonNav>
					<ButtonNav
						isActive={content.title === 'quality'}
						onClick={() => {
							handlerClick('quality');
						}}
						image="./images/icon_our-advantages3.png"
					>
						Качество
					</ButtonNav>
					<ButtonNav
						isActive={content.title === 'level'}
						onClick={() => {
							handlerClick('level');
						}}
						image="./images/icon_our-advantages4.png"
					>
						Уровень
					</ButtonNav>
				</div>

				<div className={styles['content-description']}>
					<div ref={descriptionRef} className={styles['description-container']}>
						<img src={content.image} alt="icon" />
						<p className={styles['description-paragraph']}>
							{content.description}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default OurAdvantages;
