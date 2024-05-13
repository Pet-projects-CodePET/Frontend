export const getColorTag = (specialty: string) => {
	switch (specialty) {
		case 'Тестирование':
			return '#F6BD60';
		case 'Разработка':
			return '#F28482';
		case 'Дизайнер':
			return '#B9F18C';
		case 'Менеджмент':
			return '#8CAAFF';
		case 'Аналитика':
			return '#CDB4DB';
		case 'Администрирование':
			return '#A2D2FF';
		default:
			return '';
	}
};
