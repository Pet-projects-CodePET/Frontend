export type FormPasswordRecoveryProps = {
	onLoad: () => void;
	setToken: (token: string) => void;
	handleSubmit: (data: unknown) => void;
	isPasswordSend: boolean;
	handlePasswordReSend: () => void;
};
