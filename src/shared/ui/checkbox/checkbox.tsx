'use client';

import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import type { CheckboxProps } from './types';
import styles from './checkbox.module.scss';

export const Checkbox: FC<CheckboxProps> = ({
	label,
	id,
	labelName,
	...props
}) => {
	const { register } = useFormContext();

	return (
		<div className={styles.checkboxContainer}>
			<input
				{...register(label)}
				className={styles.checkbox}
				id={id}
        {...props}
			/>
			<label className={styles.label} htmlFor={id}>
				{labelName}
			</label>
		</div>
	);
};
