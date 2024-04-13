'use client';

import React, { useState } from 'react';
import { MainButton } from '@/shared/ui';
import { Form } from '@/shared/ui';
import { PopUp } from '@/shared/ui/pop-up/pop-up';
import IconDown from '@/shared/assets/icons/chevron-down.svg';
import styles from './profile-settings.module.scss';
import { ToggleCheckbox } from '@/shared/ui/toggle-checkbox/toggle-checkbox';
import { MenuForVisible } from '@/entities/menu-for-visible';
import IconUp from '@/shared/assets/icons/chevron-up.svg';
import { ProfileLink } from '@/shared/ui/profile-link/profile-link';

export const ProfileSettings = () => {
	const [isPopup, setIsPopup] = useState(false);
	const isOpen = () => setIsPopup(true);
	const [checked, setChecked] = useState(false);
	const [showVisibleMenu, setShowVisibleMenu] = useState(false);
	const [showVisibleMenuTwo, setShowVisibleMenuTwo] = useState(false);

	const checkedChange = (checked: boolean) => {
		setChecked(checked);
		console.log('выполнить действие чекбокса');
	};

	const handleSubmit = () => {
		console.log('Submit');
	};
	
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
						{showVisibleMenu ? (
							<IconUp
								className={styles.formSettings__icon}
								onClick={() => setShowVisibleMenu(false)}
							/>
						) : (
							<IconDown
								className={styles.formSettings__icon}
								onClick={setShowVisibleMenu}
							/>
						)}
					</div>

					<MenuForVisible isOpen={showVisibleMenu} onClose={() => {}} />

					<div className={styles.formSettings__item}>
						<p className={styles.formSettings__subtitle}>Видимость контактов</p>
						{showVisibleMenuTwo ? (
							<IconUp
								className={styles.formSettings__icon}
								onClick={() => setShowVisibleMenuTwo(false)}
							/>
						) : (
							<IconDown
								className={styles.formSettings__icon}
								onClick={setShowVisibleMenuTwo}
							/>
						)}
					</div>

					<MenuForVisible isOpen={showVisibleMenuTwo} onClose={() => {}} />

					<div className={styles.formSettings__item}>
						<label className={styles.formSettings__subtitle} htmlFor="notify">
							Отправка уведомлений
						</label>
						<div className={styles.formSettings__checkbox}>
							<ToggleCheckbox
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
								variant="defaultOn"
								id="subscription"
								name="subscription"
								onChange={() => {
									console.log('подписка');
								}}
							/>
						</div>
					</div>
				</div>
				<button className={styles.formSettings__deleteButton} onClick={isOpen}>
					Удалить аккаунт
				</button>
				<PopUp
					visible={isPopup}
					title="Удаление аккаунта"
					onClose={() => setIsPopup(false)}>
					<>
						<p className={styles.popup__text}>
							Вы уверены, что хотите удалить аккаунт?
						</p>
						<div className={styles.popup__buttons}>
							<MainButton variant={'primary'} width={'regular'}>
								Вернуться в настройки
							</MainButton>
							<MainButton variant={'secondary'} width={'regular'}>
								Удалить аккаунт
							</MainButton>
						</div>
					</>
				</PopUp>
			</Form>
		</section>
	);
};
