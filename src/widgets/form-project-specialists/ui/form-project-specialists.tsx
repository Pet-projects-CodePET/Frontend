'use client';
import React, { useCallback, useState } from 'react';
import {
	useGetProfessionsQuery,
	useGetSkillsQuery,
} from '@/services/GeneralService';
import { Speciality, TSpeciality } from '@/shared/types/specialty';
import { toaster } from '@/widgets/notification-toast';
import styles from './form-project-specialists.module.scss';
import { SpecialityCard } from '@/shared/ui/speciality-card/speciality-card';
import { Loader } from '@/shared/ui';
import { AddProjectSpeciality } from '@/entities/add-proejct-specialists/add-project-speciality';

export const FormProjectSpecialists = () => {
	const {
		data: professions,
		isLoading: isLoadingProf,
	} = useGetProfessionsQuery([]);

	const {
		data: allSkills,
		isLoading: isLoadingSkills,
	} = useGetSkillsQuery([]);

	const [specialties, setSpecialties] = useState<TSpeciality[]>([]);


	const handleAddSpecialty = useCallback(
		({ profession, level, skills }: TSpecialty) => {
		  setSpecialties((prevSpecialties) => [
			{
			  profession,
			  level,
			  skills,
			},
			...prevSpecialties,
		  ]);
	  
		  toaster({
			status: 'success',
			title: 'Специальность успешно добавлена',
		  });
		},
		[]
	  );

	return (
		<section className={styles.specialityList}>
			{isLoadingProf || isLoadingSkills ? (
				<div style={{ minWidth: '816px' }}>
					<Loader />
				</div>
			) : (
				<>
					<h3 className={styles.specialityList__title}>Специальность</h3>
					<ul className={styles.specialityList__contentList}>
						{specialties.map((specialist) => (
							<li key={specialist.id}>
								<SpecialityCard
									data={specialist}
									professions={professions}
									allSkills={allSkills}
									handleSubmitChangeSpecialty={function (
										data: Speciality
									): void {
										throw new Error(`Function not implemented: ${data}`);
									}}
									handleDeleteSpecialty={function (id: number): void {
										throw new Error(`Function not implemented. ${id}`);
									}}
									isLoadingChangeSpecialty={false}
									isSuccessСhangeSpecialty={false}
									isLoadingDeleteSpecialty={false}
								/>
							</li>
						))}
					</ul>
					<AddProjectSpeciality
						allSkills={allSkills}
						professions={professions}
						handleAddSpecialty={handleAddSpecialty}
						isLoadingAddSpecialty={true}
						isSuccessAddSpecialty={true}
					/>
				</>
			)}
		</section>
	);
};

{
	/* <Specialties */
}
// 	professions={professions}
// 	allSkills={allSkills && allSkills}
// 	specialists={specialties}
// 	handleSubmitChangeSpecialty={handleSubmitChangeSpecialty}
// 	isLoadingChangeSpecialty={isLoadingChangeSpecialty}
// 	isSuccessСhangeSpecialty={isSuccessСhangeSpecialty}
// 	handleDeleteSpecialty={handleDeleteSpecialty}
// 	isSuccessDeleteSpecialty={isSuccessDeleteSpecialty}
// 	isLoadingDeleteSpecialty={isLoadingDeleteSpecialty}
// 	handleAddSpecialty={handleAddSpecialty}
// 	isLoadingAddSpecialty={isLoadingAddSpecialty}
// 	isSuccessAddSpecialty={isSuccessAddSpecialty}
// />
// const [
// 	changeSpecialty,
// 	{
// 		isLoading: isLoadingChangeSpecialty,
// 		isSuccess: isSuccessСhangeSpecialty,
// 	},
// ] = useChangeSpecialtyMutation();

// const [
// 	deleteSpecialty,
// 	{
// 		isSuccess: isSuccessDeleteSpecialty,
// 		isLoading: isLoadingDeleteSpecialty,
// 	},
// ] = useDeleteSpecialtyMutation();

// const [
// 	addSpecialty,
// 	{ isLoading: isLoadingAddSpecialty, isSuccess: isSuccessAddSpecialty },
// ] = useAddSpecialtyMutation();

// const handleSubmitChangeSpecialty = (data: Speciality) => {
// 	changeSpecialty(data)
// 		.unwrap()
// 		.then(() => {
// 			toaster({
// 				status: 'success',
// 				title: 'Настройки специальности успешно сохранены',
// 			});
// 		})
// 		.catch((error) => {
// 			toaster({
// 				status: 'error',
// 				title: 'Ошибка сохранения',
// 				subtitle: 'Попробуйте еще раз',
// 			});
// 			console.log(error);
// 		});
// };
// const handleDeleteSpecialty = (id: number) => {
// 	deleteSpecialty(id)
// 		.unwrap()
// 		.then(() => {
// 			setSpecialties(specialties.filter((item) => item.id !== id));
// 			toaster({
// 				status: 'success',
// 				title: 'Спецаильность успешно удалена',
// 			});
// 		})
// 		.catch(() => {
// 			toaster({
// 				status: 'error',
// 				title: 'Ошибка удаления',
// 				subtitle: 'Попробуйте еще раз',
// 			});
// 		});
// };

// const handleAddSpecialty = ({ level, profession, skills }: TSpeciality) => {
// 	addSpecialty({
// 		level,
// 		profession: profession.id,
// 		skills: skills.map((item) => item.id),
// 	})
// 		.unwrap()
// 		.then(({ id }) => {
// 			setSpecialties([
// 				{
// 					id,
// 					level,
// 					profession,
// 					skills,
// 				},
// 				...specialties,
// 			]);

// 			toaster({
// 				status: 'success',
// 				title: 'Спецаильность успешно добавлена',
// 			});
// 		})
// 		.catch(() => {
// 			toaster({
// 				status: 'error',
// 				title: 'Ошибка добавления',
// 				subtitle: 'Попробуйте еще раз',
// 			});
// 		});
// };
