import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import React from 'react';

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		// has to be separeted into layout wrapper
		<>
			<Header isLoggedIn={true} />
			{children}
			<Footer />
		</>
	);
};

export default RootLayout;
