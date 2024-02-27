import React from 'react';
import styles from './toggle-checkbox.module.scss';

export const ToggleCheckbox = () => {
	return (
		<label className={styles.toggleCheckbox}>
			<input
				className={styles.toggleCheckbox__input}
				type="checkbox"
			/>
			<span className={styles.toggleCheckbox__text}></span>
		</label>
	);
};
