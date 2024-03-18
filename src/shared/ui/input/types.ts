import { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	name: string;
	labelName?: string;
	error?: string;
	link?: {
		text: string;
		href: string;
	};
	description?: boolean;
	descrText?: string;
};
