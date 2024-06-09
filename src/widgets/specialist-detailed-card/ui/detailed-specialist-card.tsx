import { AvatarImage } from '@/entities/_avatar-image';
import { DetailedSpecialistCardTypes } from './types';
import styles from './detailed-specialist-card.module.scss';
import React, { FC } from 'react';
import { LikeButtonFeature } from '@/features';
import { MainButton } from '@/shared/ui';
import {
	ActivityIcon,
	MailIcon,
	MobileIcon,
	TelegramIcon,
} from '@/shared/assets';

export const DetailedSpecialistCard: FC<DetailedSpecialistCardTypes> = ({
	// So we have to create iur props based on the types types from the query
	// i should LOOK at the types and create smart, one in multy out properties with those who are objects/arrays
	// after i can pass to restrocture into the copilot
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
		<>
			<article className={styles.specialist}>
				<div className={styles.specialist__info}>
					<div className={styles.info__person}>
						<AvatarImage
							imageURL={avatar}
							size={'large'}
							className={styles.info__avatar}
						/>
						<div className={styles.info__personDescription}>
							<h2 className={styles.info__name}>{name}</h2>
							<p className={styles.info__nickname}>@{userName}</p>
							<p className={styles.info__role}>
								{specialists[0].profession.specialty},{' '}
								{specialists[0].profession.specialization}
							</p>
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
						<h3 className={styles.info__title}>Навыки</h3>
						<ul className={styles.info__skillsList}>
							{specialists[0]?.skills.map((skill, index) => {
								return (
									<p className={styles.info__skill} key={skill.id}>
										{skill.name}
										{index < specialists[0]?.skills.length - 1 && ', '}
									</p>
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
								<a className={styles.info__sideText} key={project.id}>
									{project.name}
								</a>
							))}
						</div>
						<MainButton variant="primary" width="regular">
							Пригласить в проект
						</MainButton>
					</div>
				</div>
			</article>
		</>
	);
};
