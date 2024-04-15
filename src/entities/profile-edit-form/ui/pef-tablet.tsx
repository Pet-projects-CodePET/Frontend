'use client';

import React, { useState, useEffect } from 'react';
import { MainButton, Input, Form } from '@/shared/ui';
import { DatePickerRHF } from '@/shared/ui/date-picker-rhf/date-picker-rhf';
import { ToggleCheckbox } from '@/shared/ui/toggle-checkbox/toggle-checkbox';
import { ProfileLink } from '@/shared/ui/profile-link/profile-link';
import { useForm } from 'react-hook-form';
import { PreviewProfile } from '@/shared/ui/preview-profile/preview-profile';
import { TextEditor } from '@/shared/ui/text-editor/text-editor';
import styles from './profile-edit-form.module.scss';
import Edit from '@/shared/assets/icons/edit-icon.svg';
import { PopUp } from '@/shared/ui';
import Plus from '@/shared/assets/icons/plus-large.svg';

export const TabletView = () => {
	const [isPopup, setIsPopup] = useState(false);
	const [preview, setPreview] = useState(false);

	const handleSubmit = () => {
		console.log('Submit');
	};
	const handlePreview = () => {
		setPreview(true);
	};

	const { control } = useForm();
	const saveAvatar = () => {
		setIsPopup(false);
	};

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

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
							<button
								type="button"
								className={styles.fields_edit}
								onClick={() => setIsPopup(true)}>
								<Edit />
							</button>
							<PopUp
								visible={isPopup}
								title="Изменить фото"
								onClose={() => setIsPopup(false)}>
								<Input
									name="Foto"
									type="file"
									labelName="Изменить фото"></Input>
								<MainButton
									variant="primary"
									width="regular"
									onClick={saveAvatar}>
									Сохранить
								</MainButton>
							</PopUp>
							<div className={styles.fields_photo_descr}>
								Загрузите файл в формате: JPEG, PNG, размером не более 10 Мбайт
							</div>
						</div>
						<div className={styles.fields_double}>
							<Input name="nick_name" labelName="Никнейм" description />
							<Input
								name="name"
								labelName="Имя"
								description={true}
								descrText="Укажите свое настоящее имя и фамилию"
							/>
						</div>
						<TextEditor 
							labelName="О себе"
							placeholder=""
							desc="Не более 750 символов"
						/>
						<Input
							name="portfolioLink"
							labelName="Ссылка на портфолио"
							description={true}
							descrText="Добавьте ссылку на любую платформу, где размещено ваше портфолио"
						/>
						<div className={styles.fields_contacts}>
							<Input
								name="contacts"
								labelName="Контакты для связи"
								description={true}
								descrText="Выберите ресурс"
							/>
							<Input name="source" labelName=" " />
							<MainButton variant="secondary" width="regular" IconLeft={Plus}>
								Добавить
							</MainButton>
							<button>Сбросить все</button>
						</div>
						<div className={styles.datePickerContainer}>
							<p className={styles.datePickerTitle}>Дата рождения</p>
							<DatePickerRHF control={control} name="birthDate" />
						</div>

						<Input name="country" labelName="Страна" description />
						<Input name="city" labelName="Город" description />
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
									// checked={checked}
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
