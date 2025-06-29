export type IUser = {
	user_id?: number;
	email?: string;
	username?: string;
	password?: string;
	re_password?: string;
	auth_token?: string;
	newPassword?: string;
	name?: string;
	ready_to_participate?: boolean;
	about?: string;
	portfolio_link?: string;
	phone_number?: string;
	telegram_nick?: string;
	birthday?: string;
	country?: string;
	city?: string;
	visible_status?: number;
	visible_status_contacts?: number;
	allow_notifications?: boolean;
	subscribe_to_projects?: boolean;
	avatar?: string;

	
	description?: string | undefined,
	started?: string,
	ended?: string,
	busyness?: number,
	directions?: [
		{
			id: number;
			name: string;
		},
	  
	],
	link?: string,
	
	project_specialists?: [
		{
			id: number;
			profession: {
				id: number;
				specialization: string;
				speciality: string;
			};
			skills: {
				id: number;
				name: string;
			}[];
			count?: number;
			level?: number;
			is_required?: boolean;
		},
	],
	project_status?: string;
};
