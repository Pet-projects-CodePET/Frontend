import React from 'react';
import { TogglerProps } from './types';
import styles from './toggler.module.scss';
//import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

export const Toggler = ({ checked, name, id, onChange }: TogglerProps) => {
	const { register } = useFormContext();

	return (
		<label className={styles.toggleCheckbox}>
			<input
				className={styles.toggleCheckbox__input}
				{...register(name as string)}
				type="checkbox"
				checked={checked}
				name={name}
				id={id}
				onChange={(e) => {
					onChange(e.target.checked);
					// console.log(e.target.checked);
				}}
			/>
			<span className={styles.toggleCheckbox__default} />
		</label>
	);
};
