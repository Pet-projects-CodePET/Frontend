export type CalendarButtonProps = {
	name?: string;
	caption?: string;
	isSelectsRange?: boolean;
	onChange: (date: Date | [Date, Date | null]) => void;
};
