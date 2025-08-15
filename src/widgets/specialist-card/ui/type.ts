export type SpecialistCardType = {
	user_id: number;
	avatar: string;
	userName: string;
	name: string;
	readyToParticipate: boolean;
	is_favorite: boolean;
	specialists: [
		{
			id: number;
			profession: {
				id: number;
				speciality: string;
				specialization: string;
			};
			level: number;
			skills: [{ id: number; name: string }];
		},
		{
			id?: number;
			profession?: {
				id?: number;
				speciality?: string;
				specialization?: string;
			};
			level?: number;
			skills?: [{ id: number; name: string }];
		},
	];
	handleDeleteCard?: (arg: number) => void;
};
