import './globals.css';
import React from 'react';
import { MainLayout } from '@/shared/layouts';

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en">
			<body>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	);
};

export default RootLayout;
