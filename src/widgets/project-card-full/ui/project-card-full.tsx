import React, { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { ActivityIcon, CalendarIcon } from '@/shared/assets';
import { getClassNameforTag } from '@/shared/utils';
import  LikeIcon  from '@/shared/assets/icons/heart.svg';

import { ProjectCardFullType } from './type';
import styles from './project-card-full.module.scss';

export const ProjectCardFull: FC<ProjectCardFullType> = ({
	professions,
	skills,
	isActiveProject,
	description,
	duration,
	title,
	subtitle,
}) => {
	return (
		<article className={styles.container}>
			<div className={styles.topInfo}>
				<div className={styles.activeStateContainer}>
					<ActivityIcon
						className={clsx(
							styles.activeStateIcon,
							isActiveProject && styles.activeStateIcon_type_active,
							!isActiveProject && styles.activeStateIcon_type_inactive
						)}
					/>
					<div className={styles.activeStateText}>
						{isActiveProject ? 'активный' : 'неактивный'}
					</div>
				</div>
				<div className={styles.likeContainer}>
					<LikeIcon className={styles.likeIcon} />
				</div>
			</div>
			<div className={styles.calendarContainer}>
				<CalendarIcon className={styles.calendarIcon} />
				<div className={styles.calendarText}>{duration}</div>
			</div>
			<h2 className={styles.title}>{title}</h2>
			<h3 className={styles.subtitle}>{subtitle}</h3>
			<p className={styles.mainText}>{description}</p>
			<ul className={styles.professionsList}>
				{professions.map((profession, id) => (
					<li
						className={clsx(
							styles.profession,
							styles[getClassNameforTag(profession)],
							styles.profession_type_color
						)}
						key={id}>
						{profession}
					</li>
				))}
			</ul>
			<div className={styles.skillsList}>
				{skills.map((skill, id, arr) => (
					<p className={styles.skill} key={id}>
						{skill}
						{id !== arr.length - 1 && `,`}
					</p>
				))}
			</div>
			{isActiveProject && (
				<Link className={styles.link} href="/">
					Откликнуться
				</Link>
			)}
		</article>
	);
};
