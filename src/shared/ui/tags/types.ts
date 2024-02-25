import { HTMLAttributes } from 'react';

export type Tag = {
	id: number;
	text: string;
	color: string;
};

export type TagsProps = HTMLAttributes<HTMLElement> & {
	tags: Tag[];
};
