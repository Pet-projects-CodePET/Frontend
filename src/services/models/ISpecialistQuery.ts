export type SpecialistInfoType = {
	avatar: string;
	username: string;
	name: string;
	ready_to_participate: boolean;
	specialists: [
		{
			id: number;
			profession: {
				id: number;
			};
			level: number;
			skills: [
				{
					id: number;
					name: string;
				},
			];
		},
	];
	is_favorite: string;
	portfolio_link: string;
	birthday: number;
	country: string;
	city: string;
	phone_number: number;
	telegram_nick: string;
	email: string;
	projects: [
		{
			additionalProp1: string;
			additionalProp2: string;
			additionalProp3: string;
		},
	];
};
