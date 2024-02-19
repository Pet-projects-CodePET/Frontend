import React, { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { ActivityIcon, CalendarIcon } from '@/shared/assets';

import { ProjectCardFullType } from './type';
import styles from './project-card-full.module.scss';

export const ProjectCardFull: FC<ProjectCardFullType> = ({
	professions,
	skills,
	isActiveProject,
}) => {
	return (
		<article className={styles.container}>
			<div className={styles.topInfo}>
				<div className={styles.calendarContainer}>
					<CalendarIcon className={styles.calendarIcon} />
					<div className={styles.calendarText}>15 сентября-22 августа</div>
				</div>
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
			</div>
			<h2 className={styles.title}>Название проекта</h2>
			<h3 className={styles.subtitle}>Мобильная разработка</h3>
			<p className={styles.mainText}>{` Lorem ipsum`.repeat(40)}</p>
			<div className={styles.professionIconsList}>
				{professions.map((profession, id) => (
					<button className={styles.professionIcon} key={id}>
						{profession}
					</button>
				))}
			</div>
			<div className={styles.skillsList}>
				{skills.map((skill, id) => (
					<p className={styles.skill} key={id}>
						{skill}
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
