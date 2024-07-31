import { IProjectsRequests } from '@/services/models/IProjectsRequests';
import { Option as SelectOption } from '@/shared/types/option';
export type InviteToProjectType = {
	handleRequestInProject: (projects: IProjectsRequests) => void;
	specializationArray: {
		value: number;
		label: string;
	}[];
	handleSpecializationChange: (selectedOptions: SelectOption[]) => void;
	setCurrentText: (arg: string) => void;
	currentText: string;
	selectedPosition: {
		value: number;
		label: string;
	};
};
