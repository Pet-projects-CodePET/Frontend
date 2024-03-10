export type FormPasswordRecoveryProps = {
	onLoad: () => void;
	setToken: (token: string) => void;
	isPasswordSend: boolean;
	handlePasswordReSend: () => void;
	serverErrorText: string;
	captchaVerified: boolean;
};
