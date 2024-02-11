'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MainButton } from '@/shared/ui';
import { NavBar } from '@/widgets/nav-bar';
import IconUser from '@/shared/assets/icons/icon-user.svg';
import LogoIcon from '../../../shared/assets/images/logo-header.svg';
import styles from './header.module.scss';

export const Header = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
	const router = useRouter();
	return (
		<div className={styles.header}>
			<div className={styles.header__container}>
				<div className={styles.header__wrapper}>
					<Link href="/" className={styles.header__link}>
						<Image src={LogoIcon} alt="logo" />
					</Link>

					<NavBar />

					<MainButton variant="inverse" width="regular" onClick={() => router.push('login')}>
						Войти
					</MainButton>
				</div>
				<div>{isLoggedIn && <Image src={IconUser} alt="iconUser" />}</div>
			</div>
		</div>
	);
};
