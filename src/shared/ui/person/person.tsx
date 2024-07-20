'use client';
import React, {FC} from 'react';
import { PersonIcon } from '@/shared/assets';
import Link from 'next/link';
import { PersonType } from './type';
import styles from './person.module.scss';

export const Person: FC<PersonType> = ({
	title,
	avatar,
	color,
	id,
}) => {
	const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
	return (
		<div className={styles.container}>
			<Link className={styles.link} href={`/specialists/${id}`}>
			{avatar ? (
				<div
					className={styles.iconLink}
					style={{ backgroundImage: `url('https://${BASE_URL}${avatar}')` }}></div>
			) : (
				<PersonIcon className={styles.icon} />
			)}
			</Link>

			<p
				className={styles.tag}
				style={
					color
						? { backgroundColor: `${color}` }
						: { border: '1px solid #e2e8f0' }
				}>
				{title}
			</p>
		</div>
	);
};
