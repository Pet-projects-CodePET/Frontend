export type TContact = {
	email?: string;
	telegram?: string;
	phone?: string;
};

export type TContactCardProps = {
	data: TContact;
	index: number;
	onDelete: (id: number) => void;
};
