import React, { FC, useState } from 'react';
import { CalendarProps } from './types';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import './react-datepicker.scss';
import { ru } from 'date-fns/locale';

export const Calendar: FC<CalendarProps> = ({ name }) => {
	const [startDate, setStartDate] = useState(new Date());
	const years = [
		2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
		2022, 2023, 2024,
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
	return (
		<ReactDatePicker
			locale={ru}
			name={name}
			renderCustomHeader={({
				date,
				changeYear,
				changeMonth,
				decreaseMonth,
				increaseMonth,
				prevMonthButtonDisabled,
				nextMonthButtonDisabled,
			}) => (
				<div
					style={{
						margin: 10,
						display: 'flex',
						justifyContent: 'space-between',
					}}>
					<button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
						{'<'}
					</button>
					<div style={{ display: 'flex', gap: '12px' }}>
						<select
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
					<button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
						{'>'}
					</button>
				</div>
			)}
			selected={startDate}
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			onChange={(date) => setStartDate(date)}
		/>
	);
};
