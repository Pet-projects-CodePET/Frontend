import React from 'react';
import { MainButton } from '@/shared/ui';
export const InviteToProjectFeature = () => {

    const handleClick = () => {
        console.log('заявка')
    }

	return (
		<>
			<MainButton variant="primary" width="regular" type="button" onClick={handleClick}>
				Откликнуться
			</MainButton>
		</>
	);
};
