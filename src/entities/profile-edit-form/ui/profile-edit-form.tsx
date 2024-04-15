'use client';

import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MobileView } from './pef-mobile';
import { TabletView } from './pef-tablet';
import { DesktopView } from './pef-desktop';

export const ProfileEditForm = () => {
	const [isWindowLoaded, setIsWindowLoaded] = useState<boolean>(false)
	const isDesktop = useMediaQuery({ query: '(min-width:1200px)' });
	const isTablet = useMediaQuery({ minWidth: 780, maxWidth: 1199 });
	const isMobile = useMediaQuery({ query: '(max-width:779px)' });

	useEffect(() => {
		setIsWindowLoaded(true)
		window.scroll(0, 0);
	}, []);

	if (!isWindowLoaded) {
		return null
	}

	return (
		<>
			{isDesktop && <DesktopView />}
			{isTablet && <TabletView />}
			{isMobile && <MobileView />}
		</>
	);
};
