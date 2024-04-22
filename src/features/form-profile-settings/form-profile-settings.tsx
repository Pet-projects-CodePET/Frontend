
import React, { FC } from 'react';
import { FormProfileSettings } from '@/entities/form-profile-settings';
import { useDeleteAccountMutation } from '@/services/UserService';

export const FormProfileSettingsFeature: FC = () => {
	const [deleteAccount] = useDeleteAccountMutation();
  
	const handleSubmit = () => {
		deleteAccount()
			.then((res) => {
				console.log('deleteAccount res', res);
			})
			.catch((err) => {
				console.log('deleteAccount err', err);
			});
	};

	return <FormProfileSettings handleSubmit={handleSubmit} />;
};
