import {
	Speciality,
	TProfession,
	TSkills,
	TSpeciality,
} from '@/shared/types/specialty';

export type TSpecialties = {
	professions: TProfession[];
	specialists: TSpeciality[];
	allSkills: TSkills[];
	handleSubmitChangeSpecialty: (data: Speciality) => void;
	isLoadingChangeSpecialty: boolean;
	isSuccessСhangeSpecialty: boolean;
	handleDeleteSpecialty: (id: number) => void;
	isSuccessDeleteSpecialty: boolean;
	handleAddSpecialty: (data: TSpeciality) => void;
	isLoadingAddSpecialty: boolean;
	isSuccessAddSpecialty: boolean;
};
