import React, { FC } from 'react';
import clsx from 'clsx';
import { ActivityIcon, CalendarIcon } from '@/shared/assets';
import { getClassNameforTag } from '@/shared/utils';
import { MainButton } from '@/shared/ui';
import { useMediaQuery } from '@/shared/hooks';
import { ProjectCardFullType } from './type';
import { LikeButtonFeature } from '@/features';
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
	const isMobile = useMediaQuery('(max-width:779px)');

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
						{isActiveProject ? 'активный' : 'завершенный'}
					</div>
				</div>
				<div className={styles.like}>
					<LikeButtonFeature variant="secondary" />
				</div>
			</div>
			<div>
				<div className={styles.calendarContainer}>
					<CalendarIcon className={styles.calendarIcon} />
					<div className={styles.calendarText}>{duration}</div>
				</div>
				<h2 className={styles.title}>{title}</h2>
				<h3 className={styles.subtitle}>{subtitle}</h3>
				{!isMobile && <p className={styles.mainText}>{description}</p>}
				<p className={styles.groupName}>Специальности</p>
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
				<p className={styles.groupName}>Навыки</p>
				<ul className={styles.skillsList}>
					{skills.map((skill, id) => (
						<li className={styles.skill} key={id}>
							{skill}
						</li>
					))}
				</ul>
			</div>
			{isActiveProject && (
				<div className={styles.buttonRespond}>
					<MainButton
						variant="primary"
						width="regular"
						type="button"
						onClick={(evt) => evt.preventDefault()}>
						Откликнуться
					</MainButton>
				</div>
			)}
		</article>
	);
};
