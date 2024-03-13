'use client';

import React, { useState, useEffect } from 'react';
import { MainButton } from '@/shared/ui';
import { Input } from '@/shared/ui';
import { Form } from '@/shared/ui';
import { DatePickerRHF } from '@/shared/ui/date-picker-rhf/date-picker-rhf';
import { useForm } from 'react-hook-form';
import { PreviewProfile } from '@/shared/ui/preview-profile/preview-profile';
import { ToggleCheckbox } from '@/shared/ui/toggle-checkbox/toggle-checkbox';
import Edit from '@/shared/assets/icons/edit-icon.svg';
import styles from './profile-edit-form.module.scss';

export const ProfileEditForm = () => {

	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	
	const { register, control } = useForm();

	const handleSubmit = () => {
		console.log('Submit');
	};

	const [preview, setPreview] = useState(false);

	const handlePreview = () => {
		setPreview(true);
	};

	return (
		<section>
			{preview ? (
				<PreviewProfile /*visible={preview} */ />
			) : (
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
					<div className={styles.datePickerContainer}>
						<p className={styles.datePickerTitle}>Дата рождения</p>
						<DatePickerRHF control={control} name="birthDate" />
					</div>
					<div className={styles.fields_double}>
						<Input
							label="country"
							labelName="Страна"
							register={register}
							description
						/>
						<Input
							label="city"
							labelName="Город"
							register={register}
							description
						/>
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
			)}

			
		</section>

	
	);
};
