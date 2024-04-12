import { Option } from '@/shared/types/option';

export type SingleSelectInputProps = {
	name: string;
	label?: string;
	options: Option[];
	value?: Option;
	onChange: (option: (string | object)[]) => void;
	description?: string;
	isSearchable?: boolean;
	ref?: string;
};
