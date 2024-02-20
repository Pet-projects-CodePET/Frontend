import React from 'react';
import { NavLinks } from '@/shared/ui';
import styles from './side-nav.module.scss';

export const SideNav = () => {
	return (
		<div className={styles.container}>
			<NavLinks />
		</div>
	);
};
