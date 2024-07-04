import { ArrowLeftIcon } from '@/shared/assets';
import styles from './back-link.module.scss';
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export const BackLink = ({
	title,
	href,
	bigTitle,
	props
}: {
	title: string;
	href: string;
	bigTitle?: string;
	props?: string
}) => {
	return (
		<div className={styles.profileLink}>
			<Link href={href} className={clsx(props, styles.profileLink__link)}>
				<ArrowLeftIcon className={styles.profileLink__iconLeft} />
				{title}
			</Link>
			<h2 className={styles.profileLink__title}>{bigTitle}</h2>
		</div>
	);
};
