'use client';

import React, { FC, useState } from 'react';
import { DeleteAccountProps } from './types';
import { Input, MainButton, PopUp } from '@/shared/ui';
import styles from './delete-account.module.scss';


export const DeleteAccount: FC<DeleteAccountProps> = ({
	handleDeleteAccount,
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
		// setIsPopupOpen(false);
	};

	return (
		<>
			<button
				type="button"
				className={styles.formSettings__deleteButton}
				onClick={handleOpenPopup}>
				Удалить аккаунт
			</button>
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
		</>
	);
};
