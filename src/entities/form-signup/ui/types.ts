import { IUser } from '@/services/models/IUser';

export type FormSignupProps = {
	onLoad: () => void;
	setToken: (token: string) => void;
	handleSubmit: (data: IUser | unknown) => void;
	error?: unknown;
};
