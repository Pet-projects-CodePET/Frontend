import Link from 'next/link';
import styles from './nav-bar.module.scss';

type NavBarLinks = {
	id: number;
	label: string;
	path: string;
};

export const NavBar = ({
	navBarLinksArray,
}: {
	navBarLinksArray: Array<NavBarLinks>;
}) => {
	return (
		<div>
			<ul className={styles.navList}>
				{navBarLinksArray.map((link) => (
					<Link className={styles.navLink} href={link.path} key={link.id}>
						<li className={styles.navItem}>
							{link.label}
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
};
