'use client';

import React, { useState } from 'react';
import {
	IconPlus,
	IconMinus,
	IconMinusDisabled,
	IconPlusDisabled,
} from '@/shared/assets';
import styles from './counter.module.scss';
import { Input } from '../input/input';
import clsx from 'clsx';

export const Counter = ({
	id,
	disabled,
}: {
	id: number;
	disabled: boolean;
}) => {
	const [isNumber, SetIsNumber] = useState(1);
	console.log(id);
	const increment = () => {
		if (isNumber <= 14) {
			SetIsNumber(isNumber + 1);
		}
	};
	const decrement = () => {
		if (!isNumber) {
			return;
		}
		SetIsNumber(isNumber - 1 || 1);
	};

	return (
		<div className={styles.container}>
			<div className={styles.buttonWrapper}>
				<button
					type="button"
					className={styles.button}
					onClick={decrement}
					disabled={disabled}>
					{disabled ? (
						<IconMinusDisabled className={styles.icon} />
					) : (
						<IconMinus className={styles.icon} />
					)}
				</button>
			</div>
			<div className={styles.buttonWrapper}>
				<Input
					name={`counter`}
					labelName=""
					className={clsx(styles.dismiss, styles.count)}
					value={'isNumber'}
					disabled={true}
				/>
			</div>
			<div className={styles.buttonWrapper}>
				<button
					type="button"
					className={styles.button}
					onClick={increment}
					disabled={disabled}>
					{disabled ? (
						<IconPlusDisabled className={styles.icon} />
					) : (
						<IconPlus className={styles.icon} />
					)}
				</button>
			</div>
		</div>
	);
};
