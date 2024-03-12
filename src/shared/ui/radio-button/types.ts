import { InputHTMLAttributes } from 'react';

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	id: string;
	type: string;
	labelName?: string;
};
