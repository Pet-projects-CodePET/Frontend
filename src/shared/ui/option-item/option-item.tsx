'use client';
import React, { FC } from 'react';
import { OptionItemProps } from './type';
import styles from './option-item.module.scss';
import clsx from 'clsx';

export const OptionItem: FC<OptionItemProps> = ({
	option,
	selected,
	disabled,
	onChange,
}) => (
	<li
		className={clsx(styles.filterItem, disabled && styles.filterItemDisabled)}
		onClick={() => !disabled && onChange(option)}>
		<input
			className={styles.customCheckbox}
			type="checkbox"
			checked={selected}
			disabled={disabled}
			readOnly
		/>
		<label>{option.label}</label>
	</li>
);
