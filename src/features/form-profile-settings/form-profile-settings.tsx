'use client';

import React, { FC } from 'react';
import { FormProfileSettings } from '@/entities/form-profile-settings';
import { toaster } from '@/widgets/notification-toast/';
import { Loader } from '@/shared/ui';
import { IUser } from '@/services/models/IUser';
import {
	useChangeProfileSettingsMutation,
	useGetProfileSettingsQuery,
} from '@/services/UserService';

export const FormProfileSettingsFeature: FC = () => {
	const {
		data,
		isLoading: isLoadingGetProfileSettings,
		isError: isErrorGetProfileSettings,
	} = useGetProfileSettingsQuery(null);
	const [changeProfileSettings, { isLoading: isLoadingChangeProfileSettings }] =
		useChangeProfileSettingsMutation();

	const handleSubmitForm = (newData: IUser) => {
		changeProfileSettings({
			// eslint-disable-next-line camelcase
			visible_status: newData.visible_status as number,
			// eslint-disable-next-line camelcase
			visible_status_contacts: newData.visible_status_contacts as number,
			// eslint-disable-next-line camelcase
			allow_notifications: newData.allow_notifications,
			// eslint-disable-next-line camelcase
			subscribe_to_projects: newData.subscribe_to_projects,
		})
			.unwrap()
			.then(() => {
				toaster({
					status: 'success',
					title: 'Настройки успешно сохранены',
				});
			})
			.catch(() => {
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
				<FormProfileSettings
					handleSubmitForm={handleSubmitForm}
					userData={data}
					isLoadingChangeProfileSettings={isLoadingChangeProfileSettings}
				/>
			)}
			{isErrorGetProfileSettings && <span>Ошибка получения настроек</span>}
		</>
	);
};
