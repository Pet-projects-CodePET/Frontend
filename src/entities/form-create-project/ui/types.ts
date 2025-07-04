import { TProfession, TSkills } from "@/shared/types/specialty";
import { TContact } from "@/shared/ui/contact-card/types";
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
	contacts: TContact[];
    setContacts: React.Dispatch<React.SetStateAction<TContact[]>>;
};

export type direction = {
	id: number;
	name: string;
};