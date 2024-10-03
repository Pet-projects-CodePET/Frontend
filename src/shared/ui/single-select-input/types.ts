import { TOption } from '@/entities/form-profile-edit/ui/types';
// import { Option } from '@/shared/types/option';

export type SingleSelectInputProps = {
	name: string;
	label?: string;
	options: TOption[];
	value?: TOption;
	onChange: (option: (string | object)[]) => void;
	description?: string;
	isSearchable?: boolean;
	ref?: string;
};
