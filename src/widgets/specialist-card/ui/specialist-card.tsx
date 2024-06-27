import React, { FC } from 'react';
import StatusIcon from '@/shared/assets/icons/activity-icon.svg';
import { SpecialistCardType } from './type';
import { LikeButtonFeature } from '@/features';
import styles from './specialist-card.module.scss';
import Link from 'next/link';
import { InviteSpecialist } from '@/widgets/invite-specialist';
import { AvatarImage } from '@/entities/_avatar-image';
import clsx from 'clsx';

export const SpecialistCard: FC<SpecialistCardType> = ({
	userId,
	avatar,
	userName,
	name,
	readyToParticipate,
	specialists,
}) => {
	return (
		<article className={styles.specialist}>
			<div className={styles.specialist__info}>
				<Link className={styles.info__link} target="_blank" href={`/specialists/${userId}`}>
					<div className={styles.info__person}>
						<AvatarImage imageURL={avatar} />
						<div className={styles.info__personDescription}>
							<div className={styles.info__personStatus}>
								{readyToParticipate ? (
									<>
										<StatusIcon className={styles.info__statusIcon} />
										<p className={styles.info__statusTitle}>
											не готов(а) к участию в проекте
										</p>
									</>
								) : (
									<>
										<StatusIcon className={styles.info__statusIcon} />
										<p className={styles.info__statusTitle}>
											готов(а) к участию в проекте
										</p>
									</>
								)}
							</div>
							<h2 className={styles.info__name}>{name}</h2>
							<p className={styles.info__nickname}>@{userName}</p>
						</div>
						<div className={styles.info__likeContainer}>
							<LikeButtonFeature variant="secondary" />
						</div>
					</div>

					{specialists.length < 1 ? (
							<>
							<div className={styles.specialist__info}>
								<div className={styles.info__role}>
									{specialists[0]?.profession.specialization}
									{'\t'}/{'\t'}
									{specialists[0]?.profession.specialty},
									{clsx(
										specialists[0]?.level === 1 && '\t Junior',
										specialists[0]?.level === 2 && '\t Middle',
										specialists[0]?.level === 3 && '\t Senior',
										specialists[0]?.level === 4 && '\t Lead'
									)}
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
							</div>
						</>
					) : (
						<>
						<div className={styles.specialist__info}>
							<div className={styles.info__role}>
								{specialists[0]?.profession.specialization}
								{'\t'}/{'\t'}
								{specialists[0]?.profession.specialty},
								{clsx(
									specialists[0]?.level === 1 && '\t Junior',
									specialists[0]?.level === 2 && '\t Middle',
									specialists[0]?.level === 3 && '\t Senior',
									specialists[0]?.level === 4 && '\t Lead'
								)}
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
						</div>
						<div className={styles.specialist__info}>
							<div className={styles.info__role}>
								{specialists[1]?.profession?.specialization}
								{'\t'}/{'\t'}
								{specialists[1]?.profession?.specialty},
								{clsx(
									specialists[1]?.level === 1 && '\t Junior',
									specialists[1]?.level === 2 && '\t Middle',
									specialists[1]?.level === 3 && '\t Senior',
									specialists[1]?.level === 4 && '\t Lead'
								)}
							</div>
							<ul className={styles.info__skillsList}>
								{specialists[1]?.skills?.map((skill) => {
									return (
										<li className={styles.info__skill} key={skill.id}>
											{skill.name}
										</li>
									);
								})}
							</ul>
						</div>
					</>
					)}
				</Link>
				<InviteSpecialist />
			</div>
		</article>
	);
};
