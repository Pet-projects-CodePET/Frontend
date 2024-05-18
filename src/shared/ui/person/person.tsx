'use client';
import React from 'react';
import { PersonIcon } from '@/shared/assets';
import styles from './person.module.scss';

export const Person = ({
	title,
	link,
	color,
}: {
	title: string;
	link?: string;
	color?: string;
}) => {
	return (
		<div className={styles.container}>
			{link ? (
				<div
					className={styles.iconLink}
					style={{ backgroundImage: `url(${link})` }}></div>
			) : (
				<PersonIcon className={styles.icon} />
			)}

			<p className={styles.tag} style={{ backgroundColor: `${color}` }}>
				{title}
			</p>
		</div>
	);
};
