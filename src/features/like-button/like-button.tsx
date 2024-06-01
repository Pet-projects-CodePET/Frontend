'use client';
import React, { useState } from 'react';
import { LikeButton } from '@/shared/ui';

export const LikeButtonFeature = ({
	variant,
	disabled,
}: {
	variant: 'primary' | 'secondary' | 'trivial';
	disabled?: boolean;
}) => {
	const [isActive, setIsActive] = useState(false);
	const handleActiveLikeButton = (evt: React.MouseEvent | React.TouchEvent) => {
		evt.preventDefault();
		setTimeout(() => {
			console.log('лайк');
			setIsActive(!isActive);
		}, 300);
	};
	return (
		<LikeButton
			variant={variant}
			disabled={disabled}
			handleActiveLikeButton={handleActiveLikeButton}
			isActive={isActive}
			setIsActive={setIsActive}
		/>
	);
};
