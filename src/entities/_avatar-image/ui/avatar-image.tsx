import React, { FC } from 'react';
import styles from './avatar-image.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import type { AvatarImageType } from './types';
import { Loader } from '@/shared/ui';

export const AvatarImage: FC<AvatarImageType> = ({
	imageURL,
	size,
	className,
}) => {
	const avatarStyle = clsx(
		styles.base,
		size === 'small' && styles.base__small,
		size === 'large' && styles.base__large
	);

	const num = (): number => {
		let sizeNumber: number;
		switch (size) {
			case 'small':
				sizeNumber = 38;
				break;
			case 'large':
				sizeNumber = 138;
				break;
			default:
				sizeNumber = 88;
		}
		return sizeNumber;
	};

	return (
		<>
			{/* for className property if you want to do some modification like gapping, use margin 
			instead of padding, or it will warp the size */}
			<div className={`${avatarStyle} ${className}`}>
				{imageURL ? (
					<div className={styles.loader}>
						<Loader />
					</div>
				) : (
					<Image src={imageURL} width={num()} height={num()} alt="" />
				)}
			</div>
		</>
	);
};
