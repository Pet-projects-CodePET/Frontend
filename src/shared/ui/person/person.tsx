'use client';
import React from 'react';
import { PersonIcon } from '@/shared/assets';
import styles from './person.module.scss';

export const Person = ({
	title,
	avatar,
	color,
}: {
	title: string;
	avatar?: string;
	color?: string;
}) => {
	return (
		<div className={styles.container}>
			{avatar ? (
				<div
					className={styles.iconLink}
					style={{ backgroundImage: `url(${avatar})` }}></div>
			) : (
				<PersonIcon className={styles.icon} />
			)}

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
