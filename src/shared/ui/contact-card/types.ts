export type TContact = {
	email?: string;
	telegram_nick?: string;
	phone_number?: string;
};

export type TContactCardProps = {
	data: TContact;
	index: number;
	onDelete: (id: number) => void;
};
