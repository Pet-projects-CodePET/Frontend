export type FormCreateProjectProps = {
	onLoad: () => void;
	setToken: (token: string) => void;
	captchaVerified?: boolean;
	serverErrorText?: string;
	serverEmailError?: string;
	serverUsernameError?: string;
	serverPasswordError?: string;
	setServerUsernameError: (arg0: string) => string;
	setServerEmailError: (arg0: string) => string;
	setServerPasswordError: (arg0: string) => string;
};

export type direction = {
	id: number;
	name: string;
};
