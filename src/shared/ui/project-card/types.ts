import { HTMLAttributes } from 'react';

export type CardProps = HTMLAttributes<HTMLElement> & {
	date: string;
	title: string;
	direction: string;
	tags: {
		id: number;
		text: string;
		color: string;
	}[];
	link: string;
};
