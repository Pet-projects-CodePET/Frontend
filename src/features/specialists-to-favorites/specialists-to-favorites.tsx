'use client';

import React, {useState} from 'react';
import { LikeButton } from '@/shared/ui';
import { useAddFavoriteSpecialistMutation, useDeleteFavoriteSpecialistMutation } from '@/services/SpecialistService';
export const SpecialistsToFavoritesFeature = ({favorite, id}: {favorite: boolean, id: number}) => {
	const [isActiveLike, setIsActiveLike] = useState(favorite);
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [addFavoriteSpecialist] = useAddFavoriteSpecialistMutation();
	const [deleteFavoriteSpecialist] = useDeleteFavoriteSpecialistMutation();
	const token = localStorage.getItem('token');
	const handleOpenPopup = () => {
		setIsPopupOpen(true);
	};
	const handleActiveLikeButton =
		(/*evt: React.MouseEvent | React.TouchEvent*/) => {
			//evt.preventDefault();
			if (token) {
				addFavoriteSpecialist({
					id,
					// name,
					// description,
					// started,
					// ended,
					// busyness,
					// directions,
					// link,
					// phone_number,
					// telegram_nick,
					// email,
					// project_specialists,
					// project_status,
				})
					.unwrap()
					.then(() => {
						setIsActiveLike(true);
						//console.log('like');
					})
					.catch((error) => {
						console.log('errorCatch', error);
					});
			} else {
				handleOpenPopup();
			}
		};

	const handleRemoveSpecialist = (id: number) => {
		deleteFavoriteSpecialist(id)
			.unwrap()
			.then(() => {
				setIsActiveLike(false);
			})
			.catch((error) => {
				console.log('errorCatch', error);
			});
	};

	const toggleButtonLike = () => {
		if (isActiveLike) {
			handleRemoveSpecialist(id);
		} else {
			handleActiveLikeButton();
		}
	};
	return (
		<>
			<LikeButton
				variant="secondary"
				isActiveLike={isActiveLike}
				isPopupOpen={isPopupOpen}
				handleLikeButton={toggleButtonLike}
				setIsActiveLike={setIsActiveLike}
				setIsPopupOpen={setIsPopupOpen}
			/>
		</>
	);
};
