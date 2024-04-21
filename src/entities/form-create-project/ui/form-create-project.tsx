'use client';

import React, { FC, useState } from 'react';
import type { direction } from '@/entities/form-create-project/ui/types';
import { FormCreateProjectProps } from '@/entities/form-create-project/ui/types'; // import { useGetDirectionsQuery } from '@/services/ProjectService';
import { Input, MainButton, CheckboxAndRadio } from '@/shared/ui';

import styles from './form-create-project.module.scss';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { TextEditor } from '@/shared/ui/text-editor/text-editor';
import { ToggleCheckbox } from '@/shared/ui/toggle-checkbox/toggle-checkbox';
import { SingleSelectInput } from '@/shared/ui/single-select-input/single-select-input';
import Plus from '@/shared/assets/icons/plus-large.svg';
import { MultiSelectInput } from '@/shared/ui/multi-select-input/multi-select-input'; //todo когда сделают бекенд добавить это

//todo когда сделают бекенд добавить это
// const { data: directions } = useGetDirectionsQuery([]);
// import { useGetDirectionsQuery } from '@/services/ProjectService';

export const FormFieldsCreateProject: FC<FormCreateProjectProps> = () => {
	const {
		formState: { isValid, errors },
	} = useFormContext();

	const [status, setStatus] = useState(true);
	//todo добавить в запрос токен или подождать когда бекенд его уберет
	// const { data: directions } = useGetDirectionsQuery([]);
	const directionsStatic = [
		{
			id: 1,
			name: 'Десктоп',
		},
		{
			id: 1,
			name: 'Мобильная',
		},
		{
			id: 1,
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

	const { fields, append, remove } = useFieldArray({
		name: 'specialists',
	});

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
					error={errors.email ? `${errors.email?.message}` : ''}
				/>
				<TextEditor
					labelName={'Описание проекта'}
					desc={
						'Расскажите о проекте и его цели используя не более 750 символов'
					}
				/>

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
						name={`project_specialists.${0}`}
						label={'Специальность'}
						onChange={() => {}}
						options={[]}
						description="Выберите одну специальность"
					/>
					<MultiSelectInput
						name={`project_specialists.${0}`}
						onChange={() => {}}
						options={[]}
						values={[]}
						label={'Уровень квалификации'}
					/>
					<MultiSelectInput
						name={`project_specialists.${0}`}
						onChange={() => {}}
						options={[]}
						values={[]}
						label={'Навыки'}
						description="Выберите не более 15 навыков"
					/>

					{fields.map((field, index) => (
						<>
							<SingleSelectInput
								key={field.id}
								name={`project_specialists.${++index}`}
								label={'Специальность'}
								onChange={() => {}}
								options={[]}
								description="Выберите одну специальность"
								isSearchable
							/>
							<MultiSelectInput
								name={`project_specialists.${++index}`}
								onChange={() => {}}
								options={[]}
								values={[]}
								label={'Уровень квалификации'}
							/>
							<MultiSelectInput
								name={`project_specialists.${++index}`}
								onChange={() => {}}
								options={[]}
								values={[]}
								label={'Навыки'}
								description="Выберите не более 15 навыков"
							/>
						</>
					))}
					{fields.length < 5 && (
						<div className={styles.specialists_buttons}>
							<MainButton
								variant="secondary"
								width="regular"
								IconLeft={Plus}
								onClick={() => append({})}>
								Добавить
							</MainButton>
							<MainButton
								variant="trivial"
								width="regular"
								onClick={() => remove(fields.length - 1)}>
								Сбросить
							</MainButton>
						</div>
					)}
				</div>

				<div className={styles.directions}>
					<h3 className={styles.input_list_title}>Занятость</h3>
					<ul className={styles.directions_list}>
						{/* todo когда сделают бекенд изменить directionsStatic на directions */}
						{busynessStatic.map((busyness: direction, index: number) => (
							<CheckboxAndRadio
								key={index}
								labelName={busyness.name}
								name={`busyness`}
								type="radio"
								id={`busyness-${index}`}
							/>
						))}
					</ul>
				</div>

				<MainButton variant={'primary'} width={'max'} disabled={!isValid}>
					{'Создать аккаунт'}
				</MainButton>
			</div>
		</div>
	);
};
