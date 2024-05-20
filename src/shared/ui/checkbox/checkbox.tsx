'use client';

import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import clsx from 'clsx';

import type { CheckboxAndRadioProps } from './types';
import styles from './checkbox.module.scss';

// eslint-disable-next-line react/display-name
export const CheckboxAndRadio: FC<CheckboxAndRadioProps> = React.forwardRef<HTMLDivElement, CheckboxAndRadioProps> (({
	label,
	id,
	labelName,
	type,
	...props
}, ref) => {

	const { register } = useFormContext();

	return (
		<div className={styles.checkboxContainer} ref={ref}>
			<input
				{...register(label)}
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
});
