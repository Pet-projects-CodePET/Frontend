export type Specialist = {
	user_id: number;
	avatar: string;
	name: string;
	username: string;
	specialists: [
		{
			id: number;
			profession: {
				id: number;
				specialty: string;
				specialization: string;
			};
			level: number;
			skills: [{ id: number; name: string }];
		},
	];
	ready_to_participate: boolean;
};
