import React, { FC, useState } from 'react';
import { CalendarProps } from './types';
import ReactDatePicker, {
	ReactDatePickerCustomHeaderProps,
} from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import './react-datepicker.scss';
import { ru } from 'date-fns/locale';
import Chevron from '../../assets/icons/chevron-right-icon.svg';

export const Calendar: FC<CalendarProps> = ({ name }) => {
	const [startDate, setStartDate] = useState(new Date());

	const years = [
		2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
		2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
		2024, 2025, 2026, 2027, 2028, 2029,
	];
	const months = [
		'Январь',
		'Февраль',
		'Март',
		'Апрель',
		'Май',
		'Июнь',
		'Июль',
		'Август',
		'Сентябрь',
		'Октябрь',
		'Ноябрь',
		'Декабрь',
	];

	const header = ({
		date,
		changeYear,
		changeMonth,
		decreaseMonth,
		increaseMonth,
		prevMonthButtonDisabled,
		nextMonthButtonDisabled,
	}: ReactDatePickerCustomHeaderProps) => (
		<div
			style={{
				margin: 10,
				display: 'flex',
				justifyContent: 'space-between',
			}}>
			<button
				style={{
					fontWeight: '700',
					cursor: 'pointer',
					backgroundColor: 'transparent',
					border: 'none',
				}}
				onClick={decreaseMonth}
				disabled={prevMonthButtonDisabled}>
				<Chevron style={{ transform: 'rotate(180deg)' }} />
			</button>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
					gap: '12px',
					width: '300px',
				}}>
				<select
					style={{
						minHeight: '40px',
						borderRadius: '8px',
						border: '1px solid #E2E8F0',
						background: '#FEFFFF',
						padding: '12px',
					}}
					value={date.getFullYear()}
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					onChange={({ target: { value } }) => changeYear(value)}>
					{years.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>

				<select
					style={{
						minHeight: '40px',
						borderRadius: '8px',
						border: '1px solid #E2E8F0',
						background: '#FEFFFF',
						padding: '12px',
					}}
					value={months[date.getMonth()]}
					onChange={({ target: { value } }) =>
						changeMonth(months.indexOf(value))
					}>
					{months.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
			</div>
			<button
				style={{
					fontWeight: '700',
					cursor: 'pointer',
					backgroundColor: 'transparent',
					border: 'none',
				}}
				onClick={increaseMonth}
				disabled={nextMonthButtonDisabled}>
				<Chevron />
			</button>
		</div>
	);

	return (
		<ReactDatePicker
			locale={ru}
			name={name}
			renderCustomHeader={header}
			selected={startDate}
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			onChange={(date) => setStartDate(date)}
			fixedHeight
		/>
	);
};
