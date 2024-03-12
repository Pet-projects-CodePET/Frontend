'use client';

import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import type { CheckboxProps } from './types';
import styles from './radio-button.module.scss';

export const RadioButton: FC<CheckboxProps> = ({
	label,
	id,
	labelName,
	type,
	...props
}) => {
	const { register } = useFormContext();

	return (
		<div className={styles.checkboxContainer}>
			<input
				{...register(label)}
				className={styles.checkbox}
				// className={styles.radio}
				id={id}
				type={type}
				{...props}
			/>
			<label className={styles.label} htmlFor={id}>
				{labelName}
			</label>
		</div>
	);
};
