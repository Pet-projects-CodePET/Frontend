import { HTMLAttributes } from 'react';

export type TagsProps = HTMLAttributes<HTMLElement> & {
	tags: ITag[];
};

export interface ITag {
	id: number;
	text: string;
	color: string;
}
