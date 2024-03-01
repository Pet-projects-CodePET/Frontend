import React from 'react';
import styles from './toggle-checkbox.module.scss';
import clsx from 'clsx';

type ToggleCheck = {
	id?: string;
	name?: string;
	variant:
		| 'defaultOn'
		| 'defaultOf'
		| 'errorDefaultOn'
		| 'errorDefaultOF';
	checked?: boolean;
	onChange: (checked: boolean) => void;
	disabled?: boolean;
};

export const ToggleCheckbox = ({
	id,
	name,
	variant,
	onChange,
	checked,
	disabled,
}: ToggleCheck) => {
	const getClassnameForType = (
		toggleCheckboxType:
			| 'defaultOn'
			| 'defaultOf'
			| 'errorDefaultOn'
			| 'errorDefaultOF'
	) => {
		switch (toggleCheckboxType) {
			case 'defaultOn':
				return clsx(styles.toggleCheckbox__defaultOn, {
					[styles.toggleCheckbox__defaultOn_disabled]: disabled,
				});
			case 'defaultOf':
				return styles.toggleCheckbox__defaultOf;
			case 'errorDefaultOn':
				return styles.toggleCheckbox__errorDefaultOn;
			case 'errorDefaultOF':
				return styles.toggleCheckbox__errorDefaultOf;
			default:
				return '';
		}
	};

	return (
		<label className={styles.toggleCheckbox} htmlFor={name}>
			<input
				className={styles.toggleCheckbox__input}
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
