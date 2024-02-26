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
