import { Option } from '@/shared/types/option';

export type SingleSelectProps = {
	name: string;
	buttonLabel: string;
	options: Option[];
	value?: Option;
	onChange: (option: (string | object)[]) => void;
};
