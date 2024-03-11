import { Option } from '@/shared/types/option';

export type SingleSelectProps = {
	name: string;
	caption: string;
	options: Option[];
	selectedOption?: Option | null;
};
