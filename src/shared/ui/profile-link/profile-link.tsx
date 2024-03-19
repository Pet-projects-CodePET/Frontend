import React from 'react';
import Link from 'next/link';
import IconLeft from '@/shared/assets/icons/chevron-left.svg';
import styles from './profile-link.module.scss';

export const ProfileLink = ({ title }: { title: string }) => {
	return (
		<div className={styles.profileLink}>
			<Link className={styles.profileLink__link} href="/profile-navigation">
				<IconLeft className={styles.profileLink__iconLeft} />
				{'Личный кабинет'}
			</Link>
			<h2 className={styles.profileLink__title}>{title}</h2>
		</div>
	);
};
