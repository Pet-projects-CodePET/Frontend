import React from 'react';
import { ProfileLayout } from '@/shared/layouts';

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <ProfileLayout>{children}</ProfileLayout>;
};

export default Layout;
