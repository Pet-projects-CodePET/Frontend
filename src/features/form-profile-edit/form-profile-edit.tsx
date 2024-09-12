'use client';

import React, { FC, useState } from 'react';
import { FormProfileEdit } from '@/entities/form-profile-edit';
import { toaster } from '@/widgets/notification-toast/';
import { IUser } from '@/services/models/IUser';
import {
	useChangeProfileSettingsMutation,
	useChangeSpecialtyMutation,
	useDeleteSpecialtyMutation,
	useGetProfileSettingsQuery,
} from '@/services/UserService';
import {
	useGetProfessionsQuery,
	useGetSkillsQuery,
} from '@/services/GeneralService';
import { Loader } from '@/shared/ui';
import { DoesLookProfile } from '@/entities/does-look-profile/ui/does-look-profile';
import { Specialties } from '@/entities/specialties';
import { Speciality } from '@/shared/types/specialty';

export const FormProfileEditFeature: FC = () => {
	const {
		data: userData,
		isLoading: isLoadingGetProfileSettings,
		isError: isErrorGetProfileSettings,
	} = useGetProfileSettingsQuery(null);

	const { data: professions } = useGetProfessionsQuery([]);
	const { data: allSkills } = useGetSkillsQuery([]);

	const [changeProfileSettings, { isLoading: isLoadingChangeProfileSettings }] =
		useChangeProfileSettingsMutation();
	const [
		changeSpecialty,
		{
			isLoading: isLoadingChangeSpecialty,
			isSuccess: isSuccessСhangeSpecialty,
		},
	] = useChangeSpecialtyMutation();
	
	const [deleteSpecialty, { isSuccess: isSuccessDeleteSpecialty }] = useDeleteSpecialtyMutation();

	const [dataErrorChangeProfile, setDataErrorChangeProfile] = useState({});

	const handleSubmitFormProfileEdit = (newData: IUser) => {
		changeProfileSettings(newData)
			.unwrap()
			.then((res) => {
				console.log(res);
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
	};

	const handleSubmitChangeSpecialty = (data: Speciality) => {
		changeSpecialty(data)
			.unwrap()
			.then((resChangeSpecialty) => {
				console.log('resChangeSpecialty',resChangeSpecialty);
				toaster({
					status: 'success',
					title: 'Настройки специальности успешно сохранены',
				});
			})
			.catch((error) => {
				console.log(error);
				toaster({
					status: 'error',
					title: 'Ошибка сохранения',
					subtitle: 'Попробуйте еще раз',
				});
			});
	};
	const handleDeleteSpecialty = (id: number) => {
		deleteSpecialty(id)
			.unwrap()
			.then(() => {
				toaster({
					status: 'success',
					title: 'Спецаильность успешно удалена',
				});
			})
			.catch(() => {
				toaster({
					status: 'error',
					title: 'Ошибка удаления',
					subtitle: 'Попробуйте еще раз',
				});
			});
	};

	return (
		<>
			{isLoadingGetProfileSettings ? (
				<Loader />
			) : (
				<>
					<FormProfileEdit
						dataErrorChangeProfile={dataErrorChangeProfile}
						userData={userData}
						handleSubmitForm={handleSubmitFormProfileEdit}
						isLoadingChangeProfileSettings={isLoadingChangeProfileSettings}
					/>
					<Specialties
						professions={professions}
						allSkills={allSkills}
						specialists={userData.specialists}
						// specialists={specialties}
						handleSubmitChangeSpecialty={handleSubmitChangeSpecialty}
						isLoadingChangeSpecialty={isLoadingChangeSpecialty}
						isSuccessСhangeSpecialty={isSuccessСhangeSpecialty}
						handleDeleteSpecialty={handleDeleteSpecialty}
						isSuccessDeleteSpecialty={isSuccessDeleteSpecialty}
					/>
					<DoesLookProfile id={userData.user_id} />
				</>
			)}
			{isErrorGetProfileSettings && <span>Ошибка получения настроек</span>}
		</>
	);
};
