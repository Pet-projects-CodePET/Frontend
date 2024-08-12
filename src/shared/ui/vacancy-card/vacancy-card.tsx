/* eslint-disable camelcase */
'use client';
import React, { useState } from 'react';
import { IconSpecialists } from '@/shared/assets';
import { MainButton } from '@/shared/ui/main-button/main-button';
import { InviteToProjectVacancyFeature } from '@/features';
import { VacancyCardType } from './types';
import { PopUp } from '@/shared/ui';
import styles from './vacancy-card.module.scss';
export const VacancyCard = ({
	idSpecialty,
	name,
	title,
	skills,
	count,
	projectId,
	specialists,
}: VacancyCardType) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<h2 className={styles.title}>{title}</h2>
				<div className={styles.iconWrapper}>
					<IconSpecialists className={styles.icon} />
					<p className={styles.count}>{count}</p>
				</div>
			</div>
			<ul className={styles.tagsList}>
				{skills.map((item) => {
					return (
						<li key={item.id} className={styles.tag}>
							{item.name}
						</li>
					);
				})}
			</ul>
			<MainButton
				variant="primary"
				width="regular"
				onClick={() => setIsPopupOpen(true)}>
				Откликнуться
			</MainButton>
			<PopUp
				visible={isPopupOpen}
				title={name}
				onClose={() => setIsPopupOpen(false)}>
				<InviteToProjectVacancyFeature
					projectId={projectId}
					project_specialists={specialists}
					idSpecialty={idSpecialty}
				/>
			</PopUp>
		</div>
	);
};
