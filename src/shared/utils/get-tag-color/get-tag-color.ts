import {
	qaColor,
	developmentColor,
	designColor,
	pmColor,
	analyticsColor,
	administrationColor,
} from '@/shared/constants/index';

export const getColorTag = (specialty: string) => {
	switch (specialty) {
		case 'Тестирование':
			return qaColor;
		case 'Разработка':
			return developmentColor;
		case 'Дизайнер':
			return designColor;
		case 'Менеджмент':
			return pmColor;
		case 'Аналитика':
			return analyticsColor;
		case 'Администрирование':
			return administrationColor;
		default:
			return;
	}
};
