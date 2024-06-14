'use client';

import React, { FC } from 'react';
import { FormProfileSettings } from '@/entities/form-profile-settings';
('@/services/UserService');
import {
	NotificationToastContainer,
	// toaster,
} from '@/widgets/notification-toast/';
import { IUser } from '@/services/models/IUser';
import { useGetProfileInfoQuery } from '@/services/UserService';
// import { useRouter } from 'next/navigation';

export const FormProfileSettingsFeature: FC = () => {
	// const router = useRouter();
	const { data } = useGetProfileInfoQuery(null);

	const handleSubmitForm = (data: IUser) => {
		// const {visible_status} = data;

		// console.log('handleSubmit visible_status', parseInt(data.visible_status as string));
		// console.log('handleSubmit visible_status_contacts',parseInt(data.visible_status_contacts as string) );
		// console.log('handleSubmit allow_notifications', data.allow_notifications as boolean);
		// console.log('handleSubmit subscribe_to_projects', data.subscribe_to_projects as boolean);

		console.log('handleSubmit data', data);
	};
	// useEffect(() => {
	// 	if (data) {

	// 		// console.log(data);
	// 	}
	// },[]);

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
