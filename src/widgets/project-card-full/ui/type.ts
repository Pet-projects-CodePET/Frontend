import { HTMLAttributes } from 'react';
export type ProjectCardFullType = HTMLAttributes<HTMLElement> & {
	name: string;
	description: string;
	started: string;
    ended: string;
	directions: [
		{
			id: number;
			name: string;
		},
	];
	status: string;
	recruitment_status: string;
	project_specialists: [
		{
			id: number;
			profession: {
				id: number;
				specialization: string;
				specialty: string;
			};
			skills: 
				{
					id: number;
					name: string;
				}[]
			
		},
	];

};
