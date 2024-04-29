'use client';

import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MainButton } from '@/shared/ui';
import { Form } from '@/shared/ui';
import { PopUp } from '@/shared/ui/pop-up/pop-up';
import IconUp from '@/shared/assets/icons/chevron-up.svg';
import IconDown from '@/shared/assets/icons/chevron-down.svg';
import styles from './form-profile-settings.module.scss';
import { ToggleCheckbox } from '@/shared/ui/toggle-checkbox/toggle-checkbox';
import { MenuForVisible } from '@/entities/menu-for-visible';
import { ProfileLink } from '@/shared/ui/profile-link/profile-link';
import { FormProfileSettingsProps } from './types';
// import clsx from 'clsx';

export const FormProfileSettings: FC<FormProfileSettingsProps> = ({
	handleSubmit,
	handleDeleteAccount,
	// settingsProfile,
}) => {
	const { register } = useForm();

	const [isPopup, setIsPopup] = useState(false);
	const isOpen = () => setIsPopup(true);
	const [checked, setChecked] = useState(false);
	const [showVisibleProfileMenu, setShowVisibleProfileMenu] = useState(false);
	const [showVisibleContactsMenu, setShowVisibleContactsMenu] = useState(false);

	const checkedChange = (checked: boolean) => {
		setChecked(checked);
		console.log('выполнить действие чекбокса');
	};

	const handleClosePopup = () => setIsPopup(false);

	// const handleSubmit = () => {
	// 	console.log('Submit');
	// };

	return (
		<section className={styles.profileSettings}>
			<div className={styles.profileSettings__profileLink}>
				<ProfileLink title="Управление аккаунтом" />
			</div>

			<Form onSubmit={handleSubmit} className={styles.formSettings}>
				<h2 className={styles.formSettings__title}>Настройка аккаунта</h2>
				<div className={styles.formSettings__list}>
					<div className={styles.formSettings__item}>
						<p className={styles.formSettings__subtitle}>Видимость профиля</p>
						{showVisibleProfileMenu ? (
							<IconUp
								className={styles.formSettings__icon}
								onClick={() => setShowVisibleProfileMenu(false)}
							/>
						) : (
							<IconDown
								className={styles.formSettings__icon}
								onClick={setShowVisibleProfileMenu}
							/>
						)}
					</div>
					<MenuForVisible
						isOpen={showVisibleProfileMenu}
						onClose={() => {}}
						settings={3}
						nameSettings={'visible_status'}
					/>
					<div className={styles.formSettings__item}>
						<p className={styles.formSettings__subtitle}>Видимость контактов</p>
						{showVisibleContactsMenu ? (
							<IconUp
								className={styles.formSettings__icon}
								onClick={() => setShowVisibleContactsMenu(false)}
							/>
						) : (
							<IconDown
								className={styles.formSettings__icon}
								onClick={setShowVisibleContactsMenu}
							/>
						)}
					</div>
					<MenuForVisible
						isOpen={showVisibleContactsMenu}
						onClose={() => {}}
						settings={2}
						nameSettings={'visible_status_contacts'}
					/>

					<div className={styles.formSettings__item}>
						<label className={styles.formSettings__subtitle} htmlFor="notify">
							Отправка уведомлений
						</label>
						<div className={styles.formSettings__checkbox}>
							<ToggleCheckbox
								{...register('sendNotification')}
								id="notify"
								name="notify"
								variant="defaultOn"
								checked={checked}
								onChange={checkedChange}
							/>
						</div>
					</div>

					<div className={styles.formSettings__item}>
						<label
							className={styles.formSettings__subtitle}
							htmlFor="subscription">
							Подписка на проекты
						</label>
						<div className={styles.formSettings__checkbox}>
							<ToggleCheckbox
								{...register('subscriptionProjects')}
								variant="defaultOn"
								id="subscription"
								name="subscription"
								onChange={() => {
									console.log('Подписка на проекты');
								}}
							/>
						</div>
					</div>
				</div>
				<button
					type="button"
					className={styles.formSettings__deleteButton}
					onClick={isOpen}>
					Удалить аккаунт
				</button>
				<MainButton
					// type="button"
					variant={'primary'}
					width={'regular'}
					onClick={handleSubmit}>
					Сохранить настройки
				</MainButton>
				<PopUp
					visible={isPopup}
					title="Удаление аккаунта"
					onClose={handleClosePopup}>
					<div className={styles.deleteAccount}>
						<p className={styles.deleteAccount__text}>
							Вы уверены, что хотите удалить аккаунт?
						</p>
						<div className={styles.deleteAccount__buttons}>
							<MainButton
								type="button"
								variant={'primary'}
								width={'regular'}
								onClick={handleDeleteAccount}>
								Удалить аккаунт
							</MainButton>
							<MainButton
								type="button"
								variant={'secondary'}
								width={'regular'}
								onClick={handleClosePopup}>
								Вернуться в настройки
							</MainButton>
						</div>
					</div>
				</PopUp>
			</Form>
		</section>
	);
};
