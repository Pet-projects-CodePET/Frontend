'use client';

import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import clsx from 'clsx';

import type { CheckboxAndRadioProps } from './types';
import styles from './checkbox.module.scss';

export const CheckboxAndRadio: FC<CheckboxAndRadioProps> = ({
	name,
	id,
	labelName,
	type,
	...props
}) => {
	const { register } = useFormContext();

	return (
		<div className={styles.checkboxContainer}>
			<input
				{...register(name)}
				className={styles.checkbox}
				id={id}
				type={type}
				{...props}
			/>
			<label
				className={clsx(styles.label, {
					[styles.label_type_checkbox]: type === 'checkbox',
					[styles.label_type_radio]: type === 'radio',
				})}
				htmlFor={id}>
				{labelName}
			</label>
		</div>
	);
};
