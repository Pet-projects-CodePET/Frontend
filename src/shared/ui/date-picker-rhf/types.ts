import { Control, FieldValues } from 'react-hook-form';

export type DatePickerRHFProps = {
	control: Control<FieldValues>;
	name: string;
	placeholder?: string;
};
