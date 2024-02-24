export type FormSignupProps = {
	onLoad: () => void;
	setToken: (token: string) => void;
	handleSubmit: (data: unknown) => void;
};
