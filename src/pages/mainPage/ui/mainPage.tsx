import Link from 'next/link';

import { Header } from '@/widgets/header';
import { Promo } from '@/widgets/navBar/ui/promo/promo';
import { MainButton } from '@/shared/ui';

import styles from './main-page.module.scss';

export const MainPage = () => {
	return (
		<main className={styles.mainContainer}>
			<Header isLoggedIn />
      <div className={styles.promoSection}>
				<Promo />
			</div>
		</main>
	);
};
