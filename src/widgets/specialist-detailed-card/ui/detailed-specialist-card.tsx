import { AvatarImage } from '@/entities/_avatar-image';
import { DetailedSpecialistCardTypes } from './types';
import styles from './detailed-specialist-card.module.scss';
import React, { FC } from 'react';
import { LikeButtonFeature } from '@/features';
import {
	ActivityIcon,
	MailIcon,
	MobileIcon,
	TelegramIcon,
} from '@/shared/assets';
import clsx from 'clsx';
import { InviteSpecialist } from '@/widgets/invite-specialist';

export const DetailedSpecialistCard: FC<DetailedSpecialistCardTypes> = ({
	avatar,
	userName,
	name,
	readyToParticipate,
	specialists,
	about,
	portfolioLink,
	birthday,
	country,
	city,
	phoneNumber,
	telegramNick,
	email,
	projects,
}) => {
	return (
		<article className={styles.specialist}>
			<div className={styles.specialist__info}>
				<div className={styles.info__person}>
					<AvatarImage
						imageURL={avatar}
						size="large"
						className={styles.info__avatar}
					/>
					<div className={styles.info__personDescription}>
						<h2 className={styles.info__name}>{name}</h2>
						<p className={styles.info__nickname}>@{userName}</p>
						<div className={styles.info__role}>
							<div>{specialists[0].profession.specialization},</div>
							<div>{specialists[0].profession.specialty},</div>
							<div>
								{clsx(
									specialists[0].level === 1 && 'Junior',
									specialists[0].level === 2 && 'Middle',
									specialists[0].level === 3 && 'Senior',
									specialists[0].level === 4 && 'Lead'
								)}
							</div>
						</div>
						<div className={styles.info__personStatus}>
							{readyToParticipate ? (
								<>
									<ActivityIcon />
									<p className={styles.info__statusTitle}>
										не готов(а) к участию в проекте
									</p>
								</>
							) : (
								<>
									<ActivityIcon />
									<p className={styles.info__statusTitle}>
										готов(а) к участию в проекте
									</p>
								</>
							)}
						</div>
					</div>
					<div className={styles.info__likeContainer}>
						<LikeButtonFeature variant="secondary" />
					</div>
				</div>

				<div className={styles.specialist__info}>
					<div className={styles.info__role__small}>
						<div>{specialists[0].profession.specialization},</div>
						<div>{specialists[0].profession.specialty},</div>
						<div>
							{clsx(
								specialists[0].level === 1 && 'Junior',
								specialists[0].level === 2 && 'Middle',
								specialists[0].level === 3 && 'Senior',
								specialists[0].level === 4 && 'Lead'
							)}
						</div>
					</div>

					<div className={styles.info__personStatus__small}>
							{readyToParticipate ? (
								<>
									<ActivityIcon />
									<p className={styles.info__statusTitle}>
										не готов(а) к участию в проекте
									</p>
								</>
							) : (
								<>
									<ActivityIcon />
									<p className={styles.info__statusTitle}>
										готов(а) к участию в проекте
									</p>
								</>
							)}
						</div>
					<h3 className={styles.info__title}>Навыки</h3>
					<ul className={styles.info__skillsList}>
						{specialists[0]?.skills.map((skill, index) => {
							return (
								<li className={styles.info__skill} key={skill.id}>
									{skill.name}
									{index < specialists[0]?.skills.length - 1 && ', '}
								</li>
							);
						})}
					</ul>
					<div className={styles.info__wrapper}>
						<h3 className={styles.info__title}>О себе</h3>
						<p className={styles.info__sideText}>{about}</p>
					</div>
					<div className={styles.info__wrapper}>
						<h3 className={styles.info__title}>Ссылка на портфолио</h3>
						<a className={styles.info__contacts} href={portfolioLink}>
							behance
						</a>
					</div>
					<div className={styles.info__wrapper}>
						<h3 className={styles.info__title}>Контакты для связи</h3>
						<div className={styles.info__sideText}>
							<a
								className={styles.info__contacts}
								href={`https://mailto:${email}`}>
								<MailIcon className={styles.info__icons} />
								{email}
							</a>
							<a className={styles.info__contacts} href={phoneNumber}>
								<MobileIcon className={styles.info__icons} />
								{phoneNumber}
							</a>
							<a
								className={styles.info__contacts}
								href={`https://t.me/${telegramNick}`}>
								<TelegramIcon className={styles.info__icons} />

								{telegramNick}
							</a>
						</div>
					</div>
					<div className={styles.info__wrapper}>
						<h3 className={styles.info__title}>Дата рождения</h3>
						<p className={styles.info__sideText}>{birthday}</p>
					</div>
					<div className={styles.info__wrapper}>
						<h3 className={styles.info__title}>Регион</h3>
						{country && city ? (
							<p className={styles.info__sideText}>
								{city} {country}
							</p>
						) : (
							<p className={styles.info__sideText}>Неизвестно</p>
						)}
					</div>
					<div className={styles.info__wrapper}>
						<h3 className={styles.info__title}>Проекты</h3>
						{projects.map((project) => (
							<a
								href={project.name}
								className={styles.info__contacts}
								key={project.id}>
								{project.name}
							</a>
						))}
					</div>
					<InviteSpecialist />
				</div>
			</div>
		</article>
	);
};
