'use client';

import React, { FC, useState } from 'react';
// import { useForm } from 'react-hook-form';
import { CheckboxAndRadio, Input, MainButton } from '@/shared/ui';
import { Form } from '@/shared/ui';
import { PopUp } from '@/shared/ui/pop-up/pop-up';
import IconUp from '@/shared/assets/icons/chevron-up.svg';
import IconDown from '@/shared/assets/icons/chevron-down.svg';
import styles from './form-profile-settings.module.scss';
import { ToggleCheckbox } from '@/shared/ui/toggle-checkbox/toggle-checkbox';
// import { MenuForVisible } from '@/entities/menu-for-visible';
import { ProfileLink } from '@/shared/ui/profile-link/profile-link';
import { FormProfileSettingsProps } from './types';
import clsx from 'clsx';

export const FormProfileSettings: FC<FormProfileSettingsProps> = ({
	handleSubmit,
	handleDeleteAccount,
	// settingsProfile,
}) => {
	// const { register } = useForm();

	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [isSendNotification, setIsSendNotification] = useState(false);
	const [isSubscriptionProjects, setIsSubscriptionProjects] = useState(false);
	const [showVisibleProfileMenu, setShowVisibleProfileMenu] = useState(false);
	const [showVisibleContactsMenu, setShowVisibleContactsMenu] = useState(false);
	const [currentPasswordValue, setCurrentPasswordValue] = useState('');

	const handleOpenPopup = () => setIsPopupOpen(true);

	const handleClosePopup = () => setIsPopupOpen(false);

	const handleChangeInput = (
		evt: React.ChangeEvent<HTMLInputElement>
	): void => {
		evt.preventDefault();
		setCurrentPasswordValue(evt.target.value);
	};
	const handleDeleteAccountAction = () => {
		handleDeleteAccount(currentPasswordValue);
		setCurrentPasswordValue('');
		setIsPopupOpen(false);
	};

	return (
		<section className={styles.profileSettings}>
			<div className={styles.profileSettings__profileLink}>
				<ProfileLink title="Управление аккаунтом" />
			</div>

			<Form onSubmit={handleSubmit} className={styles.formSettings}>
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
						<ul
							className={clsx(styles.formSettings__menuList, {
								[styles.formSettings__menuList_open]: showVisibleProfileMenu,
							})}>
							<li className={styles.formSettings__menuListItem}>
								<CheckboxAndRadio
									label={'visible_status'}
									type="radio"
									defaultChecked={true}
									id={'visible_status_1'}
									value="1"
									// {...register('visible_status')}
									labelName={'Видно всем'}
								/>
							</li>
							<li className={styles.formSettings__menuListItem}>
								<CheckboxAndRadio
									label={'visible_status'}
									type="radio"
									defaultChecked={false}
									id={'visible_status_2'}
									value="2"
									// {...register('visible_status')}
									labelName={'Видно организаторам'}
								/>
							</li>
							<li className={styles.formSettings__menuListItem}>
								<CheckboxAndRadio
									label={'visible_status'}
									type="radio"
									defaultChecked={false}
									id={'visible_status_3'}
									value="3"
									// {...register('visible_status')}
									labelName={'Не видно никому'}
								/>
							</li>
						</ul>
						{/* <MenuForVisible
							isOpen={showVisibleProfileMenu}
							onClose={() => {}}
							settings={3}
							nameSettings={'visible_status'}
						/> */}
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
						<ul
							className={clsx(styles.formSettings__menuList, {
								[styles.formSettings__menuList_open]: showVisibleContactsMenu,
							})}>
							<li className={styles.formSettings__menuListItem}>
								<CheckboxAndRadio
									label={'visible_status_contacts'}
									type="radio"
									defaultChecked={false}
									id={'visible_status_contacts_1'}
									value="1"
									// {...register('visible_status_contacts')}
									labelName={'Видно всем'}
								/>
							</li>
							<li className={styles.formSettings__menuListItem}>
								<CheckboxAndRadio
									label={'visible_status_contacts'}
									type="radio"
									defaultChecked={true}
									id={'visible_status_contacts_2'}
									value="2"
									// {...register('visible_status_contacts')}
									labelName={'Видно организаторам'}
								/>
							</li>
							<li className={styles.formSettings__menuListItem}>
								<CheckboxAndRadio
									label={'visible_status_contacts'}
									type="radio"
									defaultChecked={false}
									id={'visible_status_contacts_3'}
									value="3"
									// {...register('visible_status_contacts')}
									labelName={'Не видно никому'}
								/>
							</li>
						</ul>
						{/* <MenuForVisible
							isOpen={showVisibleContactsMenu}
							onClose={() => {}}
							settings={2}
							nameSettings={'visible_status_contacts'}
						/> */}
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
									// {...register('subscriptionProjects')}
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
				<button
					type="button"
					className={styles.formSettings__deleteButton}
					onClick={handleOpenPopup}>
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
					visible={isPopupOpen}
					title="Удаление аккаунта"
					onClose={handleClosePopup}>
					<div className={styles.deleteAccount}>
						<Input
							className={styles.deleteAccount__input}
							onChange={handleChangeInput}
							name="repeatNewPassword"
							type="password"
							labelName="Для удаления введите пароль"
							value={currentPasswordValue}
						/>
						<div className={styles.deleteAccount__buttons}>
							<MainButton
								type="button"
								variant={'primary'}
								disabled={currentPasswordValue.length < 8}
								width={'regular'}
								onClick={handleDeleteAccountAction}>
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
