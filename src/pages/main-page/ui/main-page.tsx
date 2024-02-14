import React from 'react';
import Link from 'next/link';
import { MainButton } from '@/shared/ui';
import { Footer } from '@/widgets/footer';
import Arrow from '@/shared/assets/icons/tg.svg';

export const MainPage = () => {
	return (
		<>
			<main>
				<div>CodePET FRONTEND</div>
				<br />
				<Link href="/login">
					<MainButton variant="primary" width="regular" IconLeft={Arrow}>
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
			<Footer />
		</>
	);
};
