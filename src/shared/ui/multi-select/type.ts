import { Option } from '@/shared/types/option';

export type MultiSelectProps = {
	name: string;
	caption: string;
	options: Option[];
	values: Option[];
	onChange: (options: (string | object)[]) => void;
	selectedAll?: boolean;
	maxSelections?: number;
	buttonWidth: number;
	isSearchable?: boolean;
	tooltip?: string;
};
