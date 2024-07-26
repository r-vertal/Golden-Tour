import styles from './Navigation.module.scss';

export default function NavigationItem({ name, id }) {
	return (
		<li className={styles['list-item']}>
			<a href={`#${id}`}>{name}</a>
		</li>
	);
}
