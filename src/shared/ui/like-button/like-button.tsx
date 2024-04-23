'use client';
import React, { FC, useState } from 'react';
import type { LikeButtonProps } from './types';
import { HeartIcon, HeartIconActive } from '@/shared/assets';
import clsx from 'clsx';
import styles from './like-button.module.scss';

export const LikeButton: FC<LikeButtonProps> = ({ variant }) => {
	const [isActive, setIsActive] = useState(false);
	const handleActiveLikeButton = () => {
		setIsActive(!isActive);
        console.log('добавить в избранное');
	};
	const getClassnameForType = (
		buttonType: 'primary' | 'secondary' | 'trivial'
	) => {
		switch (buttonType) {
			case 'primary':
				return styles.buttonLikePrimary;
			case 'secondary':
				return clsx(styles.buttonLikeSecondary, {
					[styles.buttonLikeActive]: isActive,
				});
			case 'trivial':
				return styles.buttonLikeTrivial;
			default:
				return '';
		}
	};
	return (
		<button
			className={getClassnameForType(variant)}
			onClick={handleActiveLikeButton}>
			{isActive ? (
				<HeartIconActive className={styles.iconActive} />
			) : (
				<HeartIcon className={styles.icon} />
			)}
		</button>
	);
};
