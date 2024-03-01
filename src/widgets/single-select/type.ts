export type SingleSelectProps = {
	options: Option[];
	handleChange: (option: Option | null) => void;
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
