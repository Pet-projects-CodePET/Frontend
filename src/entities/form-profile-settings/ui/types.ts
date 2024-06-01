import { IUser } from '@/services/models/IUser';

export type FormProfileSettingsProps = {
	handleSubmitForm: (data: IUser) => void;
	userData: {
		visible_status?: number;
		visible_status_contacts?: number;
		allow_notifications?: boolean | undefined;
		subscribe_to_projects?: boolean | undefined;
	};
};
