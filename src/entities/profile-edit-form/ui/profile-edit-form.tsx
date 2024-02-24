'use client';

import React from 'react';

import { MainButton } from '@/shared/ui';
import { Input } from '@/shared/ui';
import { Form } from '@/shared/ui';
import { useForm } from 'react-hook-form';
import Edit from '@/shared/assets/icons/edit-icon.svg';
import styles from './profile-edit-form.module.scss';
import Link from 'next/link';

export const ProfileEditForm = () => {
	const { register } = useForm();

	const handleSubmit = () => {
		console.log('Submit');
	};

	return (
		<Form onSubmit={handleSubmit} className={styles.fields}>
			<div className={styles.fields_photo}>
				<div className={styles.fields_avatar}>
					<div className={styles.fields_text}>A</div>
				</div>
				<button className={styles.fields_edit}>
					<Edit />
				</button>
			</div>
			<Input
				label="nick_name"
				labelName="Никнейм"
				register={register}
				description
			/>
			<Input
				label="name"
				labelName="Имя"
				register={register}
				description={true}
				descrText="Укажите свое настоящее имя и фамилию"
			/>
			<Input
				label="about"
				labelName="О себе"
				register={register}
				description={true}
				descrText="Не более 750 символов"
			/>
			<Input
				label="portfolioLink"
				labelName="Ссылка на портфолио"
				register={register}
				description={true}
				descrText="Добавьте ссылку на любую платформу, где размещено ваше портфолио"
			/>
			<Input
				label="contacts"
				labelName="Контакты для связи"
				register={register}
				description={true}
				descrText="Укажите контакты для связи, например: e-mail, telegram, телефон"
			/>
			<Input
				label="birthDate"
				labelName="Дата рождения"
				register={register}
				description
			/>
			<div className={styles.fields_double}>
				<Input
					label="country"
					labelName="Страна"
					register={register}
					description
				/>
				<Input label="city" labelName="Город" register={register} description />
			</div>
			<Input
				label="speciality"
				labelName="Специальность"
				register={register}
				description={true}
				descrText="Выберите не более 2 специальностей"
			/>
			<Input
				label="skills"
				labelName="Навыки"
				register={register}
				description={true}
				descrText="Выберите не более 15 навыков"
			/>
			<Input
				label="qualLabel"
				labelName="Уровень квалификации"
				register={register}
				description
			/>
			<div className={styles.fields_buttonsContainer}>
				<MainButton variant={'primary'} width={'regular'}>
					Сохранить
				</MainButton>
				<Link href="/">Как видят мой профиль другие</Link>
			</div>
		</Form>
	);
};
