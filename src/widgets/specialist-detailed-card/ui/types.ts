export type DetailedSpecialistCardTypes = {
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
			id: number;
			profession: {
				id: number;
				speciality: string;
				specialization: string;
			};
			level: number;
			skills: [{ id: number; name: string }];
		},
	];

	isFavorite?: string;
	about: string;
	portfolioLink: string;
	birthday: number;
	country: string;
	city: string;
	phoneNumber: string;
	telegramNick: string;
	email: string;
	projects: [{ id: number; name: string }];
};
