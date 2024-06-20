import React, { FC } from 'react';
import PersonIcon from '@/shared/assets/icons/avatar-girl.svg';
import StatusIcon from '@/shared/assets/icons/activity-icon.svg';
import { SpecialistCardType } from './type';
import { useMediaQuery } from '@/shared/hooks';
import { LikeButtonFeature } from '@/features';
import styles from './specialist-card.module.scss';
import Link from 'next/link';
import { InviteSpecialist } from '@/widgets/invite-specialist';

export const SpecialistCard: FC<SpecialistCardType> = ({
	specialization,
	specialty,
	telegram,
	skills,
}) => {
	const isMobile = useMediaQuery('(max-width:779px)');
	return (
		<article className={styles.specialist}>
			<div className={styles.specialist__info}>
				<Link className={styles.info__link} href={'/specialists/171'}>
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
							<h2 className={styles.info__name}>{specialty}</h2>
							<p className={styles.info__nickname}>{telegram}</p>
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
					</div>
				</Link>
				<InviteSpecialist />
			</div>
		</article>
	);
};
