export type Option = {
	/** Ключевое значение */
	value: number;
	/** Отображаемое значение */
	label: string;
};

export type OptionItemProps = {
	option: Option;
	selected: boolean;
	disabled: boolean;
	onChange: (option: Option | undefined) => void;
};
