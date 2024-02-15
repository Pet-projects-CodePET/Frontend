'use client';

import React from 'react';
import Link from 'next/link';

import Logo from '@/shared/assets/images/logo-header.svg';
import Tg from '@/shared/assets/icons/tg.svg';
import Vk from '@/shared/assets/icons/vk.svg';
import styles from './footer.module.scss';

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer__container}>
				<div className={styles.footer__container_logo}>
					<Link href="/">
						<Logo />
					</Link>
				</div>
				<div className={styles.footer__content}>
					<div>
						<h3 className={styles.footer__content_title}>Навигация</h3>
						<div className={styles.footer__content_links}>
							<Link
								href="/about-us"
								className={styles.footer__content_links_item}>
								О нас
							</Link>
							<Link
								href="/projects"
								className={styles.footer__content_links_item}>
								Проекты
							</Link>
							<Link
								href="/specialists"
								className={styles.footer__content_links_item}>
								Специалисты
							</Link>
						</div>
					</div>
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
					<div>
						<h3 className={styles.footer__content_title}>Контакты</h3>
						<div className={styles.footer__content_email}>
							code_pet@gmail.ru
						</div>
						<div className={styles.footer__content_social}>
							<Link href="/" className={styles.footer__content_social_item}>
								<Vk />
							</Link>
							<Link href="/" className={styles.footer__content_social_item}>
								<Tg />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
