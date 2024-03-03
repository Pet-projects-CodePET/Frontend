'use client';

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useClickOutside } from '@/shared/hooks';
import { MainButton } from '@/shared/ui';
import { NavBar } from '@/entities/nav-bar';
import { navBarLinksArray } from '@/shared/constants';
// import IconUser from '@/shared/assets/icons/icon-user.svg';
import LogoIcon from '@/shared/assets/images/logo-header.svg';
import MenuBurger from '@/shared/assets/icons/dots-vertical.svg';
import IconPlus from '@/shared/assets/icons/plus-large.svg';
import User from '@/shared/assets/icons/user.svg';
import Projects from '@/shared/assets/icons/my-projects.svg';
import Favorites from '@/shared/assets/icons/heart.svg';
import Exit from '@/shared/assets/icons/logout.svg';
import styles from './header.module.scss';

export const Header = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
	const router = useRouter();
	const [isMenuProfileOpen, setIsMenuProfileOpen] = useState(false);
	const menuProfileRef = useRef(null);

	useClickOutside(menuProfileRef, () => {
		if (isMenuProfileOpen) setIsMenuProfileOpen(false);
	});

	const handleOpenMenuProfile = () => {
		if (!isMenuProfileOpen) setIsMenuProfileOpen(true);
	};

	return (
		<div className={styles.header}>
			<div className={styles.header__container}>
				<div className={styles.header__wrapper}>
					<Link href="/" className={styles.header__link}>
						<LogoIcon alt="logo" className={styles.header__logo} />
					</Link>
					<NavBar navBarLinksArray={navBarLinksArray} />
					{isLoggedIn ? (
						<div className={styles.header__buttonProject}>
							<MainButton
								variant="inverse"
								width="max"
								onClick={() => router.push('create-project')}
								IconLeft={IconPlus}>
								Создать проект
							</MainButton>
						</div>
					) : (
						<div className={styles.header__buttonLogin}>
							<MainButton
								variant="inverse"
								width="max"
								onClick={() => router.push('login')}>
								Войти
							</MainButton>
						</div>
					)}

					<button className={styles.header__buttonBurger}>
						<MenuBurger className={styles.header__buttonBurgerIcon} />
					</button>
				</div>
				{isLoggedIn && (
					<div className={styles.header__menuProfile_container}>
						<button
							className={styles.header__buttonProfile}
							onClick={handleOpenMenuProfile}>
							<User className={styles.header__linkProfile} />
						</button>
						<ul
							className={`${styles.header__menuProfile} ${isMenuProfileOpen ? styles.header__menuProfile_opened : ''}`}
							ref={menuProfileRef}
						>
							<li className={styles.header__menuProfileItem}>
								<Link href="/" className={styles.header__menuProfileLink}>
									<User className={styles.header__menuProfileItem_icon} />
									Личный кабинет
								</Link>
							</li>
							<li className={styles.header__menuProfileItem}>
								<Link href="/" className={styles.header__menuProfileLink}>
									<Projects className={styles.header__menuProfileItem_icon} />
									Moи проекты
								</Link>
							</li>
							<li className={styles.header__menuProfileItem}>
								<Link href="/" className={styles.header__menuProfileLink}>
									<Favorites className={styles.header__menuProfileItem_icon} />
									Избранные проекты
								</Link>
							</li>
							<li className={styles.header__menuProfileItem}>
								<Link href="/" className={styles.header__menuProfileLink}>
									<Exit className={styles.header__menuProfileItem_icon} />
									Выход
								</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};
