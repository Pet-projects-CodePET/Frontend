export type FormPasswordRecoveryProps = {
	onLoad: () => void;
	setToken: (token: string) => void;
	handleSubmit: () => void;
	isPasswordSend: boolean;
	handlePasswordReSend: () => void;
};
