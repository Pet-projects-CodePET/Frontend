'use client';

import React, { useState } from 'react';
import { IconPlus } from '@/shared/assets';
import { IconMinus } from '@/shared/assets';
import styles from './counter.module.scss';

export const Counter = () => {
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
				<button className={styles.button} onClick={decrement}>
					<IconMinus className={styles.icon} />
				</button>
			</div>
			<span className={styles.count}>{isNumber}</span>
			<div className={styles.buttonWrapper}>
				<button className={styles.button} onClick={increment}>
					<IconPlus className={styles.icon} />
				</button>
			</div>
		</div>
	);
};
