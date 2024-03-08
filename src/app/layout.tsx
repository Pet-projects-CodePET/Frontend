import './globals.css';
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { MainLayout } from '@/shared/layouts';

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="ru">
			<body>
				<AntdRegistry>
					<MainLayout>{children}</MainLayout>
				</AntdRegistry>
			</body>
		</html>
	);
};

export default RootLayout;
