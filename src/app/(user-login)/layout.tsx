import React from 'react';
import { LoginLayout } from '@/shared/layouts';

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <LoginLayout>{children}</LoginLayout>;
};

export default Layout;
