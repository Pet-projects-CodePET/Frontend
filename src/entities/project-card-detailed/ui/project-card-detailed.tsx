import React from 'react';
import Link from 'next/link';
import { IconLeft, ActivityIcon, CalendarIcon } from '@/shared/assets';
import { LikeButtonFeature } from '@/features';
import styles from './project-card-detailed.module.scss';

export const ProjectCardDetailed = ({ id }: { id: string }) => {
	console.log(id);
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
						<ActivityIcon className={styles.activeStateIcon} />
						<div className={styles.activeStateText}>{'активный'}</div>
					</div>
					<div className={styles.like}>
						<LikeButtonFeature variant="secondary" />
					</div>
				</div>
				<div className={styles.calendarContainer}>
					<CalendarIcon className={styles.calendarIcon} />
					<div className={styles.date}>{'15 сентября-22 августа'}</div>
				</div>

				<div className={styles.projectInfo}>
				<h2 className={styles.title}>{'Название проекта'}</h2>
				<div className={styles.subtitleWrapper}>
					<h3 className={styles.subtitle}>{'Описание проекта'}</h3>
					<p className={styles.description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						vulputate libero et velit interdum, ac aliquet odio mattis. Class
						aptent taciti sociosqu ad litora torquent per conubia nostra, per
						inceptos himenaeos. Curabitur tempus urna at turpis condimentum
						lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
						Class aptent taciti sociosqu ad litora torquent per conubia nostra,
						per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
						lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
						Class aptent taciti sociosqu ad litora torquent per conubia nostra,
						per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
						lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
						Class aptent taciti sociosqu ad litora torquent per conubia nostra,
						per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
						lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
						Class aptent taciti sociosqu ad litora torquent per conubia nostra,
						per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
						lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
						Class aptent taciti sociosqu ad litora torquent per conubia nostra,
						per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
						lobortis.
					</p>
				</div>
				<div className={styles.subtitleWrapper}>
					<h3 className={styles.subtitle}>{'Направление разработки'}</h3>
					<p className={styles.description}>Мобильная разработка</p>
				</div>
				<div className={styles.subtitleWrapper}>
					<h3 className={styles.subtitle}>{'Занятость'}</h3>
					<p className={styles.description}>10 часов в неделю</p>
				</div>
				<div className={styles.subtitleWrapper}>
					<h3 className={styles.subtitle}>{'Контакты'}</h3>
					<Link
										href="#"
										target="_blank"
										className={styles.descriptionLink}>
										888888888
									</Link>
				</div>
				<div className={styles.subtitleWrapper}>
					<h3 className={styles.subtitle}>{'Ссылка на проект'}</h3>
					<Link
										href="#"
										target="_blank"
										className={styles.descriptionLink}>
										weblalla
									</Link>
				</div>
				</div>
			</div>
		</section>
	);
};
