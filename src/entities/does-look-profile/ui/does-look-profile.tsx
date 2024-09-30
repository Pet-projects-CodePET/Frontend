import React, { FC } from 'react';
import Link from 'next/link';
import { TDoesLookProfile } from './types';
import styles from './does-look-profile.module.scss';

export const DoesLookProfile: FC<TDoesLookProfile> = ({ id }) => {
	return (
		<Link href={`/specialists/${id}`} className={styles.linkProfile}>
			Как видят мой профиль другие
		</Link>
	);
};
