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
	const startDate = `${started?.slice(-2)} ${months[new Date(started).getMonth()]}`;
	const endDate = `${ended?.slice(-2)} ${months[new Date(ended).getMonth()]}`;
	return (
		<div className={styles.container}>
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
					const color = () => {
						switch (item.profession?.specialty) {
							case 'Тестирование':
								return '#F6BD60';
							case 'Разработка':
								return '#F28482';
							case 'Дизайнер':
								return '#B9F18C';
							case 'Менеджмент':
								return '#8CAAFF';
							case 'Аналитика':
								return '#CDB4DB';
							case 'Администрирование':
								return '#A2D2FF';
							default:
								return '';
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
