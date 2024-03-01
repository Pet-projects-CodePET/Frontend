'use client';

import React from 'react';
import { useState } from 'react';
import { ProfileEditForm } from '@/entities/profile-edit-form';
import { PopUp } from '@/shared/ui/pop-up/pop-up';

export const ProfileUser = () => {
	const [isPopup, setIsPopup] = useState(false);
	const onClose = () => setIsPopup(false);

	return (
		<>
			<div>Личный кабинет</div>
			<button onClick={() => setIsPopup(true)}>Show PopUp</button>
			<PopUp visible={isPopup} title="Popup" onClose={onClose}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
				aspernatur possimus alias magni molestias aut laudantium aperiam sint
				corporis! Magnam accusamus provident reprehenderit sunt nam quas, maxime
				asperiores eius necessitatibus.
			</PopUp>
			<ProfileEditForm />
		</>
	);
};
