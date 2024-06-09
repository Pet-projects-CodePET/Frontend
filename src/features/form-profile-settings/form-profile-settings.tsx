'use client';

import React, { FC } from 'react';
import { FormProfileSettings } from '@/entities/form-profile-settings';
import {
	NotificationToastContainer,
	toaster,
} from '@/widgets/notification-toast/';
import { IUser } from '@/services/models/IUser';
import {
	useChangeProfileSettingsMutation,
	useGetProfileInfoQuery,
} from '@/services/UserService';

export const FormProfileSettingsFeature: FC = () => {
	const { data } = useGetProfileInfoQuery(null);
	const [changeProfileSettings] = useChangeProfileSettingsMutation();

	const handleSubmitForm = (data: IUser) => {
		changeProfileSettings({
			// eslint-disable-next-line camelcase
			visible_status: data.visible_status as number,
			// eslint-disable-next-line camelcase
			visible_status_contacts: data.visible_status_contacts as number,
			// eslint-disable-next-line camelcase
			allow_notifications: data.allow_notifications,
			// eslint-disable-next-line camelcase
			subscribe_to_projects: data.subscribe_to_projects,
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

		console.log('handleSubmit data', data);
	};

	return (
		<>
			<FormProfileSettings
				handleSubmitForm={handleSubmitForm}
				userData={data}
			/>
			<NotificationToastContainer />
		</>
	);
};
