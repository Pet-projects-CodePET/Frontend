import React, { FC } from 'react';
import styles from './avatar-image.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import type { AvatarImageType } from './types';

export const AvatarImage: FC<AvatarImageType> = ({ imageURL, size }) => {
	const avatarStyle = clsx(
		styles.base,
		size === 'small' && styles.base__small,
		size === 'large' && styles.base__large
	);

	return (
		<>
			<div className={`${avatarStyle}`}>
				<Image src={imageURL} width={500} height={500} alt="" />
			</div>
		</>
	);
};
