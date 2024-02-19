import { ITag } from '@/shared/ui/tags/types';
import { tags } from '@/shared/constants/tags/tags';

type CurrentProject = {
	id: number;
	date: string;
	title: string;
	direction: string;
	tags: ITag[];
	link: string;
};

export const currentProjects: Array<CurrentProject> = [
	{
		id: 0,
		date: '15 сентября-22 августа',
		title: 'Название проекта',
		direction: 'Мобильная разработка',
		tags: tags,
		link: '/',
	},
	{
		id: 1,
		date: '15 сентября-22 августа',
		title: 'Название проекта',
		direction: 'Мобильная разработка',
		tags: tags,
		link: '/',
	},
	{
		id: 2,
		date: '15 сентября-22 августа',
		title: 'Название проекта',
		direction: 'Мобильная разработка',
		tags: tags,
		link: '/',
	},
	{
		id: 3,
		date: '15 сентября-22 августа',
		title: 'Название проекта',
		direction: 'Мобильная разработка',
		tags: tags,
		link: '/',
	},
	{
		id: 4,
		date: '15 сентября-22 августа',
		title: 'Название проекта',
		direction: 'Мобильная разработка',
		tags: tags,
		link: '/',
	},
	{
		id: 5,
		date: '15 сентября-22 августа',
		title: 'Название проекта',
		direction: 'Мобильная разработка',
		tags: tags,
		link: '/',
	},
];
