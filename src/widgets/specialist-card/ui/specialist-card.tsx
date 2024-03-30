import React, { FC } from 'react';
import PersonIcon from '@/shared/assets/icons/avatar-girl.svg';
import StatusIcon from '@/shared/assets/icons/activity-icon.svg';
import { SpecialistCardType } from './type';
import { skills } from '@/shared/constants/skills/skills';
import { MainButton } from '@/shared/ui';
import { useMediaQuery } from '@/shared/hooks';
import LikeIcon from '@/shared/assets/icons/heart.svg';
import styles from './specialist-card.module.scss';

export const SpecialistCard: FC<SpecialistCardType> = ({
	specialization,
	specialty,
}) => {
	const isMobile = useMediaQuery('(max-width:779px)');
	return (
		<article className={styles.specialist}>
			<div className={styles.specialist__info}>
				<div className={styles.info__person}>
					<PersonIcon className={styles.info__personImage} />
					<div className={styles.info__personDescription}>
						<div className={styles.info__personStatus}>
							<StatusIcon className={styles.info__statusIcon} />
							{isMobile ? (
								<p className={styles.info__statusTitle}>готов(а) к участию</p>
							) : (
								<p className={styles.info__statusTitle}>
									готов(а) к участию в проектах
								</p>
							)}
						</div>
						<h2 className={styles.info__name}>Длиннофамильная Екатерина</h2>
						<p className={styles.info__nickname}>@nickname</p>
					</div>
					<div className={styles.info__likeContainer}>
						<LikeIcon className={styles.info__likeIcon} />
					</div>
				</div>

				<div className={styles.specialist__info}>
					<div
						className={
							styles.info__role
						}>{`${specialty}, ${specialization}`}</div>
					<ul className={styles.info__skillsList}>
						{skills.map((skill) => {
							return (
								<li className={styles.info__skill} key={skill.value}>
									{skill.label}
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
	);
};
