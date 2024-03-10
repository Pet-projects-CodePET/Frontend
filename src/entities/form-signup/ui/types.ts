export type FormSignupProps = {
	onLoad: () => void;
	setToken: (token: string) => void;
	captchaVerified?: boolean;
	serverErrorText?: string;
	serverEmailError?: string;
	serverUsernameError?: string;
	serverPasswordError?: string;
};
