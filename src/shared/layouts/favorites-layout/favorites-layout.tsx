'use client';
import React from 'react';
import Link from 'next/link';
import { InputSearch } from '@/shared/ui/input-search/input-search';

export const FavoritesLayout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<>
			<div>
				<Link href="/favorites/specialists">Специалисты</Link>
				<Link href="/favorites/projects">Проекты</Link>
                <InputSearch search={() => {}} onChange={() => {}}/>
				{children}
			</div>
		</>
	);
};
