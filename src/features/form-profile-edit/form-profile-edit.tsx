'use client';

import React, { FC, useState } from 'react';
import { FormProfileEdit } from '@/entities/form-profile-edit';
// import { FormProfileSettings } from '@/entities/form-profile-settings';
// import { ProfileEditForm } from '@/entities/profile-edit-form';

import { toaster } from '@/widgets/notification-toast/';
import { IUser } from '@/services/models/IUser';
import {
	useChangeProfileSettingsMutation,
	useGetProfileSettingsQuery,
} from '@/services/UserService';
import { Loader } from '@/shared/ui';

export const FormProfileEditFeature: FC = () => {
	const {
		data,
		isLoading: isLoadingGetProfileSettings,
		isError: isErrorGetProfileSettings,
	} = useGetProfileSettingsQuery(null);

	const [changeProfileSettings, { isLoading: isLoadingChangeProfileSettings }] =
		useChangeProfileSettingsMutation();

	const [dataErrorChangeProfile, setDataErrorChangeProfile] = useState({});

	const handleSubmitForm = (newData: IUser) => {
		changeProfileSettings(newData)
			.unwrap()
			.then(() => {
				toaster({
					status: 'success',
					title: 'Настройки успешно сохранены',
				});
			})
			.catch((error) => {
				console.log(error);
				if (error.data) {
					setDataErrorChangeProfile(error.data);
				}
				toaster({
					status: 'error',
					title: 'Ошибка сохранения настроек',
					subtitle: 'Попробуйте еще раз',
				});
			});
		// console.log('handleSubmit data', newData);
	};

	return (
		<>
			{isLoadingGetProfileSettings ? (
				<div>
					<Loader />
				</div>
			) : (
				<FormProfileEdit
					dataErrorChangeProfile={dataErrorChangeProfile}
					userData={data}
					handleSubmitForm={handleSubmitForm}
					isLoadingChangeProfileSettings={isLoadingChangeProfileSettings}
				/>
			)}

			{isErrorGetProfileSettings && <span>Ошибка получения настроек</span>}
		</>
	);
};
