import { HTMLAttributes } from 'react';

export type CardProps = HTMLAttributes<HTMLElement> & {
	started?: string,
	ended?: string,
	name?: string;
	description?: string;
	directions?: [
		{
			id: number,
			name: string,
		},
	];
	project_specialists?: [
		{
			id: number;
			profession?: {
				id: number,
				specialization?: string,
				specialty?: string,
			}
		}
	]
};
