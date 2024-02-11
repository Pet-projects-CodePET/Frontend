import styles from './nav-bar.module.scss';
export const NavBar = () => {
	return (
		<div>
			<ul className={styles.header__navList}>
				<li className={styles.header__navItem}>Проекты</li>
				<li className={styles.header__navItem}>Специалисты</li>
				<li className={styles.header__navItem}>О нас</li>
			</ul>
		</div>
	);
};
