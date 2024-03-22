import React from 'react';
import Link from 'next/link';
import Projects from '@/shared/assets/icons/projects.svg';
import Specialists from '@/shared/assets/icons/specialists.svg';
import AboutUs from '@/shared/assets/icons/information.svg';
import styles from './burger-nav-bar.module.scss';

export const BurgerNavBar = ({ isBurgerOpen }: { isBurgerOpen: boolean }) => {
	return (
		<>
			<div className={styles.burgerNavBar}>
				<ul
					className={`${styles.burgerNavBar__list} ${isBurgerOpen ? styles.burgerNavBar__list_opened : ''}`}>
					<li className={styles.burgerNavBar__item}>
						<Link href="/projects" className={styles.burgerNavBar__link}>
							<Projects className={styles.burgerNavBar__item_icon} />
							Проекты
						</Link>
					</li>
					<li className={styles.burgerNavBar__item}>
						<Link href="/specialists" className={styles.burgerNavBar__link}>
							<Specialists className={styles.burgerNavBar__item_icon} />
							Специалисты
						</Link>
					</li>
					<li className={styles.burgerNavBar__item}>
						<Link href="/about-us" className={styles.burgerNavBar__link}>
							<AboutUs className={styles.burgerNavBar__item_icon} />
							Избранные проекты
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};
