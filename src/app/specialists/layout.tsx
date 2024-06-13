import React from 'react';
import { DetailedSpecialistLayout } from '@/shared/layouts';

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <DetailedSpecialistLayout>{children}</DetailedSpecialistLayout>;
};

export default RootLayout;
