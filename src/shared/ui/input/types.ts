import { InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	labelName?: string;
	error?: string;
	register: UseFormRegister<FieldValues>;
	link?: {
		text: string;
		href: string;
	};
};
