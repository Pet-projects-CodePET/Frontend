'use client';

import React, { useState } from 'react';
import {
	IconPlus,
	IconMinus,
	IconMinusDisabled,
	IconPlusDisabled,
} from '@/shared/assets';
import styles from './counter.module.scss';

export const Counter = ({ disabled }: { disabled: boolean }) => {
	const [isNumber, SetIsNumber] = useState(1);
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
				<button className={styles.count} disabled={disabled}>
					{isNumber}
				</button>
			</div>
			<div className={styles.buttonWrapper}>
				<button
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
