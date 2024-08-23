'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MainButton, Input, Form, PopUp } from '@/shared/ui';
import { Toggler } from '@/shared/ui/toggler/toggler';
import { SingleSelectInput } from '@/shared/ui/single-select-input/single-select-input';
import { MultiSelectInput } from '@/shared/ui/multi-select-input/multi-select-input';
import { ProfileLink } from '@/shared/ui/profile-link/profile-link';
import { PreviewProfile } from '@/shared/ui/preview-profile/preview-profile';
import { TextEditor } from '@/shared/ui/text-editor/text-editor';
import Edit from '@/shared/assets/icons/edit-icon.svg';
import Plus from '@/shared/assets/icons/plus-large.svg';

import { specialties } from '@/shared/constants/specialties/specialties';
import { skills } from '@/shared/constants/skills/skills';

import styles from './profile-edit-form.module.scss';
import clsx from 'clsx';
import { Calendar } from '@/shared/ui/calendar/calendar';

import { TContact } from '@/shared/ui/contact-card/types';
import { ContactsList } from '@/widgets/contact-list/contact-list';
import { ProfileAvatarEditor } from '@/shared/ui/profile-avatar-editor/profile-avatar-editor';

import AvatarEditor from 'react-avatar-editor';
import Image from 'next/image';

export const DesktopView = () => {
	const [isPopup, setIsPopup] = useState(false);
	const [preview, setPreview] = useState(false);
	const [isParticipation, setIsParticipation] = useState(false);

	const [image, setImage] = useState(
		'https://i.pinimg.com/originals/ea/23/b1/ea23b1a5bcd866299ac79fbfb7b8841c.jpg'
	);
	const editorRef = useRef<AvatarEditor>(null);

	const getImageUrl = async () => {
		if (editorRef !== null && editorRef.current !== null) {
			const dataUrl = editorRef.current.getImage().toDataURL();
			const res = await fetch(dataUrl);
			const blob = await res.blob();

			return window.URL.createObjectURL(blob);
		}
		return '';
	};

	const handleSubmit = () => {
		console.log('Submit');
	};
	const handlePreview = () => {
		setPreview(true);
	};

	const saveAvatar = async () => {
		setIsPopup(false);

		if (editorRef) {
			// This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
			// drawn on another canvas, or added to the DOM.
			// const canvas = editorRef.current.getImage();

			// If you want the image resized to the canvas size (also a HTMLCanvasElement)
			// const canvasScaled = editorRef.current.getImageScaledToCanvas();

			// Usage
			const imageURL = await getImageUrl();

			setImage(imageURL);
		}
	};

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	//=============для примера списка контактов:
	const [contacts, setContacts] = useState<TContact[]>([
		{ email: 'test1@mail.ru' },
		{ telegram: 'test1' },
		{ phone: '+111111111' },
		{ email: 'test2@mail.ru' },
		{ telegram: 'test2' },
		{ phone: '+2222222' },
	]);

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
								<Image src={image} alt="avatar" width={136} height={136} />
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
								<ProfileAvatarEditor
									image={image}
									width={250}
									height={250}
									borderRadius={50}
									editor={editorRef}
								/>
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
						<TextEditor
							currentText=" "
							setCurrentText={() => {}}
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
							<SingleSelectInput
								name="select-contacts"
								label="Контакты для связи"
								description="Выберите ресурс"
								options={[
									{ value: 1, label: 'E-mail' },
									{ value: 2, label: 'Telegram' },
									{ value: 3, label: 'Phone' },
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
						<ContactsList contacts={contacts} setContacts={setContacts} />
						<div className={styles.datePickerContainer}>
							<label className={styles.datePickerTitle}>Дата рождения</label>
							<Calendar name="birthdate" />
						</div>
						<div className={clsx(styles.inputBlock, styles.countryBlock)}>
							<SingleSelectInput
								name="select-country"
								label="Страна"
								isSearchable
								options={[
									{ value: 1, label: 'Россия' },
									{ value: 2, label: 'Беларусь' },
									{ value: 3, label: 'Казахстан' },
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
									{ value: 1, label: 'Москва' },
									{ value: 2, label: 'Екатеринбург' },
									{ value: 3, label: 'Пермь' },
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
									{ value: 1, label: 'Junior' },
									{ value: 2, label: 'Middle' },
									{ value: 3, label: 'Senior' },
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
								<Toggler
									checked={isParticipation}
									name={'participation'}
									id={'participation'}
									onChange={(evt) => {
										setIsParticipation(evt.target.checked);
									}}
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
