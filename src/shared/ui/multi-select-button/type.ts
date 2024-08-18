import { Option } from '@/shared/types/option';

export type MultiSelectButtonProps = {
	name: string;
	caption: string;
	options: Option[];
	values: Option[];
	onChange: (options: Option[]) => void;
	selectedAll?: boolean;
	maxSelections?: number;
	buttonWidth: number;
	isSearchable?: boolean;
	tooltip?: string;
};
