/* eslint-disable camelcase */
'use client';
import React, { useState } from 'react';
import { LikeButton } from '@/shared/ui';
import { useAddFavoriteProjectMutation } from '@/services/ProjectService';
//import { FavoriteProjectType } from '@/services/models/IFavoriteProject';

export const LikeButtonFeature = ({
	id,
	name,
	description,
	started,
	ended,
	busyness,
	directions,
	link,
	phone_number,
	telegram_nick,
	email,
	project_specialists,
	status,
	variant,
	disabled,
	favorite,
}: {
	id: never;
	name: string;
	description: string;
	started: string;
	ended: string;
	busyness: number;
	directions: [
		{
			id: number;
			name: string;
		},
	];
	link?: string;
	phone_number?: string;
	telegram_nick?: string;
	email?: string;
	project_specialists: [
		{
			id: number;
			profession: {
				id: number;
				specialization: string;
				specialty: string;
			};

			skills: {
				id: number;
				name: string;
			}[];

			count?: number;
			level?: number;
			is_required?: boolean;
		},
	];
	status: string;
	variant: 'primary' | 'secondary' | 'trivial';
	disabled?: boolean;
	favorite: boolean;
}) => {
	//const [isActive, setIsActive] = useState(false);
	const [isActive, setIsActive] = useState(favorite);
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [addFavoriteProject] = useAddFavoriteProjectMutation();
	//const[isFavorite, setIsFavorite] = useState(favorite)
	const token = localStorage.getItem('token');
	const handleOpenPopup = () => {
		setIsPopupOpen(true);
	};

	const handleActiveLikeButton = (evt: React.MouseEvent | React.TouchEvent) => {
		evt.preventDefault();
		if (token) {
			addFavoriteProject({
				id,
				name,
				description,
				started,
				ended,
				busyness,
				directions,
				link,
				phone_number,
				telegram_nick,
				email,
				project_specialists,
				status,
			})
				.unwrap()
				.then(() => {
					//setIsFavorite(!isFavorite)
					setIsActive(true);
					console.log('like');
				})
				.catch((error) => {
					console.log('errorCatch', error);
				});
		} else {
			handleOpenPopup();
		}
	};
	return (
		<LikeButton
			variant={variant}
			disabled={disabled}
			handleActiveLikeButton={handleActiveLikeButton}
			isActive={isActive}
			setIsActive={setIsActive}
			isPopupOpen={isPopupOpen}
			setIsPopupOpen={setIsPopupOpen}
		/>
	);
};
