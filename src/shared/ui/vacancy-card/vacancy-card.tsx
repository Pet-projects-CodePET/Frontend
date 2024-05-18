import React from 'react';
import { IconSpecialists } from '@/shared/assets';
import { MainButton } from '@/shared/ui/main-button/main-button';
import styles from './vacancy-card.module.scss';
export const VacancyCard = () => {
	const skills = [
		{ id: 1, name: 'React' },
		{ id: 2, name: 'Redux' },
		{ id: 3, name: 'UI/UX Design' },
	];
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<h2 className={styles.title}>
					UI/UX дизайнер / UI/UX Designer, Junior
				</h2>
				<div className={styles.iconWrapper}>
					<IconSpecialists className={styles.icon} />
					<p className={styles.count}>2</p>
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
