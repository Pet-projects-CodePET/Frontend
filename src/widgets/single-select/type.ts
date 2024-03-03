export type SingleSelectProps = {
	name: string;
	options: Option[];
	selectedOption?: Option | null;
};

export type Option = {
	value: string;
	label: string;
};
