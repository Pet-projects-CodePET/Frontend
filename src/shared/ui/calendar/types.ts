export type CalendarProps = {
	name?: string;
};

export type MonthProps = {
	handleChange: (month: number) => void;
	value: string;
};

export type YearProps = {
	handleChange: (year: number) => void;
	value: number;
};
