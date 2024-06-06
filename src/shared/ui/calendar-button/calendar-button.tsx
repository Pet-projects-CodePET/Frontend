import React, {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	FC,
	forwardRef,
	useState,
} from 'react';
import ReactDatePicker, {
	ReactDatePickerCustomHeaderProps,
} from 'react-datepicker';
import '../calendar/react-datepicker.scss';
import styles from './calendar.module.scss';
import { ru } from 'date-fns/locale';
import Chevron from '../../assets/icons/chevron-right-icon.svg';
import {
	getLastOneHundredYearsArray,
	months,
} from '@/shared/constants/calendar-filter/calendar-filter';
import { MonthProps, YearProps } from '../calendar/types';
import { CalendarButtonProps } from './types';

export const CalendarButton: FC<CalendarButtonProps> = ({
	name,
	caption,
	isSelectsRange,
}) => {
	const [startDate, setStartDate] = useState<Date | null>(new Date());
	const [endDate, setEndDate] = useState<Date | null>(null);

	const years = getLastOneHundredYearsArray();

	const MonthFilter = ({ handleChange, value }: MonthProps) => (
		<select
			className={styles.selectFilter}
			value={value}
			onChange={({ target: { value } }) => handleChange(months.indexOf(value))}>
			{months.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	);

	const YearFilter = ({ handleChange, value }: YearProps) => (
		<select
			className={styles.selectFilter}
			value={value}
			onChange={({ target: { value } }) => handleChange(Number(value))}>
			{years.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	);

	const header = ({
		date,
		changeYear,
		changeMonth,
		decreaseMonth,
		increaseMonth,
		prevMonthButtonDisabled,
		nextMonthButtonDisabled,
	}: ReactDatePickerCustomHeaderProps) => (
		<div className={styles.filterContainer}>
			<button
				className={styles.buttonChevron}
				onClick={decreaseMonth}
				disabled={prevMonthButtonDisabled}>
				<Chevron className={styles.chevronLeft} />
			</button>
			<div className={styles.selectContainer}>
				<MonthFilter
					handleChange={changeMonth}
					value={months[date.getMonth()]}
				/>
				<YearFilter handleChange={changeYear} value={date.getFullYear()} />
			</div>
			<button
				className={styles.buttonChevron}
				onClick={increaseMonth}
				disabled={nextMonthButtonDisabled}>
				<Chevron className={styles.chevronRight} />
			</button>
		</div>
	);

	const CustomInput = forwardRef<
		HTMLButtonElement,
		DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>
	>((props, ref) => (
		<button ref={ref} {...props}>
			{caption}
		</button>
	));
	CustomInput.displayName = 'CustomInput';

	const handleChange = (dates: Date | [Date, Date | null]) => {
		if (Array.isArray(dates)) {
			const [start, end] = dates;
			setStartDate(start);
			setEndDate(end);
		} else {
			setStartDate(dates);
			setEndDate(null);
		}
	};

	return (
		<div>
			<ReactDatePicker
				locale={ru}
				name={name}
				renderCustomHeader={header}
				selected={startDate}
				dateFormat="dd.MM.yyyy"
				strictParsing
				onChange={handleChange}
				customInput={<CustomInput className={styles.inputButton} />}
				selectsRange={isSelectsRange}
				startDate={startDate}
				endDate={endDate}
			/>
		</div>
	);
};
