export type SpecialistType = {
	user_id: number;
	avatar: string;
	name: string;
	username: string;
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
	ready_to_participate: boolean;
	handleDeleteCard?: (arg: number) => void;
};

export type Filters = {
	status?: boolean; // Статус специалиста
	specialists?: number[]; // Уровень квалификации
	specialty?: number[]; // Специальность
	skills?: number[]; // Навыки
	searchQuery?: string; // Поиск по фразе
};
