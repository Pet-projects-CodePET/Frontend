'use client';
import React, { useEffect, useState } from 'react';
import { Specialties } from '@/entities/specialties';
import {
	useGetProfessionsQuery,
	useGetSkillsQuery,
} from '@/services/GeneralService';
import { TSpeciality } from '@/shared/types/specialty';

export const FormProjectSpecialists = () => {
	const { data: professions } = useGetProfessionsQuery([]);

	const { data: allSkills } = useGetSkillsQuery([]);

	const [specialties, setSpecialties] = useState<TSpeciality[]>([]);

	useEffect(() => {setSpecialties([])}, []);

	return (
		<Specialties
			professions={professions}
			allSkills={allSkills}
			specialists={specialties}
			handleSubmitChangeSpecialty={function (): void {
				throw new Error('Function not implemented.');
			}}
			isLoadingChangeSpecialty={false}
			isSuccessСhangeSpecialty={false}
			handleDeleteSpecialty={function (): void {
				throw new Error('Function not implemented.');
			}}
			isSuccessDeleteSpecialty={false}
			isLoadingDeleteSpecialty={false}
			handleAddSpecialty={function (): void {
				throw new Error('Function not implemented.');
			}}
			isLoadingAddSpecialty={false}
			isSuccessAddSpecialty={false}
		/>
	);
};
