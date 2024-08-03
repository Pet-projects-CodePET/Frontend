import { IProjectsRequests } from '@/services/models/IProjectsRequests';
export type InviteToProjectVacancyType = {
	handleRequestInProject: (projects: IProjectsRequests) => void;
	setCurrentText: (arg: string) => void;
	currentText: string;
	project_specialists:  {
		id: number;
		specialization: string;
		specialty: string;
	};

};
