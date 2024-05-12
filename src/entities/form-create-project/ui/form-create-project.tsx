'use client';

import React, { FC, useState } from 'react';
import type { direction } from '@/entities/form-create-project/ui/types';
import { FormCreateProjectProps } from '@/entities/form-create-project/ui/types'; // import { useGetDirectionsQuery } from '@/services/ProjectService';
import { Input, MainButton, CheckboxAndRadio } from '@/shared/ui';

import styles from './form-create-project.module.scss';
import { useFormContext } from 'react-hook-form';
import { TextEditor } from '@/shared/ui/text-editor/text-editor';
import { ToggleCheckbox } from '@/shared/ui/toggle-checkbox/toggle-checkbox';
import { SingleSelectInput } from '@/shared/ui/single-select-input/single-select-input';
import Plus from '@/shared/assets/icons/plus-large.svg';
import { MultiSelectInput } from '@/shared/ui/multi-select-input/multi-select-input';
import { DatePickerRHF } from '@/shared/ui/date-picker-rhf/date-picker-rhf'; //todo когда сделают бекенд добавить это

//todo когда сделают бекенд добавить это
// const { data: directions } = useGetDirectionsQuery([]);
// import { useGetDirectionsQuery } from '@/services/ProjectService';

export const FormFieldsCreateProject: FC<FormCreateProjectProps> = () => {
	const [status, setStatus] = useState(true);
	//todo добавить в запрос токен или подождать когда бекенд его уберет
	// const { data: directions } = useGetDirectionsQuery([]);
	const directionsStatic = [
		{
			id: 1,
			name: 'Десктоп',
		},
		{
			id: 2,
			name: 'Мобильная',
		},
		{
			id: 3,
			name: 'Веб',
		},
	];

	const busynessStatic = [
		{
			id: 1,
			name: '10 часов в неделю',
		},
		{
			id: 1,
			name: '20 часов в неделю',
		},
		{
			id: 1,
			name: '30 часов в неделю',
		},
		{
			id: 1,
			name: '40 часов в неделю',
		},
	];

	const { control } = useFormContext();
	const handlerStatus = () => {
		return setStatus(!status);
	};

	return (
		<div className={styles.container}>
			<div className={styles.input_list}>
				<Input
					name="name"
					labelName="Название проекта"
					className={styles.input_extra}
				/>
				<TextEditor
					labelName={'Описание проекта'}
					desc={
						'Расскажите о проекте и его цели используя не более 750 символов'
					}
				/>
			</div>

			<div className={styles.directions}>
				<h3 className={styles.input_list_title}>Направление разработки</h3>
				<ul className={styles.directions_list}>
					{/* todo когда сделают бекенд изменить directionsStatic на directions */}
					{directionsStatic.map((direction: direction, index: number) => (
						<li className={styles.directions_item} key={index}>
							<CheckboxAndRadio
								labelName={direction.name}
								name={`directions.${index}.`}
								type={'checkbox'}
								id={`${index}`}
							/>
						</li>
					))}
				</ul>
			</div>

			<div className={styles.specialists}>
				<h3 className={styles.input_list_title}>Кто нужен в проект</h3>
				<div className={styles.specialists_toggle}>
					<span>Набор открыт</span>
					{/* todo статус не переключается, посмотреть onChange */}
					<ToggleCheckbox
						name={'recruitment_status'}
						variant={'defaultOn'}
						onChange={handlerStatus}
						checked={status}
					/>
				</div>
				<SingleSelectInput
					name={`project_specialists`}
					label={'Специальность'}
					onChange={() => {}}
					options={[]}
					description="Выберите одну специальность"
					isSearchable
				/>
				<div>
					<MultiSelectInput
						name={`project_specialists`}
						onChange={() => {}}
						options={[]}
						values={[]}
						label={'Уровень квалификации'}
					/>
				</div>
				<div>
					<MultiSelectInput
						name={`project_specialists`}
						onChange={() => {}}
						options={[]}
						values={[]}
						label={'Навыки'}
						description="Выберите не более 15 навыков"
					/>
				</div>
				<div className={styles.specialists_buttons}>
					<MainButton
						variant="secondary"
						width="regular"
						IconLeft={Plus}
						onClick={() => ({})}>
						Добавить
					</MainButton>
					<MainButton variant="trivial" width="regular" onClick={() => ({})}>
						Сбросить
					</MainButton>
				</div>
			</div>

			<div className={styles.employment}>
				<h3 className={styles.input_list_title}>Занятость</h3>
				<ul className={styles.employment_list}>
					{/* todo когда сделают бекенд изменить directionsStatic на directions */}
					{busynessStatic.map((busyness: direction, index: number) => (
						<CheckboxAndRadio
							key={index}
							labelName={busyness.name}
							name={`employment`}
							type="radio"
							id={`busyness-${index}`}
						/>
					))}
				</ul>
			</div>

			<div className={styles.dates}>
				<h3 className={styles.input_list_title}>Сроки проекты</h3>
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
			</div>

			<div className={styles.contacts}>
				<h3 className={styles.input_list_title}>Контакты для связи</h3>
				<div className={styles.contacts_selects}>
					<SingleSelectInput
						name={`project_specialists`}
						onChange={() => {}}
						options={[]}
						description={'Выберите ресурс'}
					/>
					<Input name="name" className={styles.input_extra} />
				</div>
			</div>

			<Input
				name="link"
				labelName="Ссылка на проект"
				className={styles.input_extra}
				description={true}
				descrText={
					'Добавьте ссылку на ваш проект, например: GitHub, приложение, веб страница и др.'
				}
			/>

			<MainButton variant={'trivial'} width={'min'} disabled={false}>
				{'Очистить'}
			</MainButton>

			<div className={styles.buttons}>
				<MainButton variant={'primary'} width={'regular'} disabled={false}>
					{'Опубликовать'}
				</MainButton>
				<MainButton variant={'secondary'} width={'regular'} disabled={false}>
					{'Сохранить как черновик'}
				</MainButton>
			</div>
		</div>
	);
};
