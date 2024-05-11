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
	const months = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря',
	];
	return (
		<div className={styles.container}>
			<div className={styles.date}>
				<CalendarIcon width="24" height="24" />
				<p className={styles.datetext}>
					{`${`${started?.slice(-2)} ${months[new Date(started).getMonth()]}`}
					-
					${`${ended?.slice(-2)} ${months[new Date(ended).getMonth()]}`}`}
				</p>
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
					const color = () => {
						if (item.profession?.specialty === 'Тестирование') {
							return '#F6BD60';
						} else if (item.profession?.specialty === 'Разработка') {
							return '#F28482';
						} else if (item.profession?.specialty === 'Дизайнер') {
							return '#B9F18C';
						} else if (item.profession?.specialty === 'Менеджмент') {
							return '#8CAAFF';
						} else if (item.profession?.specialty === 'Аналитика') {
							return '#CDB4DB';
						} else if (item.profession?.specialty === 'Администрирование') {
							return '#A2D2FF';
						}
					};

					return (
						<li
							key={item.id}
							className={styles.tag}
							style={{ backgroundColor: `${color()}` }}>
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
