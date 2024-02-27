import React from 'react';
import { Controller } from 'react-hook-form';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import type { DatePickerRHFProps } from './types';
import styles from './date-picker-rhf.module.scss';

export const DatePickerRHF = (props: DatePickerRHFProps) => {
	return (
		<Controller
			control={props.control}
			name={props.name}
			rules={{
				required: 'This field is required',
			}}
			render={({ field, fieldState }) => {
				return (
					<>
						<DatePicker
							{...field}
							className={styles.datePicker}
							style={{ borderRadius: '12px' }}
							placeholder=""
							status={fieldState.error ? 'error' : undefined}
							ref={field.ref}
							name={field.name}
							onBlur={field.onBlur}
							format="DD/MM/YYYY"
							value={field.value ? dayjs(field.value) : ''}
							onChange={(date) => {
								field.onChange(date ? date.valueOf() : null);
							}}
						/>
						<br />
						{fieldState.error ? (
							<span style={{ color: 'red' }}>{fieldState.error?.message}</span>
						) : null}
					</>
				);
			}}
		/>
	);
};
