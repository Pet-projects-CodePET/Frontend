import { Option } from '@/shared/types/option';

export type MultiSelectInputProps = {
	name: string;
	options: Option[];
	values: Option[];
	onChange: (options: (string | object)[]) => void;
	selectedAll?: boolean;
	maxSelections?: number;
	width?: string;
	isSearchable?: boolean;
	tooltip?: string;
	label?: string;
	description?: string;
	selectedItemsType?: 'list' | 'items';
};
