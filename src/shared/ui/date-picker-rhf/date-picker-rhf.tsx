import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import locale from 'antd/es/date-picker/locale/ru_RU';
import 'dayjs/locale/ru';

import type { DatePickerRHFProps } from './types';
import styles from './date-picker-rhf.module.scss';

export const DatePickerRHF = (props: DatePickerRHFProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={props.name}
			rules={{
				required: 'Пожалуйста, заполните дату',
			}}
			render={({ field, fieldState }) => {
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
							ref={field.ref}
							name={field.name}
							onBlur={field.onBlur}
							format="DD/MM/YYYY"
							value={field.value ? dayjs(field.value) : ''}
							locale={locale}
							onChange={(date) => {
								field.onChange(date ? date.valueOf() : null);
							}}
						/>
						<br />
						{fieldState.error ? (
							<span className={styles.error}>{fieldState.error?.message}</span>
						) : null}
					</>
				);
			}}
		/>
	);
};
