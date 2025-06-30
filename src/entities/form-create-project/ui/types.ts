import { TProfession, TSkills } from "@/shared/types/specialty";
export type FormCreateProjectProps = {
	// onLoad: () => void;
	// setToken: (token: string) => void;
	// captchaVerified?: boolean;
	// serverErrorText?: string;
	// serverEmailError?: string;
	// serverUsernameError?: string;
	// serverPasswordError?: string;
	// setServerUsernameError: (arg0: string) => string;
	// setServerEmailError: (arg0: string) => string;
	// setServerPasswordError: (arg0: string) => string;
	professions: TProfession[];
	allSkills: TSkills[];
	currentText: string | undefined;
	setCurrentText: () => void;
	setActionType: (arg: 'publish' | 'draft') => void;
	setSubmitSuccessfulReset: (arg: boolean) => void;
	isSubmitSuccessfulReset: boolean;
};

export type direction = {
	id: number;
	name: string;
};