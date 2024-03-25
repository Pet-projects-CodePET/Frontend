'use client';

import React from 'react';
import { FC } from 'react';
import Link from 'next/link';
import { CardProps } from './types';
import CalendarIcon from '@/shared/assets/icons/calender.svg';
import styles from './project-card.module.scss';
import { Tags } from '../tags/tags';

export const ProjectCard: FC<CardProps> = ({
	date,
	title,
	direction,
	tags,
	link,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.date}>
				<CalendarIcon width="24" height="24" />
				<p className={styles.datetext}>{date}</p>
			</div>
			<p className={styles.title}>{title}</p>
			<p className={styles.direction}>{direction}</p>
			<Tags tags={tags} />
			<Link href={link} className={styles.link}>
				Откликнуться
			</Link>
		</div>
	);
};
