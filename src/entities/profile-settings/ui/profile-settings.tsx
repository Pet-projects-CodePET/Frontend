'use client';

import React from 'react';
import { MainButton } from '@/shared/ui';
import { Input } from '@/shared/ui';
import { Form } from '@/shared/ui';
import { useForm } from 'react-hook-form';

// import styles from './profile-settings.module.scss';
import Link from 'next/link';
export const ProfileSettings = () => {
	const { register } = useForm();

	const handleSubmit = () => {
		console.log('Submit');
	};
	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<h2>Настройка аккаунта</h2>
				<div>Видимость профиля</div>
				<div>Видимость контактов</div>

				<Input
					label="notifications"
					labelName="Отправка уведомлений"
					register={register}
					description
					type="checkbox"
				/>
				<Input
					label="name"
					labelName="Подписка на проекты"
					register={register}
					description
					type="checkbox"
				/>
				<Link href={'/'}>Удалить аккаунт</Link>
			</Form>

			<Form onSubmit={handleSubmit}>
				<h2>Смена пароля</h2>
				<Input
					label="password"
					labelName="Старый пароль"
					register={register}
					description
				/>
				<Input
					label="new-password"
					labelName="Новый пароль"
					register={register}
					description
				/>
				<Input
					label="repeat-new-password"
					labelName="Новый пароль еще раз"
					register={register}
					description
				/>

				<div>
					<MainButton variant={'primary'} width={'regular'}>
						Сохранить
					</MainButton>
				</div>
			</Form>
		</div>
	);
};
