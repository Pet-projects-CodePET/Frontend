'use client';

import React from 'react';

import { MainButton, Input, Form } from '@/shared/ui';
import { DatePickerRHF } from '@/shared/ui/date-picker-rhf/date-picker-rhf';
import { useForm } from 'react-hook-form';
import Edit from '@/shared/assets/icons/edit-icon.svg';
import styles from './profile-edit-form.module.scss';
import Link from 'next/link';

export const ProfileEditForm = () => {
	const { control } = useForm();

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
			<Input name="nick_name" labelName="Никнейм" description />
			<Input
				name="name"
				labelName="Имя"
				description={true}
				descrText="Укажите свое настоящее имя и фамилию"
			/>
			<Input
				name="about"
				labelName="О себе"
				description={true}
				descrText="Не более 750 символов"
			/>
			<Input
				name="portfolioLink"
				labelName="Ссылка на портфолио"
				description={true}
				descrText="Добавьте ссылку на любую платформу, где размещено ваше портфолио"
			/>
			<Input
				name="contacts"
				labelName="Контакты для связи"
				description={true}
				descrText="Укажите контакты для связи, например: e-mail, telegram, телефон"
			/>
			<div className={styles.datePickerContainer}>
				<p className={styles.datePickerTitle}>Дата рождения</p>
				<DatePickerRHF control={control} name="birthDate" />
			</div>
			<div className={styles.fields_double}>
				<Input name="country" labelName="Страна" description />
				<Input name="city" labelName="Город" description />
			</div>
			<Input
				name="speciality"
				labelName="Специальность"
				description={true}
				descrText="Выберите не более 2 специальностей"
			/>
			<Input
				name="skills"
				labelName="Навыки"
				description={true}
				descrText="Выберите не более 15 навыков"
			/>
			<Input name="qualLabel" labelName="Уровень квалификации" description />
			<div className={styles.fields_buttonsContainer}>
				<MainButton variant={'primary'} width={'regular'}>
					Сохранить
				</MainButton>
				<Link href="/">Как видят мой профиль другие</Link>
			</div>
		</Form>
	);
};
