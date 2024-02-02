import { ButtonHTMLAttributes, ReactNode } from 'react';

export type MainButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
};
