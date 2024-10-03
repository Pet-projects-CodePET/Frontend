import { TContact } from '@/shared/ui/contact-card/types';

export type TContactsList = {
	contacts: TContact[];
	setContacts: React.Dispatch<React.SetStateAction<TContact[]>>;
};
