import { AvatarImage } from '@/entities/_avatar-image';
import { DetailedSpecialistCardTypes } from './types';
import styles from './detailed-specialist-card.module.scss';
import React, { FC } from 'react';
import { LikeButtonFeature } from '@/features';
import { MainButton } from '@/shared/ui';
import { ActivityIcon } from '@/shared/assets';

export const DetailedSpecialistCard: FC<DetailedSpecialistCardTypes> = ({
	name,
	userName,
	specialization,
	skills,
	image,
	readyToParticipate,
}) => {
	return (
		<>
			<article className={styles.specialist}>
				<div className={styles.specialist__info}>
					<div className={styles.info__person}>
						<AvatarImage imageURL={image} size={'large'} />
						<div className={styles.info__personDescription}>
							<h2 className={styles.info__name}>{name}</h2>
							<p className={styles.info__nickname}>{userName}</p>
							<div className={styles.info__personStatus}>
								{readyToParticipate ? (
									<>
										<ActivityIcon />
										Не готов(а) к участию в проекте
									</>
								) : (
									<>
										<ActivityIcon />
										Готов к участию в проекте
									</>
								)}
							</div>
						</div>
						<div className={styles.info__likeContainer}>
							<LikeButtonFeature variant="secondary" />
						</div>
					</div>

					<div className={styles.specialist__info}>
						<div className={styles.info__role}>{specialization}</div>
						<ul className={styles.info__skillsList}>
							{skills.map((skill, id) => {
								return (
									<li className={styles.info__skill} key={id}>
										{skill}
									</li>
								);
							})}
						</ul>

						<MainButton variant="primary" width="regular">
							Пригласить в проект
						</MainButton>
					</div>
				</div>
			</article>
		</>
	);
};
