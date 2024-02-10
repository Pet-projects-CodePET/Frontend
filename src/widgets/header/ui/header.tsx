import styles from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import LogoIcon from '../../../shared/assets/images/logo-header.svg';
import { MainButton } from '@/shared/ui';
import IconUser from '@/shared/assets/icons/icon-user.svg';

export const Header = ({ isLoggedIn = true }: { isLoggedIn: boolean }) => {
	return (
		<div className={styles.header}>
			<div className={styles.header__container}>
				<div className={styles.header__wrapper}>
					<Link href="/" className={styles.header__link}>
						<Image src={LogoIcon} alt="logo" />
					</Link>

					<ul className={styles.header__navList}>
						<li className={styles.header__navItem}>Проекты</li>
						<li className={styles.header__navItem}>Специалисты</li>
						<li className={styles.header__navItem}>О нас</li>
					</ul>
					<MainButton variant="inverse" width="regular">
						Войти
					</MainButton>
				</div>
				<div>{isLoggedIn && <Image src={IconUser} alt="iconUser" /> }</div>
			</div>
		</div>
	);
};
