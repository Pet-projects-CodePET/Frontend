'use client';
import React, { useState } from 'react';
import {
	useGetProfessionsQuery,
	useGetSkillsQuery,
} from '@/services/GeneralService';
import styles from './form-project-specialists.module.scss';
import { Loader } from '@/shared/ui';
import { AddProjectSpeciality } from '@/entities/add-proejct-specialists/add-project-speciality';
import { Speciality, TSpeciality } from '@/shared/types/specialty';
import { ProjectSpecilistCard } from '@/entities/project-speciality-card/project-speciality-card';

export const FormProjectSpecialists = () => {
	const { data: professions, isLoading: isLoadingProf } =
		useGetProfessionsQuery([]);
	const { data: allSkills, isLoading: isLoadingSkills } = useGetSkillsQuery([]);

	const [specialties, setSpecialties] = useState<TSpeciality[]>([]);

	function handler(data: TSpeciality | never) {
		setSpecialties([data, ...specialties]);
	}

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
								<ProjectSpecilistCard
									data={specialist}
									professions={professions}
									allSkills={allSkills}
									isLoadingChangeSpecialty={false}
									isSuccessСhangeSpecialty={false}
									isLoadingDeleteSpecialty={false}
									handleSubmitChangeSpecialty={function (
										data: Speciality
									): void {
										throw new Error(`${data}`);
									}}
									handleDeleteSpecialty={function (id: number): void {
										throw new Error(`${id}`);
									}}
								/>
							</li>
						))}
					</ul>
					<AddProjectSpeciality
						allSkills={allSkills}
						professions={professions}
						isLoadingAddSpecialty={true}
						isSuccessAddSpecialty={true}
						handleAddSpecialty={handler}
					/>
				</>
			)}
		</section>
	);
};
