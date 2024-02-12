import React from 'react';
import Link from 'next/link';
import { MainButton } from '@/shared/ui';
import { Footer } from '@/widgets/footer';

export const MainPage = () => {
	return (
		<>
			<main>
				<div>CodePET FRONTEND</div>
				<br />
				<Link href="/login">
					<MainButton variant="primary" width="regular">
						Login
					</MainButton>
				</Link>
				<br />
				<br />
				<Link href="/registration">
					<MainButton variant="primary" width="regular">
						Registration
					</MainButton>
				</Link>
				<br />
			</main>
			<Footer device="desktop" />
		</>
	);
};
