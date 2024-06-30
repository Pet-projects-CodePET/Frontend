'use client';

import React, { FC, useState } from 'react';
import { FormCreateProjectProps } from '@/entities/form-create-project/ui/types'; // import { useGetDirectionsQuery } from '@/services/ProjectService';
import styles from './form-create-project.module.scss';
import { TextEditor } from '@/shared/ui/text-editor/text-editor';
import { SingleSelectInput } from '@/shared/ui/single-select-input/single-select-input';
import Plus from '@/shared/assets/icons/plus-large.svg';
import { DatePickerRHF } from '@/shared/ui/date-picker-rhf/date-picker-rhf';
import { Input, MainButton, Toggler, CheckboxAndRadio } from '@/shared/ui';
import { useFormContext } from 'react-hook-form';
import { MultiSelectInput } from '@/shared/ui/multi-select-input/multi-select-input';
import { FormCreateProjectCard } from '@/entities/form-create-project-card';
import {
	useGetProfessionsQuery,
	useGetSkillsQuery,
} from '@/services/ProjectService';
import { LEVEL, BUSYNESS, CONTACTS } from '@/utils/constants';

export const FormFieldsCreateProject: FC<FormCreateProjectProps> = () => {
	const { data: professions } = useGetProfessionsQuery([]);
	const { data: skills } = useGetSkillsQuery([]);
	const { control } = useFormContext();
	const [recruitmentIsOpen, setRecruitmentIsOpen] = useState(false);

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
					{professions?.map(
						(profession: { id: number; specialty: string }, index: number) => (
							<li className={styles.directions_item} key={index}>
								<CheckboxAndRadio
									labelName={profession.specialty}
									label={`professions`}
									type={'checkbox'}
									id={`professions_${index}`}
									name={'professions'}
								/>
							</li>
						)
					)}
				</ul>
			</div>

			<div className={styles.specialists}>
				<h3 className={styles.input_list_title}>Кто нужен в проект</h3>
				<div className={styles.specialists_toggle}>
					<span>Набор {recruitmentIsOpen ? 'открыт' : 'закрыт'}</span>
					<Toggler
						checked={recruitmentIsOpen as boolean}
						name={'allow_notifications'}
						id={'allow_notifications'}
						onChange={(evt) => setRecruitmentIsOpen(evt.target.checked)}
					/>
				</div>

				<FormCreateProjectCard />

				<SingleSelectInput
					name={`project_specialists`}
					label={'Специальность'}
					onChange={() => {}}
					options={professions?.map(
						(profession: { id: number; specialization: string }) => {
							return {
								label: profession.specialization,
								value: profession.specialization,
							};
						}
					)}
					description="Выберите одну специальность"
					isSearchable
				/>

				<div>
					<MultiSelectInput
						name={`project_specialists`}
						onChange={() => {}}
						options={LEVEL}
						values={[]}
						label={'Уровень квалификации'}
						isSearchable
					/>
				</div>

				<div>
					<MultiSelectInput
						isSearchable
						name={`project_specialists`}
						onChange={() => {}}
						options={skills?.map((skill: { id: number; name: string }) => {
							return {
								label: skill.name,
								value: skill.name,
							};
						})}
						values={[]}
						label={'Навыки'}
						description="Выберите не более 15 навыков"
						maxSelections={15}
					/>
				</div>

				<div className={styles.employment}>
					<h3 className={styles.input_list_title}>Занятость</h3>
					<ul className={styles.employment_list}>
						{BUSYNESS.map((busyness, index: number) => (
							<li className={styles.directions_item} key={index}>
								<CheckboxAndRadio
									labelName={busyness.name}
									label={`busyness`}
									type={'checkbox'}
									id={`busyness_${index}.`}
									name={'busyness'}
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
							options={CONTACTS}
							description={'Выберите ресурс'}
						/>
						<Input name="name" className={styles.input_extra} />
					</div>
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
