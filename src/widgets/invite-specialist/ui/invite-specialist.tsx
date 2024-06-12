'use client';
import { MainButton, PopUp } from '@/shared/ui';
import React, { useState } from 'react';

export const InviteSpecialist = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<MainButton onClick={() => setIsOpen(!isOpen)} variant="primary" width="regular">
				Пригласить в проект
			</MainButton>
			<PopUp visible={isOpen} title="" onClose={() => setIsOpen(!isOpen)}>
				<p>Children</p>
			</PopUp>
		</>
	);
};
