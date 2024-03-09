export type FormLoginProps = {
	onLoad: () => void;
	setToken: (token: string) => void;
	serverErrorText?: string;
	captchaVerified?: boolean;
};
