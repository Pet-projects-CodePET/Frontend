import React from 'react';
import { ToggleCheck } from './types';
import clsx from 'clsx';
import styles from './toggle-checkbox.module.scss';
import { useFormContext } from 'react-hook-form';


export const ToggleCheckbox = ({
	id,
	name,
	variant,
	onChange,
	checked,
	disabled,
}: ToggleCheck) => {
	const getClassnameForType = (
		// {toggleCheckboxType, checked}
		toggleCheckboxType:
			| 'defaultOn'
			| 'defaultOf'
			| 'errorDefaultOn'
			| 'errorDefaultOf',
			// checked
	) => {
		switch (toggleCheckboxType) {
			case 'defaultOn':
				return clsx(
					styles.toggleCheckbox__defaultOn, 
					{
						[styles.toggleCheckbox__defaultOn_disabled]: !checked,
					}
					// {[styles.toggleCheckbox__defaultOn_disabled]: disabled,}
				);
			// case 'defaultOf':
			// 	return clsx(styles.toggleCheckbox__defaultOf, {
			// 		[styles.toggleCheckbox__defaultOf_disabled]: disabled,
			// 	});
			case 'errorDefaultOn':
				return styles.toggleCheckbox__errorDefaultOn;
			case 'errorDefaultOf':
				return styles.toggleCheckbox__errorDefaultOf;
			default:
				return '';
		}
	};

	const { register } = useFormContext();

	return (
		<label className={styles.toggleCheckbox} htmlFor={name}>
			<input
				className={styles.toggleCheckbox__input}
				{...register(name as string)}
				type="checkbox"
				id={id}
				name={name}
				checked={checked}
				onChange={(e) => onChange(e.target.checked)}
				disabled={disabled}
			/>
			<span className={getClassnameForType(variant)}></span>
		</label>
	);
};
