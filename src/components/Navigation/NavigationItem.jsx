import styles from './Navigation.module.scss';

export default function NavigationItem({ name, id, func }) {
	return (
		<li className={styles['list-item']}>
			<a
				onClick={() => {
					func(false);
				}}
				href={`#${id}`}
			>
				{name}
			</a>
		</li>
	);
}
