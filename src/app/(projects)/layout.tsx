import React from 'react';
import { ProjectsLayout } from '@/shared/layouts';

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <ProjectsLayout>{children}</ProjectsLayout>;
};

export default Layout;
