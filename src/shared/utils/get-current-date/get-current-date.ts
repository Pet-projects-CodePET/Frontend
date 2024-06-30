const months = [
	'января',
	'февраля',
	'марта',
	'апреля',
	'мая',
	'июня',
	'июля',
	'августа',
	'сентября',
	'октября',
	'ноября',
	'декабря',
];
export const getStartDate = (started: string) => {
	return `${started?.slice(-2)} ${months[new Date(started).getMonth()]}`;
};

export const getEndDate = (ended: string) => {
	return `${ended?.slice(-2)} ${months[new Date(ended).getMonth()]}`;
};
