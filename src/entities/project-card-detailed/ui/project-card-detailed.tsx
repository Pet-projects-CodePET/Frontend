import React from 'react';
import Link from 'next/link';
import { IconLeft, ActivityIcon, CalendarIcon } from '@/shared/assets';
import { LikeButtonFeature } from '@/features';
import { Person, VacancyCard } from '@/shared/ui';
import styles from './project-card-detailed.module.scss';

export const ProjectCardDetailed = ({ id }: { id: string }) => {
	console.log(id);
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
						<h3 className={styles.subtitle}>Описание проекта</h3>
						<p className={styles.description}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
							vulputate libero et velit interdum, ac aliquet odio mattis. Class
							aptent taciti sociosqu ad litora torquent per conubia nostra, per
							inceptos himenaeos. Curabitur tempus urna at turpis condimentum
							lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
							Class aptent taciti sociosqu ad litora torquent per conubia
							nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
							condimentum lobortis. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Nunc vulputate libero et velit interdum, ac
							aliquet odio mattis. Class aptent taciti sociosqu ad litora
							torquent per conubia nostra, per inceptos himenaeos. Curabitur
							tempus urna at turpis condimentum lobortis. Lorem ipsum dolor sit
							amet, consectetur adipiscing elit. Nunc vulputate libero et velit
							interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
							litora torquent per conubia nostra, per inceptos himenaeos.
							Curabitur tempus urna at turpis condimentum lobortis. Lorem ipsum
							dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
							et velit interdum, ac aliquet odio mattis. Class aptent taciti
							sociosqu ad litora torquent per conubia nostra, per inceptos
							himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
							vulputate libero et velit interdum, ac aliquet odio mattis. Class
							aptent taciti sociosqu ad litora torquent per conubia nostra, per
							inceptos himenaeos. Curabitur tempus urna at turpis condimentum
							lobortis.
						</p>
					</div>
					<div className={styles.subtitleWrapper}>
						<h3 className={styles.subtitle}>Направление разработки</h3>
						<p className={styles.description}>Мобильная разработка</p>
					</div>
					<div className={styles.subtitleWrapper}>
						<h3 className={styles.subtitle}>Занятость</h3>
						<p className={styles.description}>10 часов в неделю</p>
					</div>
					<div className={styles.subtitleWrapper}>
						<h3 className={styles.subtitle}>Контакты</h3>
						<Link href="#" target="_blank" className={styles.descriptionLink}>
							888888888
						</Link>
					</div>
					<div className={styles.subtitleWrapper}>
						<h3 className={styles.subtitle}>Ссылка на проект</h3>
						<Link href="#" target="_blank" className={styles.descriptionLink}>
							weblalla
						</Link>
					</div>
					<div className={styles.subtitleWrapper}>
						<h3 className={styles.subtitle}>Организатор</h3>
						<div className={styles.personWrapper}>
							<Person title="Oрганизатор" link=" " color='#F6BD60'/>
						</div>
					</div>
					<div className={styles.subtitleWrapper}>
						<h3 className={styles.subtitle}>Команда проекта</h3>
						<ul className={styles.personList}>
							<Person
								title="Oрганизатор"
								link=" "
								color="#A2D2FF"
							/>
							<Person
								title="Oрганизатор"
								color="#8CAAFF"
								link=" "
							/>
							<Person title="Oрганизатор" color="#CDB4DB" />
							<Person title="Oрганизатор" color="#F28482" />
							<Person title="Oрганизатор" color="#B9F18C" />
							<Person title="Организатор" color="#CDB4DB" />
							<Person title="Организатор" color="#A2D2FF" />
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
					<VacancyCard/>
					<VacancyCard/>
					<VacancyCard/>
				</div>
			</div>
		</section>
	);
};
