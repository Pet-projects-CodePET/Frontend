import React from 'react';
import { IconSpecialists } from '@/shared/assets';
import { MainButton } from '@/shared/ui/main-button/main-button';
import styles from './vacancy-card.module.scss';
export const VacancyCard = ({
	title,
	skills,
	count,
}: {
	title: string;
	skills: { id: number; name: string }[];
	count: number;
}) => {
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

			<MainButton variant="primary" width="regular">
				Откликнуться
			</MainButton>
		</div>
	);
};
