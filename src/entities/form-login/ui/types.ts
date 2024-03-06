import { IUser } from "@/services/models/IUser";

export type FormLoginProps = {
	onLoad: () => void;
	setToken: (token: string) => void;
	handleSubmit: (data: IUser | unknown) => void;
	serverErrorText? :string;
};
