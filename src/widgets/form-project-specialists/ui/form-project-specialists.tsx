'use client';
import React, { useState } from 'react';
import {
	useGetProfessionsQuery,
	useGetSkillsQuery,
} from '@/services/GeneralService';
import { TSpeciality } from '@/shared/types/specialty';
import { toaster } from '@/widgets/notification-toast';
import styles from './form-project-specialists.module.scss';
import { Loader } from '@/shared/ui';
import { AddProjectSpeciality } from '@/entities/add-proejct-specialists/add-project-speciality';
import { ProjectSpecialitCard } from '@/entities/speciality-card/speciality-card';
import { Control } from 'react-hook-form';

export const FormProjectSpecialists = ({
	control,
}: {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	control: Control<any>;
}) => {
	const { data: professions, isLoading: isLoadingProf } =
		useGetProfessionsQuery([]);

	const { data: allSkills, isLoading: isLoadingSkills } = useGetSkillsQuery([]);

	const [specialties, setSpecialties] = useState<TSpeciality[]>([]);

//	 ========================  possible bug 
	const handleAddSpecialty = ({ profession, level, skills }: TSpeciality) => {
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
	};
	const handleChangeSpecialty = ({
		id,
		profession,
		level,
		skills,
	}: TSpeciality) => {
		setSpecialties(() => [
			{
				id,
				profession,
				level,
				skills,
			},
		]);

		toaster({
			status: 'success',
			title: 'Специальность успешно изменена',
		});
	};
	const handleDelete = (id: number) => {
		setSpecialties(specialties.filter((item) => item.id !== id));
	};

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
								<ProjectSpecialitCard
									data={specialist}
									control={control}
									professions={professions}
									allSkills={allSkills}
									isLoadingChangeSpecialty={false}
									isSuccessСhangeSpecialty={false}
									isLoadingDeleteSpecialty={false}
									handleSubmitChangeSpecialty={handleChangeSpecialty}
									handleDeleteSpecialty={handleDelete}
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
