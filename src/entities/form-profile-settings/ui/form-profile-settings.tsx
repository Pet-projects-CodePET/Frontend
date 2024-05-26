'use client';

import React, { FC, useState } from 'react';
import { MainButton } from '@/shared/ui';
import { Form } from '@/shared/ui';
import IconUp from '@/shared/assets/icons/chevron-up.svg';
import IconDown from '@/shared/assets/icons/chevron-down.svg';
import styles from './form-profile-settings.module.scss';
import { ToggleCheckbox } from '@/shared/ui/toggle-checkbox/toggle-checkbox';
import { MenuForVisible } from '@/entities/menu-for-visible';
import { ProfileLink } from '@/shared/ui/profile-link/profile-link';
import { FormProfileSettingsProps } from './types';

export const FormProfileSettings: FC<FormProfileSettingsProps> = ({
	handleSubmitForm,
	// handleDeleteAccount,
	// settingsProfile,
}) => {
	const [isSendNotification, setIsSendNotification] = useState(false);
	const [isSubscriptionProjects, setIsSubscriptionProjects] = useState(false);
	const [showVisibleProfileMenu, setShowVisibleProfileMenu] = useState(false);
	const [showVisibleContactsMenu, setShowVisibleContactsMenu] = useState(false);

	return (
		<section className={styles.profileSettings}>
			<div className={styles.profileSettings__profileLink}>
				<ProfileLink title="Управление аккаунтом" />
			</div>

			<Form onSubmit={handleSubmitForm} className={styles.formSettings}>
				<h2 className={styles.formSettings__title}>Настройка аккаунта</h2>
				<div className={styles.formSettings__list}>
					<div className={styles.formSettings__listItem}>
						<div
							className={styles.formSettings__item}
							onClick={() =>
								setShowVisibleProfileMenu(!showVisibleProfileMenu)
							}>
							<p className={styles.formSettings__subtitle}>Видимость профиля</p>
							{showVisibleProfileMenu ? (
								<IconUp className={styles.formSettings__icon} />
							) : (
								<IconDown className={styles.formSettings__icon} />
							)}
						</div>
						<MenuForVisible
							isOpen={showVisibleProfileMenu}
							settings={3}
							nameSettings={'visible_status'}
						/>
					</div>
					<div className={styles.formSettings__listItem}>
						<div
							className={styles.formSettings__item}
							onClick={() =>
								setShowVisibleContactsMenu(!showVisibleContactsMenu)
							}>
							<p className={styles.formSettings__subtitle}>
								Видимость контактов
							</p>
							{showVisibleContactsMenu ? (
								<IconUp className={styles.formSettings__icon} />
							) : (
								<IconDown className={styles.formSettings__icon} />
							)}
						</div>
						<MenuForVisible
							isOpen={showVisibleContactsMenu}
							settings={2}
							nameSettings={'visible_status_contacts'}
						/>
					</div>

					<div className={styles.formSettings__listItem}>
						<div className={styles.formSettings__item}>
							<label className={styles.formSettings__subtitle} htmlFor="notify">
								Отправка уведомлений
							</label>
							<div className={styles.formSettings__checkbox}>
								<ToggleCheckbox
									// {...register('sendNotification')}
									id="notify"
									name="notify"
									variant="defaultOn"
									checked={isSendNotification}
									onChange={() => {
										setIsSendNotification(!isSendNotification);
									}}
								/>
							</div>
						</div>
					</div>

					<div className={styles.formSettings__listItem}>
						<div className={styles.formSettings__item}>
							<label
								className={styles.formSettings__subtitle}
								htmlFor="subscription">
								Подписка на проекты
							</label>
							<div className={styles.formSettings__checkbox}>
								<ToggleCheckbox
									variant="defaultOn"
									id="subscription"
									name="subscription"
									checked={isSubscriptionProjects}
									onChange={() => {
										setIsSubscriptionProjects(!isSubscriptionProjects);
										// console.log('Подписка на проекты');
									}}
								/>
							</div>
						</div>
					</div>
				</div>

				<MainButton
					// type="button"
					variant={'primary'}
					width={'regular'}
					// onClick={handleSubmit()}
				>
					Сохранить настройки
				</MainButton>
			</Form>
		</section>
	);
};
