import { HTMLAttributes } from 'react';
import { ITag } from '../tags/types';

export type CardProps = HTMLAttributes<HTMLElement> & {
	date: string;
	title: string;
	direction: string;
	tags: ITag[];
	link: string;
};
