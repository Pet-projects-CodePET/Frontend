'use client';
import React, { useState } from 'react';
import { Specialties } from '@/entities/specialties';
import {
	useGetProfessionsQuery,
	useGetSkillsQuery,
} from '@/services/GeneralService';
import { Speciality, TSpeciality } from '@/shared/types/specialty';
import {
	useAddSpecialtyMutation,
	useChangeSpecialtyMutation,
	useDeleteSpecialtyMutation,
} from '@/services/UserService';
import { toaster } from '@/widgets/notification-toast';

export const FormProjectSpecialists = () => {
	const { data: professions } = useGetProfessionsQuery([]);

	const { data: allSkills } = useGetSkillsQuery([]);

	const [specialties, setSpecialties] = useState<TSpeciality[]>([]);

	const [
		changeSpecialty,
		{
			isLoading: isLoadingChangeSpecialty,
			isSuccess: isSuccessСhangeSpecialty,
		},
	] = useChangeSpecialtyMutation();

	const [
		deleteSpecialty,
		{
			isSuccess: isSuccessDeleteSpecialty,
			isLoading: isLoadingDeleteSpecialty,
		},
	] = useDeleteSpecialtyMutation();

	const [
		addSpecialty,
		{ isLoading: isLoadingAddSpecialty, isSuccess: isSuccessAddSpecialty },
	] = useAddSpecialtyMutation();

	const handleSubmitChangeSpecialty = (data: Speciality) => {
		changeSpecialty(data)
			.unwrap()
			.then(() => {
				toaster({
					status: 'success',
					title: 'Настройки специальности успешно сохранены',
				});
			})
			.catch((error) => {
				toaster({
					status: 'error',
					title: 'Ошибка сохранения',
					subtitle: 'Попробуйте еще раз',
				});
				console.log(error);
			});
	};
	const handleDeleteSpecialty = (id: number) => {
		deleteSpecialty(id)
			.unwrap()
			.then(() => {
				setSpecialties(specialties.filter((item) => item.id !== id));
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

	const handleAddSpecialty = ({ level, profession, skills }: TSpeciality) => {
		addSpecialty({
			level,
			profession: profession.id,
			skills: skills.map((item) => item.id),
		})
			.unwrap()
			.then(({ id }) => {
				setSpecialties([
					{
						id,
						level,
						profession,
						skills,
					},
					...specialties,
				]);

				toaster({
					status: 'success',
					title: 'Спецаильность успешно добавлена',
				});
			})
			.catch(() => {
				toaster({
					status: 'error',
					title: 'Ошибка добавления',
					subtitle: 'Попробуйте еще раз',
				});
			});
	};


	return (
		<Specialties
			professions={professions}
			allSkills={allSkills && allSkills}
			specialists={specialties}
			handleSubmitChangeSpecialty={handleSubmitChangeSpecialty}
			isLoadingChangeSpecialty={isLoadingChangeSpecialty}
			isSuccessСhangeSpecialty={isSuccessСhangeSpecialty}
			handleDeleteSpecialty={handleDeleteSpecialty}
			isSuccessDeleteSpecialty={isSuccessDeleteSpecialty}
			isLoadingDeleteSpecialty={isLoadingDeleteSpecialty}
			handleAddSpecialty={handleAddSpecialty}
			isLoadingAddSpecialty={isLoadingAddSpecialty}
			isSuccessAddSpecialty={isSuccessAddSpecialty}
		/>
	);
};
