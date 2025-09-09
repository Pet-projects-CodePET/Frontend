import { TProfession, TSkills } from "@/shared/types/specialty";
import { TContact } from "@/shared/ui/contact-card/types";
export type FormCreateProjectProps = {
	serverLinkError?: string;
	serverNameError?: string;
	setServerNameError: (arg: string) => void;
	setServerLinkError: (arg: string) => void;
	professions: TProfession[];
	allSkills: TSkills[];
	currentText: string | undefined;
	setCurrentText: (value: string) => void;
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