import { HTMLAttributes } from 'react';

export type TagsProps = HTMLAttributes<HTMLElement> & {
	tags: {
		id: number;
		text: string;
		color: string;
	}[];
};
