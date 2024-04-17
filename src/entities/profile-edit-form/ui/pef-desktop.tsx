'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { MainButton, Input, Form, PopUp } from '@/shared/ui';
import { DatePickerRHF } from '@/shared/ui/date-picker-rhf/date-picker-rhf';
import { ToggleCheckbox } from '@/shared/ui/toggle-checkbox/toggle-checkbox';
import { SingleSelectInput } from '@/shared/ui/single-select-input/single-select-input';
import { MultiSelectInput } from '@/shared/ui/multi-select-input/multi-select-input';
import { ProfileLink } from '@/shared/ui/profile-link/profile-link';
import { PreviewProfile } from '@/shared/ui/preview-profile/preview-profile';

import Edit from '@/shared/assets/icons/edit-icon.svg';
import Plus from '@/shared/assets/icons/plus-large.svg';

import { specialties } from '@/shared/constants/specialties/specialties';
import { skills } from '@/shared/constants/skills/skills';

import styles from './profile-edit-form.module.scss';
import clsx from 'clsx';

export const DesktopView = () => {
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
						<div className={styles.fields_contacts}>
							<SingleSelectInput
								name="select-contacts"
								label="Контакты для связи"
								description="Выберите ресурс"
								options={[
									{ value: 'email', label: 'E-mail' },
									{ value: 'tg', label: 'Telegram' },
									{ value: 'phone', label: 'Phone' },
								]}
								onChange={(item) => {
									console.log(item);
								}}
							/>
							<Input name="source" labelName="&nbsp;" />
							<MainButton variant="secondary" width="regular" IconLeft={Plus}>
								Добавить
							</MainButton>
							<button>Сбросить все</button>
						</div>
						<div className={styles.datePickerContainer}>
							<label className={styles.datePickerTitle}>Дата рождения</label>
							<DatePickerRHF control={control} name="birthDate" />
						</div>
						<div className={clsx(styles.inputBlock, styles.countryBlock)}>
							<SingleSelectInput
								name="select-country"
								label="Страна"
								isSearchable
								options={[
									{ value: '1', label: 'Россия' },
									{ value: '2', label: 'Беларусь' },
									{ value: '3', label: 'Казахстан' },
								]}
								onChange={(item) => {
									console.log(item);
								}}
							/>
							<SingleSelectInput
								name="select-city"
								label="Город"
								isSearchable
								options={[
									{ value: '1', label: 'Москва' },
									{ value: '2', label: 'Екатеринбург' },
									{ value: '3', label: 'Пермь' },
								]}
								onChange={(item) => {
									console.log(item);
								}}
							/>
						</div>
						<div className={styles.inputBlock}>
							{' '}
							<MultiSelectInput
								name="select-specialties"
								label="Специальность"
								description="Выберите не более 2 специальностей"
								maxSelections={2}
								options={specialties}
								values={[]}
								onChange={(item) => {
									console.log(item);
								}}
							/>
						</div>
						<div className={styles.inputBlock}>
							<MultiSelectInput
								name="select-skills"
								label="Навыки"
								description="Выберите не более 15 навыков"
								maxSelections={15}
								isSearchable
								options={skills}
								values={[]}
								onChange={(item) => {
									console.log(item);
								}}
							/>
						</div>
						<div className={styles.inputBlock}>
							<SingleSelectInput
								name="select-qualifications"
								label="Уровень квалификации"
								options={[
									{ value: 'junior', label: 'Junior' },
									{ value: 'middle', label: 'Middle' },
									{ value: 'senior', label: 'Senior' },
								]}
								onChange={(item) => {
									console.log(item);
								}}
							/>
						</div>
						<div className={styles.fields__checkbox}>
							<span className={styles.fields__checkboxTitle}>
								Готовность к участию в проектах
							</span>
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
