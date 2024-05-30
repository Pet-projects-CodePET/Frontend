import React, { FC } from 'react';
import styles from './avatar-image.module.scss';
import Image from 'next/image';

// import clsx from 'clsx';

import type { AvatarImageType } from './types';
import { generateClassName } from '@/shared/utils/width-variant-function/width-variant-function';

export const AvatarImage: FC<AvatarImageType> = ({ imageURL, size }) => {
	const baseStyle = generateClassName(styles.base, size);

	return (
		<>
			<div className={`${baseStyle}`}>
				<Image src={imageURL} width={500} height={500} alt="" />
			</div>
		</>
	);
};
// const className = clsx(
// 	styles.base, // Add your base class here
// 	{
// 		[styles.base__small]: size === 'small',
// 		[styles.base__medium]: size === 'medium',
// 		[styles.base__large]: size === 'large',
// 	}
// );
