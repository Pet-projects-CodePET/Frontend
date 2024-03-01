export type SingleSelectProps = {
	options: Option[];
	selectedOption: Option | null;
};

export type Option = {
	value: string;
	label: string;
};

export const statusOptions: Option[] = [
	{ value: 'active', label: 'Активный' },
	{ value: 'completed', label: 'Завершенный' },
];
