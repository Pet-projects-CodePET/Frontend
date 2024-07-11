import { AvatarImage } from '@/entities/_avatar-image';
import { DetailedSpecialistCardTypes } from './types';
import styles from './detailed-specialist-card.module.scss';
import React, { FC } from 'react';
import { LikeButtonFeature } from '@/features';
import {
	ActivityIcon,
	ActivityIconRed,
	MailIcon,
	MobileIcon,
	TelegramIcon,
} from '@/shared/assets';
import clsx from 'clsx';
import { InviteSpecialist } from '@/widgets/invite-specialist';
import { BlankCard } from '@/shared/ui';

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
		<BlankCard>
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
						<div className={styles.info__personStatus}>
							{readyToParticipate ? (
								<>
									<ActivityIcon />
									<p className={styles.info__statusTitle}>
										готов(а) к участию в проекте
									</p>
								</>
							) : (
								<>
									<ActivityIconRed />
									<p className={styles.info__statusTitle}>
										не готов(а) к участию в проекте
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
					<div className={styles.info__wrapper}>
						<h3 className={styles.info__title}>О себе</h3>
						<p className={styles.info__sideText}>{about}</p>
					</div>
					<div className={styles.info__title}>
						<div>
							{specialists[0] &&
								`${specialists[0].profession.specialization} \t`}
							{specialists[0] && `${specialists[0].profession.specialty},`}
							{clsx(
								specialists[0] && specialists[0].level === 1 && '\t Junior',
								specialists[0] && specialists[0].level === 2 && '\t Middle',
								specialists[0] && specialists[0].level === 3 && '\t Senior',
								specialists[0] && specialists[0].level === 4 && '\t Lead'
							)}
						</div>
					</div>
						<ul className={styles.info__skillsList}>
							{specialists[0]?.skills.map((skill) => {
								return (
									<li className={styles.info__skill} key={skill.id}>
										{skill.name}
									</li>
								);
							})}
						</ul>
					<div className={styles.info__title}>
						<div>
							{specialists[1] &&
								`${specialists[1].profession.specialization} \t`}
							{specialists[1] && `${specialists[1].profession.specialty},`}
							{clsx(
								specialists[1] && specialists[1].level === 1 && '\t Junior',
								specialists[1] && specialists[1].level === 2 && '\t Middle',
								specialists[1] && specialists[1].level === 3 && '\t Senior',
								specialists[1] && specialists[1].level === 4 && '\t Lead'
							)}
						</div>
					</div>
					<ul className={styles.info__skillsList}>
									{specialists[1]?.skills.map((skill) => {
										return (
											<li className={styles.info__skill} key={skill.id}>
												{skill.name}
											</li>
										);
									})}
								</ul>
					<div className={styles.info__wrapper}>
						<h3 className={styles.info__title}>Ссылка на портфолио</h3>
						<a className={styles.info__contacts} href={portfolioLink}>
							{portfolioLink}
						</a>
					</div>
					<div className={styles.info__wrapper}>
						<h3 className={styles.info__title}>Контакты для связи</h3>
						<div className={styles.info__sideText}>
							<div className={styles.info__contacs__wrapper}>
								<MailIcon className={styles.info__icons} />
								<a
									className={styles.info__contacts}
									href={`https://mailto:${email}`}>
									{email}
								</a>
							</div>
							<div className={styles.info__contacs__wrapper}>
								<MobileIcon className={styles.info__icons} />

								<a className={styles.info__contacts} href={phoneNumber}>
									{phoneNumber}
								</a>
							</div>

							<div className={styles.info__contacs__wrapper}>
								<TelegramIcon className={styles.info__icons} />

								<a
									className={styles.info__contacts}
									href={`https://t.me/${telegramNick}`}>
									{telegramNick}
								</a>
							</div>
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
						{projects.slice(0, 5).map((project) => (
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
		</BlankCard>
	);
};
