import './globals.css';
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { MainLayout } from '@/shared/layouts';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="ru">
			<body>
				<Provider store={store}>
					<AntdRegistry>
						<MainLayout>{children}</MainLayout>
					</AntdRegistry>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
