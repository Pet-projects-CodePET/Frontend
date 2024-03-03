export type SingleSelectProps = {
	name: string;
	caption: string;
	options: Option[];
	selectedOption?: Option | null;
};

export type Option = {
	value: string;
	label: string;
};
