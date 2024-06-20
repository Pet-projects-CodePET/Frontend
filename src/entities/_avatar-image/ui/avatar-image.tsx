import React, { FC } from 'react';
import styles from './avatar-image.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import type { AvatarImageType } from './types';

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

	return (
		<>
			{/* for className property if you want to do some modification like gapping, use margin 
			instead of padding, or it will warp the size */}
			<div className={`${avatarStyle} ${className}`}>
				<Image src={imageURL} width={148} height={148} alt="" />
			</div>
		</>
	);
};
