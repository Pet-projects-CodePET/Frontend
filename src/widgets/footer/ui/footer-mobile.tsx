import React from 'react';
import styles from './footer.module.scss';
import Link from 'next/link';
import Logo from '@/shared/assets/images/logo-header.svg';
import Down from '@/shared/assets/icons/chevron-down.svg';
import { MainButton } from '@/shared/ui';

export const FooterMobile = () => {
	return (
		<>
			<div className={styles.footer}>
				<div className={styles.footer__container}>
					<div className={styles.footer__container_logo}>
						<Link href="/">
							<Logo />
						</Link>
					</div>
					<div className={styles.footer__content}>
						<div>
							<h3 className={styles.footer__content_title}>Условия</h3>
							<div className={styles.footer__content_links}>
								<Link href="/" className={styles.footer__content_links_item}>
									Пользовательское соглашение
								</Link>
								<Link href="/" className={styles.footer__content_links_item}>
									Условия конфиденциальности
								</Link>
							</div>
						</div>
						<div className={styles.footer__contacts}>
							<h3 className={styles.footer__content_title}>Контакты</h3>
							<button>
								<Down />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.footer__out}>
				<MainButton variant="primary" width="max">
					Сохранить
				</MainButton>
			</div>
		</>
	);
};
