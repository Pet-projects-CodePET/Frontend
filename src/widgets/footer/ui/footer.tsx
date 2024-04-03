'use client';

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { FooterDesktop } from './footer-desktop';
import { FooterMobile } from './footer-mobile';

export const Footer = () => {
	const isMobile = useMediaQuery({ query: '(max-width:779px)' });
	console.log(isMobile);
	return <>{isMobile ? <FooterMobile /> : <FooterDesktop />}</>;
};
