export interface IProject {
	id: number;
	title: string;
	image: string;
	isLiked: boolean;
}


export type ProjectService = {
	id: number,
	started: string;
	ended: string;
	name: string;
	directions: [
		{
			id: number;
			name: string;
		},
	];
	project_specialists: [
		{
			id: number;
			profession: {
				id: number;
				specialization: string;
				specialty: string;
			};
		},
	];

}