'use client';

import React, { useState, useEffect } from 'react';
import { ProfileEditForm } from '@/entities/profile-edit-form';
import { BackLink } from '@/entities/back-link';
import ActiveIcon from '@/shared/assets/icons/activity-icon.svg';
import Link from 'next/link';
import { MailIcon, TelegramIcon, MobileIcon } from '@/shared/assets';
import styles from './preview-profile.module.scss';

export const PreviewProfile = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	const [visible, setVisible] = useState(false);

	const handleClick = () => {
		setVisible(true);
	};

	return (
		<>
			{!visible ? (
				<>
					<BackLink
						title="Профиль"
						href={'/profile-navigation'}
						bigTitle={'Профиль'}
					/>
					<div className={styles.previewWrapper}>
						<div className={styles.previewFoto}>
							<div className={styles.previewFoto__avatar} />
							<div className={styles.previewFoto__info}>
								<div className={styles.previewFoto__infoItem}>
									<h1 className={styles.previewFoto__infoName}>
										Длиннофамильная Екатерина
									</h1>

									<p className={styles.previewFoto__infoTelegram}>@nickname</p>
								</div>

								<div className={styles.previewFoto__infoActive}>
									<p className={styles.previewFoto__infoRole}>
										UX/UI designer / UX/UI дизайнер, Middle
									</p>
									<p className={styles.previewFoto__infoStatus}>
										<ActiveIcon
											className={styles.previewFoto__infoStatusActive}
										/>
										{'готов(а) к участию в проекте'}
									</p>
								</div>
							</div>
						</div>

						<div className={styles.previewItem}>
							<h2 className={styles.previewItem__title}>Навыки</h2>
							<p className={styles.previewItem__subtitle}>
								Python, JavaScript, C#, C++{' '}
							</p>
						</div>

						<div className={styles.previewItem}>
							<h2 className={styles.previewItem__title}>О себе</h2>
							<p className={styles.previewItem__subtitle}>
								Не люблю заполнять описание Lorem ipsum dolor sit amet,
								consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore et dolore magna aliqua. Ut enim ad minim veniam, quis
								nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in reprehenderit in
								voluptate velit esse cillum dolore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum, но приходится.
							</p>
						</div>

						<div className={styles.previewItem}>
							<h2 className={styles.previewItem__title}>Ссылка на портфолио</h2>
							<Link
								href="#"
								target="_blank"
								className={styles.previewItem__subtitle_link}>
								behance
							</Link>
						</div>

						<div className={styles.previewItem}>
							<h2 className={styles.previewItem__title}>Контакты для связи</h2>
							<ul className={styles.contactsList}>
								<li className={styles.contactItem}>
									<MobileIcon className={styles.contactIcon} />
									<Link
										href="#"
										target="_blank"
										className={styles.previewItem__subtitle_link}>
										behance
									</Link>
								</li>
								<li className={styles.contactItem}>
									<MailIcon className={styles.contactIcon} />
									<Link
										href="#"
										target="_blank"
										className={styles.previewItem__subtitle_link}>
										behance
									</Link>
								</li>
								<li className={styles.contactItem}>
									<TelegramIcon className={styles.contactIcon} />
									<Link
										href="#"
										target="_blank"
										className={styles.previewItem__subtitle_link}>
										behance
									</Link>
								</li>
							</ul>
						</div>
						<div className={styles.previewItem}>
							<h2 className={styles.previewItem__title}>Дата рождения</h2>
							<p className={styles.previewItem__subtitle}>01.02.1987</p>
						</div>

						<div className={styles.previewItem}>
							<h2 className={styles.previewItem__title}>Регион</h2>
							<p className={styles.previewItem__subtitle}>Россия, Омск</p>
						</div>

						<button
							className={styles.previewButton}
							type="button"
							onClick={handleClick}>
							{'На страницу редактирования'}
						</button>
					</div>
				</>
			) : (
				<ProfileEditForm />
			)}
		</>
	);
};
