import React from 'react';
import { IconButton } from '@/shared/ui';
import styles from './iconButtonList.module.scss';

export const IconButtonList = () => {
	return (
		<ul className={styles.iconButtonList__container}>
			<li className={styles.iconButtonList__item}>
				<IconButton variant="gmail" link="/" />
			</li>
			<li className={styles.iconButtonList__item}>
				<IconButton variant="vk" link="/" />
			</li>
			<li className={styles.iconButtonList__item}>
				<IconButton variant="yandex" link="/" />
			</li>
			<li className={styles.iconButtonList__item}>
				<IconButton variant="git" link="/" />
			</li>
		</ul>
	);
};
