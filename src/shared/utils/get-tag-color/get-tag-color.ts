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

// Для верстки компонента project-card-full на странице "Проекты"
export const getClassNameforTag = (profession: string) => {
	switch (profession) {
		case 'UX/UI':
			return 'profession_type_colorSulu';
		case 'Manual QA':
			return 'profession_type_colorRajah';
		case 'PM':
			return 'profession_type_colorMalibu';
		case 'System Analyst':
			return 'profession_type_colorPrelude';
		case 'Front-end':
			return 'profession_type_colorFroly';
		case 'DevOps':
			return 'profession_type_colorAnakiwa';
		default:
			return '';
	}
};