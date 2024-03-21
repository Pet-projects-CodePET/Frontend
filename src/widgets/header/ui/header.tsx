'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { MainButton } from '@/shared/ui';
import { NavBar } from '@/entities/nav-bar';
import { navBarLinksArray } from '@/shared/constants';
import { MenuProfile } from '@/entities/menu-profile';
import LogoIcon from '@/shared/assets/images/logo-header.svg';
import MenuBurger from '@/shared/assets/icons/dots-vertical.svg';
import IconPlus from '@/shared/assets/icons/plus-large.svg';
import IconLogin from '@/shared/assets/icons/icon-come-in.svg';
import styles from './header.module.scss';

export const Header = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
	const router = useRouter();

	return (
		<div className={styles.header}>
			<div className={styles.header__container}>
				<div
					className={styles.header__wrapper}>
					<Link href="/" className={styles.header__link}>
						<LogoIcon alt="logo" className={styles.header__logo} />
					</Link>
					<NavBar navBarLinksArray={navBarLinksArray} />
					{isLoggedIn && (
						<div className={styles.header__buttonProject}>
							<MainButton
								variant="inverse"
								width="max"
								onClick={() => router.push('create-project')}
								IconLeft={IconPlus}>
								Создать проект
							</MainButton>
						</div>
					)}

					<button className={styles.header__buttonBurger}>
						<MenuBurger className={styles.header__buttonBurgerIcon} />
					</button>
				</div>
				{isLoggedIn ? (
					<MenuProfile />
				) : (
					<Link href="/login" className={styles.header__linkLogin}>
						<IconLogin className={styles.header__iconLogin} />
					</Link>
				)}
			</div>
		</div>
	);
};
