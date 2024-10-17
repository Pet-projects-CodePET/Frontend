/* eslint-disable camelcase */
import React, { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import parse from 'html-react-parser';
import { /*IconLeft,*/ ActivityIcon, CalendarIcon } from '@/shared/assets';
import { LikeButtonFeature } from '@/features';
import { Person, VacancyCard } from '@/shared/ui';
import { getColorTag } from '@/shared/utils';
import { NounsDeclension } from '@/utils/declension/declension';
import { ProjectCardDetailType } from './types';
import { getStartDate, getEndDate } from '@/shared/utils';
import styles from './project-card-detailed.module.scss';

export const ProjectCardDetailed: FC<ProjectCardDetailType> = ({
	idProject,
	name,
	description,
	directions,
	busyness,
	phone_number,
	link,
	owner,
	started,
	ended,
	status,
	project_specialists,
	unique_project_participants_skills,
	project_participants,
}) => {
	const startDate = getStartDate(started);
	const endDate = getEndDate(ended);

	return (
		<section className={styles.projectsCard}>
			<div className={styles.projectContainer}>
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
							{status === 'Активен' ? 'активный' : ' '}
							{status === 'Завершен' ? 'завершенный' : ' '}
						</div>
					</div>
					<div className={styles.like}>
						<LikeButtonFeature variant="secondary" />
					</div>
				</div>
				<div className={styles.calendarContainer}>
					<CalendarIcon className={styles.calendarIcon} />
					<div className={styles.date}>{`${startDate}-${endDate}`}</div>
				</div>

				<div className={styles.projectInfo}>
					<h2 className={styles.title}>{name}</h2>
					<div className={styles.subtitleWrapper}>
						<h3 className={styles.subtitle}>Описание проекта</h3>
						<p className={styles.description}>{parse(description)}</p>
					</div>
					<div className={styles.subtitleWrapper}>
						<h3 className={styles.subtitle}>Направление разработки</h3>
						{directions?.map((item) => {
							return (
								<p key={item.id} className={styles.description}>
									{item.name}
								</p>
							);
						})}
					</div>
					<div className={styles.subtitleWrapper}>
						<h3 className={styles.subtitle}>Занятость</h3>
						<p className={styles.description}>
							{busyness}
							{` ${NounsDeclension(busyness, ['час', 'часа', 'часов'])} в неделю`}
						</p>
					</div>
					<div className={styles.subtitleWrapper}>
						<h3 className={styles.subtitle}>Контакты</h3>
						<Link href="#" className={styles.descriptionLink}>
							{phone_number}
						</Link>
					</div>
					<div className={styles.subtitleWrapper}>
						<h3 className={styles.subtitle}>Ссылка на проект</h3>
						<Link
							href={`${link}`}
							target="_blank"
							className={styles.descriptionLink}>
							{link}
						</Link>
					</div>
					<div className={styles.subtitleWrapper}>
						<h3 className={styles.subtitle}>Организатор</h3>
						<div className={styles.personWrapper}>
							<Person
								title={owner?.name || owner?.username}
								avatar={owner?.avatar}
								id={owner?.id}
								visible_status={owner?.visible_status}
							/>
						</div>
					</div>
					<div className={styles.subtitleWrapper}>
						{project_participants?.length > 0 ? (
							<h3 className={styles.subtitle}>Команда проекта</h3>
						) : null}

						<ul className={styles.personList}>
							{project_participants?.map((person) => {
								return (
									<Person
										title={person.profession.specialization}
										color={getColorTag(person.profession.specialty)}
										key={person.id}
										id={person.user_id}
										avatar={person.avatar}
										visible_status={person.profession.visible_status}
									/>
								);
							})}
						</ul>
					</div>
					<div className={styles.subtitleWrapper}>
						{unique_project_participants_skills?.length > 0 ? (
							<h3 className={styles.subtitle}>Навыки команды</h3>
						) : null}

						<ul className={styles.tagsList}>
							{unique_project_participants_skills?.map((skill, index) => {
								return (
									<li key={index} className={styles.tag}>
										{skill}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div className={styles.cardsContainer}>
					{project_specialists?.length ? (
						<h2 className={styles.title}>Требуются в проект</h2>
					) : null}

					{project_specialists?.map((item) => {
						return (
							<VacancyCard
								name={name}
								key={item.id}
								title={`${item.profession.specialization} / ${item.profession.specialty} / ${item.level}`}
								skills={item.skills}
								count={item.count}
								projectId={idProject}
								specialists={item.profession}
								idSpecialty={item.id}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};
