import React, { FC, useState } from 'react';
import { CalendarProps, MonthProps, YearProps } from './types';
import ReactDatePicker, {
	ReactDatePickerCustomHeaderProps,
} from 'react-datepicker';
import './react-datepicker.scss';
import styles from './calendar.module.scss';
import { ru } from 'date-fns/locale';
import Chevron from '../../assets/icons/chevron-right-icon.svg';
import {
	getLastOneHundredYearsArray,
	months,
} from '@/shared/constants/calendar-filter/calendar-filter';

export const Calendar: FC<CalendarProps> = ({ name }) => {
	const [startDate, setStartDate] = useState(new Date());
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

	return (
		<ReactDatePicker
			locale={ru}
			name={name}
			renderCustomHeader={header}
			selected={startDate}
			dateFormat="dd.MM.yyyy"
			strictParsing
			onChange={(date: Date) => setStartDate(date)}
		/>
	);
};
