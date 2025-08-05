import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import locale from 'antd/es/date-picker/locale/ru_RU';
import 'dayjs/locale/ru';

import type { DatePickerRHFProps } from './types';
import styles from './date-picker-rhf.module.scss';

export const DatePickerRHF = (props: DatePickerRHFProps) => {
	const { control, trigger } = useFormContext();

	return (
		<Controller
			control={control}
			name={props.name}
			render={({ field, fieldState }) => {
				const getDayjsValue = () => {
					if (!field.value) return null;
					if (dayjs.isDayjs(field.value)) return field.value;
					return dayjs(field.value, 'YYYY-MM-DD');
				};

				return (
					<>
						<DatePicker
							{...field}
							className={styles.datePicker}
							style={{
								borderRadius: '12px',
								borderColor: fieldState.error && '#E75757',
							}}
							placeholder=""
							status={fieldState.error ? 'error' : undefined}
							format="DD/MM/YYYY"
							value={getDayjsValue()}
							locale={locale}
							onChange={(date) => {
								const dateStr = date ? date.format('YYYY-MM-DD') : '';
								field.onChange(dateStr);
								if (props.name === 'started') trigger('ended');
								if (props.name === 'ended') trigger('started');
							}}
							onBlur={() => {
								field.onBlur();
								trigger(props.name);
							}}
						/>
						{fieldState.error && (
							<span className={styles.error}>{fieldState.error.message}</span>
						)}
					</>
				);
			}}
		/>
	);
};
