'use client';

import React, { useState, useEffect } from 'react';
import { MainButton, Input, Form } from '@/shared/ui';
import { DatePickerRHF } from '@/shared/ui/date-picker-rhf/date-picker-rhf';
import { useForm } from 'react-hook-form';
import { PreviewProfile } from '@/shared/ui/preview-profile/preview-profile';
import { ToggleCheckbox } from '@/shared/ui/toggle-checkbox/toggle-checkbox';
import { ProfileLink } from '@/shared/ui/profile-link/profile-link';
import Edit from '@/shared/assets/icons/edit-icon.svg';
import styles from './profile-edit-form.module.scss';

export const ProfileEditForm = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	const { control } = useForm();

	const handleSubmit = () => {
		console.log('Submit');
	};

	const [preview, setPreview] = useState(false);

	const handlePreview = () => {
		setPreview(true);
	};

	return (
		<>		
			{preview ? (
				<PreviewProfile />
			) : (
				<> 
				<ProfileLink title="Профиль" />
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
							name="nick_name"
							labelName="Никнейм"
							description
						/>
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
							<Input
								name="country"
								labelName="Страна"
								description
							/>
							<Input
								name="city"
								labelName="Город"
								description
							/>
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
						<Input
							name="qualLabel"
							labelName="Уровень квалификации"
							description
						/>

						<div className={styles.fields__checkbox}>
							<p className={styles.fields__checkboxTitle}>
								Готовность к участию в проектах
							</p>
							<div className={styles.fields__checkboxItem}>
								<ToggleCheckbox
									id="participation"
									name="participation"
									variant="defaultOf"
									//checked={checked}
									onChange={() => {}}
								/>
							</div>
						</div>

						<div className={styles.fields_buttonsContainer}>
							<MainButton variant={'primary'} width={'regular'}>
								Сохранить
							</MainButton>
							<button
								type="button"
								className={styles.button__preview}
								onClick={handlePreview}>
								{'Как видят мой профиль другие'}
							</button>
						</div>
					</Form>
				</>
			)}
		</>
	);
};
