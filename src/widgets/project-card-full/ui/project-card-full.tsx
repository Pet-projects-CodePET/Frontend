/* eslint-disable camelcase */
import React, { FC } from 'react';
import clsx from 'clsx';
 import {CalendarIcon, ActivityIcon } from '@/shared/assets'; // , 
//import { getClassNameforTag } from '@/shared/utils';
import { MainButton } from '@/shared/ui';
import { useMediaQuery } from '@/shared/hooks';
import { ProjectCardFullType } from './type';
import { LikeButtonFeature } from '@/features';
import { getColorTag, getStartDate, getEndDate } from '@/shared/utils';
import styles from './project-card-full.module.scss';

export const ProjectCardFull: FC<ProjectCardFullType> = ({
	description,
	started,
	ended,
	name,
	directions,
	status,
	recruitment_status,
	project_specialists,
}) => {
	const isMobile = useMediaQuery('(max-width:779px)');
	const startDate = getStartDate(started);
	const endDate = getEndDate(ended);

	return (
		<article className={styles.container}>
				<div className={styles.topInfo}>
					<div className={styles.activeStateContainer}>
						<ActivityIcon
							className={clsx(
								styles.activeStateIcon,
								status === 'Активен' && styles.activeStateIcon_type_active,
								status === 'Завершен' && styles.activeStateIcon_type_inactive
							)}
						/>
						<div className={styles.activeStateText}>
							{status === 'Активен' ? 'активный' : 'завершенный'}
						</div>
					</div>
					<div className={styles.like}>
						<LikeButtonFeature variant="secondary" />
					</div>
				</div>
				<div>
					<div className={styles.calendarContainer}>
						<CalendarIcon className={styles.calendarIcon} />
						<div className={styles.calendarText}>{`${startDate}-${endDate}`}</div>
					</div>
					<h2 className={styles.title}>{name}</h2>
					{directions?.map((item) => {
						return (
							<h3  key={item.id} className={styles.subtitle}>{item.name}</h3>

						);
					})}
					
					{!isMobile && <p className={styles.mainText}>{description}</p>}
					<p className={styles.groupName}>Специальности</p>
					<ul className={styles.professionsList}>
						{project_specialists?.map((item) => (
							<li
								className={styles.profession}
								style={{
									backgroundColor: `${getColorTag(item.profession.specialty)}`
								}}
								key={item.id}>
								{item.profession?.specialization}
							</li>
						))}
					</ul>
					<p className={styles.groupName}>Навыки</p>
					<ul className={styles.skillsList}>
						{project_specialists.map((item) => (
							item.skills.map((skill) => (
								<li className={styles.skill} key={item.id}>
								{skill.name}
							</li>

							))
							
						))}
					</ul>
				</div>
				
				{recruitment_status === "Набор открыт" && (
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
