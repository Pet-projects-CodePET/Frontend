export type CalendarProps = {
	name?: string;
	selectedDate: Date | null;
	setSelectedDate: (date: Date | null) => void;
};

export type MonthProps = {
	handleChange: (month: number) => void;
	value: string;
};

export type YearProps = {
	handleChange: (year: number) => void;
	value: number;
};
