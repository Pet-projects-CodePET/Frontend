export const getLastOneHundredYearsArray = (): number[] => {
	const currentYear = new Date().getFullYear();
	const result = [];
	for (let index = currentYear; index >= currentYear - 100; index--) {
		result.push(index);
	}
	return result;
};

export const months = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Май',
	'Июнь',
	'Июль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь',
];
