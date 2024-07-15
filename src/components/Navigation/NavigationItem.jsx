import styles from './Navigation.module.scss';

export default function NavigationItem({ name }) {
	return (
		<li className={styles['list-item']}>
			<a href="#">{name}</a>
		</li>
	);
}
