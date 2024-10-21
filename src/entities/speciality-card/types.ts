import { TProfession, TSkills, TSpeciality } from '@/shared/types/specialty';
import { Control } from 'react-hook-form';

export type SpecialityCardProps = {
	data: TSpeciality;
	control: Control;
	professions: TProfession[];
	allSkills: TSkills[];
	isLoadingChangeSpecialty: boolean;
	handleSubmitChangeSpecialty: ({
		id,
		profession,
		level,
		skills,
	}: TSpeciality) => void;
	isSuccessСhangeSpecialty: boolean;
	handleDeleteSpecialty: (id: number) => void;
	isLoadingDeleteSpecialty: boolean;
};
