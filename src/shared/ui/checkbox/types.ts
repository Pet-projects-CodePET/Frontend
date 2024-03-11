import { InputHTMLAttributes } from 'react';

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	labelName?: string;
};
