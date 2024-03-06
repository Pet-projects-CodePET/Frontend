import { Option } from '@/shared/types/option';

export type MultiSelectProps = {
	name: string;
	caption: string;
	options: Option[];
	values: Option[];
	onChange: (options: Option[]) => void;
};
