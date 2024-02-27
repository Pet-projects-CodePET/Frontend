import React from 'react';
import { ProfileEditForm } from '@/entities/profile-edit-form';
import { PopUp } from '@/shared/ui/pop-up/pop-up';

export const ProfileUser = () => {
	return (
		<>
			<div>Личный кабинет</div>
			<PopUp>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
				aspernatur possimus alias magni molestias aut laudantium aperiam sint
				corporis! Magnam accusamus provident reprehenderit sunt nam quas, maxime
				asperiores eius necessitatibus.
			</PopUp>
			<ProfileEditForm />
		</>
	);
};
