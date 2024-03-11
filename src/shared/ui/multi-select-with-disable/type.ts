import { Option } from '@/shared/types/option';

export type MultiSelectWithDisableProps = {
	name: string;
	caption: string;
	options: Option[];
	values: Option[];
	onChange: (options: Option[]) => void;
	maxSelections?: number;
};
