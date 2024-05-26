'use client';

import React, { FC, useState } from 'react';
import { DeleteAccountProps } from './types';
import { MainButton, PopUp } from '@/shared/ui';
import styles from './delete-account.module.scss';

export const DeleteAccount: FC<DeleteAccountProps> = ({
	handleDeleteAccount,
	isLoading,
	isSuccess,
}) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
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
		if (isSuccess) setIsPopupOpen(false);
	};

	return (
		<>
			<button
				type="button"
				className={styles.deleteAccount__deleteButton}
				onClick={handleOpenPopup}>
				Удалить аккаунт
			</button>
			<PopUp
				visible={isPopupOpen}
				title="Удаление аккаунта"
				onClose={handleClosePopup}>
				<div className={styles.deleteAccount}>
					<span className={styles.deleteAccount__text}>
						Для удаления введите пароль
					</span>
					<input
						className={styles.deleteAccount__input}
						onChange={handleChangeInput}
						name="password"
						type="password"
						aria-label="Для удаления введите пароль"
						// labelName="Для удаления введите пароль"
						value={currentPasswordValue}
					/>
					<div className={styles.deleteAccount__buttons}>
						<MainButton
							type="button"
							variant={'primary'}
							disabled={isLoading || currentPasswordValue.length === 0}
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
		</>
	);
};
