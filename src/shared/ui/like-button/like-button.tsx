'use client';
import React, { FC } from 'react';
import type { LikeButtonProps } from './types';
import { HeartIcon, HeartIconActive } from '@/shared/assets';
import clsx from 'clsx';
import styles from './like-button.module.scss';

export const LikeButton: FC<LikeButtonProps> = ({
	variant,
	disabled,
	isActive,
	handleActiveLikeButton,
}) => {
	const getClassnameForTypeLikeButton = (
		buttonType: 'primary' | 'secondary' | 'trivial'
	) => {
		switch (buttonType) {
			case 'primary':
				return clsx(styles.buttonLikePrimary, {
					[styles.buttonLikeActive]: isActive,
				});
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

	const getClassnameForTypeHeartIcon = (
		buttonType: 'primary' | 'secondary' | 'trivial'
	) => {
		switch (buttonType) {
			case 'primary':
				return clsx(styles.iconHeartPrimary, {
					[styles.iconHeartPrimaryDisabled]: disabled,
				});
			case 'secondary':
				return clsx(styles.iconHeartSecondary, {
					[styles.iconHeartSecondaryDisabled]: disabled,
				});
			case 'trivial':
				return styles.iconHeartTrivial;
			default:
				return '';
		}
	};

	return (
		<button
		    type='button'
			disabled={disabled}
			className={getClassnameForTypeLikeButton(variant)}
			onClick={handleActiveLikeButton}>
			{isActive ? (
				<HeartIconActive className={styles.iconActive} />
			) : (
				<HeartIcon className={getClassnameForTypeHeartIcon(variant)} />
			)}
		</button>
	);
};
