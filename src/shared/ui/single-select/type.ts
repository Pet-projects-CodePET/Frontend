import { Option } from '@/shared/types/option';

export type SingleSelectProps = {
	name: string;
	buttonLabel: string;
	options: Option[];
	value?: Option;
	onChange: (value: Option) => void;
};
