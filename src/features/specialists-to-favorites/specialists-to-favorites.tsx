'use client';

import React, { useState } from 'react';
import { LikeButton } from '@/shared/ui';
import {
	useAddFavoriteSpecialistMutation,
	useDeleteFavoriteSpecialistMutation,
} from '@/services/SpecialistService';
export const SpecialistsToFavoritesFeature = ({
	favorite,
	id,
	handleDeleteCard,
}: {
	favorite: boolean;
	id: number;
	handleDeleteCard: (arg: number) => void;
}) => {
	const [isActiveLike, setIsActiveLike] = useState(favorite);
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [addFavoriteSpecialist] = useAddFavoriteSpecialistMutation();
	const [deleteFavoriteSpecialist] = useDeleteFavoriteSpecialistMutation();
	const token = localStorage.getItem('token');
	const handleOpenPopup = () => {
		setIsPopupOpen(true);
	};
	const handleActiveLikeButton = () => {
		if (token) {
			addFavoriteSpecialist({
				id,
			})
				.unwrap()
				.then(() => {
					setIsActiveLike(true);
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
				if (handleDeleteCard) {
					handleDeleteCard(id);
				}
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
