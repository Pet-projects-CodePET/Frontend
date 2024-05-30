import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import React from 'react';

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<>
			<Header isLoggedIn={true} />
			{children}
			<Footer />
		</>
	);
};

export default RootLayout;
