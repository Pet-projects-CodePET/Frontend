'use client';

import React, { FC, useState, useEffect } from 'react';
import { FormCreateProjectProps } from '@/entities/form-create-project/ui/types';
import styles from './form-create-project.module.scss';
import { TextEditor } from '@/shared/ui/text-editor/text-editor';
import Plus from '@/shared/assets/icons/plus-large.svg';
import { DatePickerRHF } from '@/shared/ui/date-picker-rhf/date-picker-rhf';
import { Input, MainButton, CheckboxAndRadio } from '@/shared/ui';
import { useFormContext } from 'react-hook-form';
import { FormCreateProjectCard } from '@/entities/form-create-project-card';
import { BUSYNESS, CONTACTS, DIRECTION } from '@/utils/constants';
import { ContactsList } from '@/entities/contact-list/contact-list';
import { TContact } from '@/shared/ui/contact-card/types';
import { generalEmailRegex, phoneRegex } from '@/utils/regex-consts';

type TOption = {
	label: string;
	value: string;
	id?: number;
};
export const FormFieldsCreateProject: FC<FormCreateProjectProps> = ({
	allSkills,
	professions,
	currentText,
	setActionType,
	isSubmitSuccessfulReset,
	setSubmitSuccessfulReset,
	contacts,
	setContacts,
	serverNameError,
	setServerNameError,
	serverLinkError,
	setServerLinkError,
	nameProject,
	onNameProjectChange,
	onClearProjectData,
	linkProject,
	onLinkProjectChange,
	onDescriptionProjectChange,
}) => {
	const {
		reset,
		control,
		formState: { errors },
		setValue,
		getValues,
		clearErrors,
	} = useFormContext();
	const [selectedOptionContactType, setSelectedOptionContactType] =
		useState<TOption | null>(null);
	const [addContactErrorText, setAddContactErrorText] = useState<string>('');
	const [inputValueContact, setInputValueContact] = useState<string>('');

	useEffect(() => {
		setAddContactErrorText('');
	}, [contacts]);

	useEffect(() => {
		if (isSubmitSuccessfulReset) {
			reset();
			setContacts([]);
			setSubmitSuccessfulReset(false);
			onClearProjectData();
			clearErrors();
		}
	}, [isSubmitSuccessfulReset, reset, onClearProjectData, clearErrors, setSubmitSuccessfulReset, setContacts]);

	useEffect(() => {
		errors.name?.message && setServerNameError('');
	}, [errors.name?.message, setServerNameError]);

	useEffect(() => {
		errors.link?.message && setServerLinkError('');
	}, [errors.link?.message, setServerLinkError]);

	useEffect(() => {
		//Синхронизируем локальное состояние текстового редактора с формой
		if (currentText !== undefined && currentText !== getValues('description')) {
			setValue('description', currentText, { shouldValidate: true });
		}
		    if (nameProject && nameProject !== getValues('name')) {
            setValue('name', nameProject, { shouldValidate: true });
        }
        if (linkProject && linkProject !== getValues('link')) {
            setValue('link', linkProject, { shouldValidate: true });
        }
	}, [currentText, linkProject, nameProject, setValue, getValues]);

	const handleDirectionsChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		directionsId: string
	) => {
		const { checked } = e.target;
		const currentDirections = getValues('directions') || [];

		const newDirections = checked
			? [...currentDirections, directionsId]
			: currentDirections.filter((id: string) => id !== directionsId);

		setValue('directions', newDirections, { shouldValidate: true });
	};

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		fieldName: string
	) => {
		switch (fieldName) {
			case 'inputValueContact':
				if (addContactErrorText !== '') setAddContactErrorText('');
				setInputValueContact(event.target.value);
				break;
			default:
		}
	};

	const handleOptionSelect = (option: TOption) => {
		setSelectedOptionContactType(option);
	};
	const handleAddContact = () => {
		if (selectedOptionContactType && inputValueContact) {
			let isValid = true;
			const newContact: TContact = {
				[selectedOptionContactType.value]: inputValueContact,
			};

			// Проверка формата email
			if (selectedOptionContactType.value === 'email') {
				if (!generalEmailRegex.test(inputValueContact)) {
					setAddContactErrorText('Пожалуйста, введите корректный email адрес.');
					isValid = false;
				}
			}
			// Проверка формата телефона
			if (selectedOptionContactType.value === 'phone') {
				if (!phoneRegex.test(inputValueContact)) {
					setAddContactErrorText(
						'Допустимый формат +7XXXXXXXXXX, где X - цифры.'
					);
					isValid = false;
				}
			}
			// Проверяем, что контакт такого же типа не существует уже
			if (
				isValid &&
				!contacts.some((contact) =>
					Object.prototype.hasOwnProperty.call(
						contact,
						selectedOptionContactType.value
					)
				)
			) {
				setContacts([...contacts, newContact]);
				// setSelectedOptionContactType(null);
				setInputValueContact('');
			} else if (!isValid) {
				// Если данные не валидны, выходим из функции
				return;
			} else {
				setAddContactErrorText(
					`Контакт типа "${selectedOptionContactType.label}" уже существует.`
				);
			}
		}
	};
	const handleClear = () => {
		reset();
		onClearProjectData();
		clearErrors();
	};

	const handleInputNameProjectChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		onNameProjectChange(e.target.value);
		setValue('name', e.target.value, { shouldValidate: true });
	};

	const handleInputLinkProjectChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		onLinkProjectChange(e.target.value);
		setValue('link', e.target.value, { shouldValidate: true });
	};

	const handleDescriptionInputChange = (text: string) => {
		onDescriptionProjectChange(text);
		setValue('description', text, { shouldValidate: true });
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Детали проекта</h2>
			<div className={styles.input_list}>
				<Input
					name="name"
					labelName="Название проекта"
					className={styles.input_extra}
					error={errors.name ? `${errors.name?.message}` : serverNameError}
					value={nameProject}
					onChange={handleInputNameProjectChange}
				/>
				<h3 className={styles.input_list_title}>Описание проекта</h3>
				<TextEditor
					labelName={''}
					desc={
						'Расскажите о проекте и его цели используя не более 1500 символов'
					}
					setCurrentText={handleDescriptionInputChange}
					currentText={currentText as string || ''}
					error={errors.description?.message as string}
					onFocus={() => {
						// Очищаем ошибку Zod при фокусе
						if (errors.description) {
							clearErrors('description');
						}
					}}
				/>
			</div>

			<div className={styles.directions}>
				<h3 className={styles.input_list_title}>Направление разработки</h3>
				<ul className={styles.directions_list}>
					{DIRECTION.map((directions: { id: number; name: string }) => (
						<li className={styles.directions_item} key={directions.id}>
							<CheckboxAndRadio
								labelName={directions.name}
								label={`directions_${directions.id}`}
								type="checkbox"
								id={`directions_${directions.id}`}
								name="directions"
								value={String(directions.id)}
								checked={
									getValues('directions')?.includes(String(directions.id)) ||
									false
								}
								onChange={(e) =>
									handleDirectionsChange(e, String(directions.id))
								}
							/>
						</li>
					))}
				</ul>
				<p className={styles.checkboxError}>
					{errors.directions ? `${errors.directions?.message || ''}` : ''}
				</p>
			</div>

			<div className={styles.specialists}>
				<div className={styles.employment}>
					<h3 className={styles.input_list_title}>Занятость</h3>
					<ul className={styles.employment_list}>
						{BUSYNESS.map((busyness) => (
							<li className={styles.directions_item} key={busyness.id}>
								<CheckboxAndRadio
									labelName={busyness.name}
									label={`busyness`}
									type={'radio'}
									id={`busyness_${busyness.id}.`}
									name={'busyness'}
									value={busyness.id}
								/>
							</li>
						))}
					</ul>
				</div>

				<div className={styles.dates}>
					<h3 className={styles.input_list_title}>Сроки проекты</h3>
					<div className={styles.dates_inputs}>
						<div className={styles.dates_input}>
							<p className={styles.dates_text}>Начало</p>
							<DatePickerRHF control={control} name="started" />
						</div>
						<div className={styles.dates_input}>
							<p className={styles.dates_text}>Окончание</p>
							<DatePickerRHF control={control} name="ended" />
						</div>
					</div>
				</div>

				<div className={styles.contacts}>
					<h3 className={styles.input_list_title}>Контакты для связи</h3>
					<ContactsList contacts={contacts} setContacts={setContacts} />
					<div className={styles.fields__addContactWrapper}>
						<label className={styles.fields__addContactTypeWrapper}>
							<select
								className={styles.fields__addContactType}
								value={selectedOptionContactType?.value || ''}
								onChange={(event) =>
									handleOptionSelect(
										CONTACTS.find(
											(contact) => contact.value === event.target.value
										)!
									)
								}>
								{CONTACTS.map((option) => (
									<option
										className={styles.fields__addContactTypeListItem}
										key={option.value}
										value={option.value}>
										{option.label}
									</option>
								))}
							</select>
							<span className={styles.fields__addContactTypeLabel}>
								Выберите ресурс
							</span>
						</label>
						{selectedOptionContactType?.value === 'phone_number' ? (
							<Input
								placeholder="+7XXXXXXXXXX"
								className={styles.fields__addContactTextValue}
								name="inputValueContact"
								labelName=""
								description={false}
								value={inputValueContact}
								error={addContactErrorText}
								onChange={(event) =>
									handleInputChange(event, 'inputValueContact')
								}
							/>
						) : (
							<Input
								className={styles.fields__addContactTextValue}
								name="inputValueContact"
								labelName=""
								description={false}
								value={inputValueContact}
								error={addContactErrorText}
								onChange={(event) =>
									handleInputChange(event, 'inputValueContact')
								}
							/>
						)}
					</div>
				</div>
			</div>
			<div className={styles.specialists_buttons}>
				<MainButton
					type="button"
					onClick={handleAddContact}
					variant="secondary"
					width="regular"
					IconLeft={Plus}>
					Добавить
				</MainButton>
				<MainButton
					variant="trivial"
					width="regular"
					onClick={() => setContacts([])}>
					Сбросить
				</MainButton>
			</div>

			<Input
				name="link"
				placeholder="https..."
				labelName="Ссылка на проект"
				className={styles.input_extra}
				description={true}
				descrText={
					'Добавьте ссылку на ваш проект, например: GitHub, приложение, веб страница и др.'
				}
				error={errors.link ? `${errors.link?.message}` : serverLinkError}
				value={linkProject}
				onChange={handleInputLinkProjectChange}
			/>
			<MainButton
				type="button"
				variant={'trivial'}
				width={'min'}
				disabled={false}
				onClick={handleClear}>
				{'Очистить'}
			</MainButton>

			<FormCreateProjectCard
				allSkills={allSkills}
				professions={professions}
				control={control}
				name="project_specialists"
				isSubmitSuccessfulReset={isSubmitSuccessfulReset}
				setSubmitSuccessfulReset={setSubmitSuccessfulReset}
			/>

			<div className={styles.buttons}>
				<MainButton
					type="submit"
					variant={'primary'}
					width={'regular'}
					disabled={false}
					onClick={() => setActionType('publish')}>
					{'Опубликовать'}
				</MainButton>
				<MainButton
					type="submit"
					variant={'secondary'}
					width={'regular'}
					disabled={false}
					onClick={() => setActionType('draft')}>
					{'Сохранить как черновик'}
				</MainButton>
			</div>
		</div>
	);
};
