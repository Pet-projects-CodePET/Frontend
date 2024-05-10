/* eslint-disable camelcase */
'use client';

import React from 'react';
import { FC } from 'react';
import Link from 'next/link';
import { CardProps } from './types';
import CalendarIcon from '@/shared/assets/icons/calender.svg';
import styles from './project-card.module.scss';
export const ProjectCard: FC<CardProps> = ({
	started,
	ended,
	name,
	directions,
	project_specialists,
}) => {
	
	return (
		<div className={styles.container}>
			<div className={styles.date}>
				<CalendarIcon width="24" height="24" />
				<p className={styles.datetext}>{`${started} - ${ended}`}</p>
			</div>
			<p className={styles.title}>{name}</p>
			<p className={styles.direction}>
				{directions && directions[0].name}
			</p>
			<ul className={styles.tags}>
				{project_specialists?.map((item) => {
					return (
						<li key={item.id} className={styles.tag}>
							{item.profession?.specialization}
						</li>
					);
				})}
			</ul>
			<Link href="#" className={styles.link}>
				Откликнуться
			</Link>
		</div>
	);
};
