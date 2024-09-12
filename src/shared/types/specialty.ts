// тип данных "Специальность" при отправке инф в api
export type Speciality = {
	id?: number;
	profession: number;
	level: number;
	skills: number[];
};

export type TProfession = {
	id: number;
	specialty: string;
	specialization: string;
};

// тип данных пол-ля "Навыки" при запросе инф из api
export type TSkills = {
	id: number;
	name: string;
};

// тип данных пол-ля "Специальности" при запросе инф из api
export type TSpeciality = {
	id: number;
	profession: TProfession;
	level: number;
	skills: TSkills[];
};
