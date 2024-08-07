/* eslint-disable camelcase */
'use client';

import React from 'react';
import { FC } from 'react';
import Link from 'next/link';
import { CardProps } from './types';
import CalendarIcon from '@/shared/assets/icons/calender.svg';
import { getColorTag, getStartDate, getEndDate } from '@/shared/utils';
import { MainButton } from '../main-button/main-button';
import styles from './project-card.module.scss';

export const ProjectCard: FC<CardProps> = ({
	started,
	ended,
	name,
	directions,
	project_specialists,
	id
}) => {
	const startDate = getStartDate(started);
	const endDate = getEndDate(ended);
	return (
		<div className={styles.container}>
			<Link href={`projects/${id}`} /*target="_blank"*/ className={styles.linkProject}>
			<div className={styles.date}>
				<CalendarIcon width="24" height="24" />
				<p className={styles.datetext}>{`${startDate}-${endDate}`}</p>
			</div>
			<p className={styles.title}>{name}</p>
			{directions?.map((item) => {
				return (
					<p key={item.id} className={styles.direction}>
						{item.name}
					</p>
				);
			})}
			<ul className={styles.tags}>
				{project_specialists?.map((item) => {
					return (
						<li
							key={item.id}
							className={styles.tag}
							style={{
								backgroundColor: `${getColorTag(item.profession.specialty)}`,
							}}>
							{item.profession?.specialization}
						</li>
					);
				})}
			</ul>
{/* 
			<Link href="#" className={styles.link}>
				Откликнуться
			</Link> */}
			<MainButton variant='trivial' width='min'
			onClick={(evt) => evt.preventDefault()}>
				Откликнуться
			</MainButton>
			</Link>
		</div>
	);
};
