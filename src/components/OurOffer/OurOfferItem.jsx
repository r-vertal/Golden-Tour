import styles from './OurOffer.module.scss';

function OurOfferItem({ data, isActive, onClick }) {
	return (
		<div
			className={
				isActive
					? `${styles['content-item']} ${styles['active']}`
					: `${styles['content-item']}`
			}
		>
			<div onClick={onClick} className={styles['item-title']}>
				<span>{data.title}</span>
				<div className={styles['item-icon']}>
					{isActive ? (
						<img src="/images/icon_arrow_up.png" alt="icon_arrow_up" />
					) : (
						<img src="/images/icon_arrow-down.png" alt="icon_arrow-down" />
					)}
				</div>
			</div>
			<div className={styles['item-description']}>{data.description}</div>
		</div>
	);
}
export default OurOfferItem;
