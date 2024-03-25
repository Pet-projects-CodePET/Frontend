import { InputHTMLAttributes } from 'react';

export type CheckboxAndRadioProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	id: string;
	type: string;
	labelName?: string;
};
