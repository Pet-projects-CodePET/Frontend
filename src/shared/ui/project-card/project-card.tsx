'use client';

import React from 'react';
import { FC } from 'react';
import Link from 'next/link';
import CalendarIcon from '@/shared/assets/icons/calender.svg';
import styles from './project-card.module.scss';

export const ProjectCard: FC<ICard> = ({
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
			<ul className={styles.tags}>
				{tags.map((item, index, arr) => {
					const { text, color } = item;
					if (index < 2) {
						// TODO: key поменять на ID, приходящий с бэка
						return (
							<li
								key={index}
								className={styles.tag}
								style={{ backgroundColor: color }}>
								{text}
							</li>
						);
					}
					if (arr.length - 1 === index) {
						return (
							<li key={index} className={styles.more}>
								+{arr.length - 2}
							</li>
						);
					}
				})}
			</ul>
			<Link href={link} className={styles.link}>
				Откликнуться
			</Link>
		</div>
	);
};
