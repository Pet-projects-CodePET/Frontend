import React from 'react';
// import { clsx } from 'clsx';

import styles from './toggle-checkbox.module.scss';
type ToggleCheck = {
	id?: string;
	name?: string;
	variant:  'defaultOn' | 'defaultOf' | 'disabledOn' | 'disabledOf' | 'errorDefaultOn' | 'errorDefaultOF',
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
		toggleCheckboxType: 'defaultOn' | 'defaultOf' | 'disabledOn' | 'disabledOf' | 'errorDefaultOn' | 'errorDefaultOF'
	) => {
		switch (toggleCheckboxType) {
			case 'defaultOn':
				return styles.toggleCheckbox__defaultOn;
			case 'defaultOf':
				return styles.toggleCheckbox__defaultOf;
			case 'disabledOn':
				return styles.toggleCheckbox__disabledOn;
			case 'disabledOf':
				return styles.toggleCheckbox__disabledOf;
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
			<span
				className={getClassnameForType(variant)}></span>
		</label>
	);
};
