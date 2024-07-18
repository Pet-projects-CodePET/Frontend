"use client"
	import React from 'react';
import styles from './project.module.scss';
import { Input, MainButton, TextEditor } from '@/shared/ui';
import {
	Availability,
	ProjectSpecification,
} from '@/entities/project-change-filter';
import { DatePickerRHF } from '@/shared/ui/date-picker-rhf/date-picker-rhf';
import { useFormContext } from 'react-hook-form';
import { SingleSelectInput } from '@/shared/ui/single-select-input/single-select-input';
import { CONTACTS } from '@/utils/constants';

export const ProjectEditForm = () => {
	const {control} = useFormContext()
	
	return (
		<>
			<h2 className={styles.formSettings__title}>Детали проекта</h2>
			<div className={styles.formSettings__listPassword}>
				<div>
					<h3 className={styles.formSettings__thirdTitle}>Название проекта</h3>
					<Input
						className={styles.formSettings__input}
						name="project-name"
						type="text"
						placeholder="Название проекта"
					/>
				</div>
				<div>
					<h3 className={styles.formSettings__thirdTitle}>Описание проекта</h3>
					<TextEditor labelName={''} />
				</div>
				<h3 className={styles.formSettings__thirdTitle}>Направление разработки</h3>
				<div className={styles.formSettings__blockContainer}>
					<ProjectSpecification />
				</div>
				<h3 className={styles.formSettings__thirdTitle}>Занятость</h3>
				<div className={styles.formSettings__blockContainer}>
					<Availability />
				</div>
			</div>
			<h3 className={styles.input_list_title}>Сроки проекта</h3>
			<div className={styles.dates_inputs}>
				<div className={styles.dates_input}>
					<p className={styles.dates_text}>Начало</p>
					<DatePickerRHF control={control} name="start" />
				</div>
				<div className={styles.dates_input}>
					<p className={styles.dates_text}>Окончание</p>
					<DatePickerRHF control={control} name="end" />
				</div>
			</div>

			<div className={styles.contacts}>
				<h3 className={styles.input_list_title}>Контакты для связи</h3>
				<div className={styles.contacts_selects}>
					<SingleSelectInput
						name="project_specialists"
						onChange={() => {}}
						options={CONTACTS}
						description="Выберите ресурс"
					/>
					<Input name="name" className={styles.input_extra} />
				</div>
			</div>

			<div className={styles.specialists_buttons}>
				<MainButton
					variant="secondary"
					width="regular"
					onClick={() => ({})}>
					Добавить
				</MainButton>
				<MainButton variant="trivial" width="regular" onClick={() => ({})}>
					Сбросить
				</MainButton>
			</div>
			<Input
				name="link"
				labelName="Ссылка на проект"
				className={styles.input_extra}
				description
				descrText="Добавьте ссылку на ваш проект, например: GitHub, приложение, веб страница и др."
			/>
			<MainButton variant="trivial" width="min" disabled={false}>
				Очистить
			</MainButton>
			<div className={styles.buttons}>
				<MainButton variant="primary" width="regular" disabled={false}>
					Опубликовать
				</MainButton>
				<MainButton variant="secondary" width="regular" disabled={false}>
					Сохранить как черновик
				</MainButton>
			</div>
			<div className={styles.formSettings__button}>
				<MainButton variant="primary" width="regular">
					Сохранить
				</MainButton>
			</div>
		</>
	);
};
