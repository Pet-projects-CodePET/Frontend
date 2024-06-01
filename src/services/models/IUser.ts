export type IUser = {
	email?: string;
	username?: string;
	password?: string;
	re_password?: string;
	auth_token?: string;
	newPassword?: string;
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
};
