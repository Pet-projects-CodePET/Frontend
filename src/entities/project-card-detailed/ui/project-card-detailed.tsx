/* eslint-disable camelcase */
import React, { FC } from 'react';
import Link from 'next/link';
import { IconLeft, ActivityIcon, CalendarIcon } from '@/shared/assets';
import { LikeButtonFeature } from '@/features';
import { Person, VacancyCard } from '@/shared/ui';
import { getColorTag } from '@/shared/utils';
import { projectTeamArray } from '@/shared/constants';
import { NounsDeclension } from '@/utils/declension/declension';
import { ProjectCardDetailType } from './type';
import { getStartDate, getEndDate } from '@/shared/utils';
import clsx from 'clsx';
import styles from './project-card-detailed.module.scss';

export const ProjectCardDetailed: FC<ProjectCardDetailType> = ({
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
}) => {
	const startDate = getStartDate(started);
	const endDate = getEndDate(ended);

	const skills = [
		{ id: 1, name: 'React' },
		{ id: 2, name: 'Redux' },
		{ id: 3, name: 'UI/UX Design' },
		{ id: 4, name: 'React' },
		{ id: 5, name: 'Redux' },
		{ id: 6, name: 'UI/UX Design' },
		{ id: 7, name: 'React' },
		{ id: 8, name: 'Redux' },
		{ id: 9, name: 'UI/UX Design' },
		{ id: 10, name: 'React' },
		{ id: 11, name: 'Redux' },
		{ id: 12, name: 'UI/UX Design' },
		{ id: 13, name: 'Redux' },
		{ id: 14, name: 'UI/UX Design' },
		{ id: 15, name: 'React' },
	];
	return (
		<section className={styles.projectsCard}>
			<div className={styles.link}>
				<IconLeft className={styles.icon} />
				<Link className={styles.linkProjects} href="/projects">
					Проекты
				</Link>
			</div>
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
							{status === 'Активен' ? 'активный' : 'завершенный'}
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
						<p className={styles.description}>{description}</p>
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
						<Link href="#" target="_blank" className={styles.descriptionLink}>
							{phone_number}
						</Link>
					</div>
					<div className={styles.subtitleWrapper}>
						<h3 className={styles.subtitle}>Ссылка на проект</h3>
						<Link href="" target="_blank" className={styles.descriptionLink}>
							{link}
						</Link>
					</div>
					<div className={styles.subtitleWrapper}>
						<h3 className={styles.subtitle}>Организатор</h3>
						<div className={styles.personWrapper}>
							<Person title={owner} color="#F6BD60" />
						</div>
					</div>
					<div className={styles.subtitleWrapper}>
						<h3 className={styles.subtitle}>Команда проекта</h3>
						<ul className={styles.personList}>
							{projectTeamArray.map((person) => {
								return (
									<Person
										title={person.profession.specialization}
										color={getColorTag(person.profession.specialty)}
										key={person.id}
									/>
								);
							})}
						</ul>
					</div>
					<div className={styles.subtitleWrapper}>
						<h3 className={styles.subtitle}>Навыки команды</h3>
						<ul className={styles.tagsList}>
							{skills.map((item) => {
								return (
									<li key={item.id} className={styles.tag}>
										{item.name}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div className={styles.cardsContainer}>
					<h2 className={styles.title}>Требуются в проект</h2>
					<VacancyCard
						title="UI/UX дизайнер / UI/UX Designer, Junior"
						skills={skills}
					/>
					<VacancyCard
						title="Инженер по ручному тестированию / Manual Test Engineer, Инженер по нагрузочному тестированию / Performance Engineer"
						skills={skills}
					/>
					<VacancyCard
						title="UI/UX дизайнер / UI/UX Designer, Junior"
						skills={skills}
					/>
					<VacancyCard
						title="UI/UX дизайнер / UI/UX Designer, Junior"
						skills={skills}
					/>
				</div>
			</div>
		</section>
	);
};
