'use client';

import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MobileView } from './pef-mobile';
import { TabletView } from './pef-tablet';
import { DesktopView } from './pef-desktop';

export const ProfileEditForm = () => {
	const isDesktop = useMediaQuery({ query: '(min-width:1200px)' });
	const isTablet = useMediaQuery({ minWidth: 780, maxWidth: 1199 });
	const isMobile = useMediaQuery({ query: '(max-width:779px)' });

	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	console.log(isDesktop, isTablet, isMobile);
	return (
		<>
			{isDesktop && <DesktopView />}
			{isTablet && <TabletView />}
			{isMobile && <MobileView />}
		</>
	);
};
