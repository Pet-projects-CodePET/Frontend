'use client';
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { InputSearch } from '@/shared/ui/input-search/input-search';
import { ProfileLink } from '@/shared/ui/profile-link/profile-link';
import styles from './favorites-layout.module.scss';

export const FavoritesLayout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const links = [
		{ name: 'Специалисты', href: '/favorites/specialists' },
		{ name: 'Проекты', href: '/favorites/projects' },
	];
	const pathname = usePathname();
	return (
		<>
		<ProfileLink title='Избранные'/>
			<div className={styles.favorites}>
				<div className={styles.linksContainer}>
					{links.map((link) => {
						return (
							<Link
								key={link.name}
								href={link.href}
								className={clsx(styles.link, {
									[styles.linkActive]: pathname === link.href,
								})}>
								{link.name}
							</Link>
						);
					})}
				</div>
                <div className={styles.inputSearch}>
				<InputSearch search={() => {}} onChange={() => {}} />
				</div>
				
				{children}
			</div>
		</>
	);
};
