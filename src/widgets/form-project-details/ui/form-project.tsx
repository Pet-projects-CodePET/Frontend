'use client';
import React from 'react';
import styles from './form-project.module.scss';
import { CheckboxAndRadio, Form, Input, MainButton } from '@/shared/ui';
import { TextEditor } from '@/shared/ui/text-editor/text-editor';
import { DEVELOPING, EMPLOYMENT } from '@/utils/constants';
import { DatePickerRHF } from '@/shared/ui/date-picker-rhf/date-picker-rhf';
import { useForm } from 'react-hook-form';
import { Contacts } from '@/entities/contacts/contacts';

export const FormProject = () => {
	const { control } = useForm();

	const handleSubmit = (data) => {
		console.table(data);
	};

	return (
		<Form className={styles.container} onSubmit={handleSubmit}>
			<div className={styles.specialists}>
				<h1 className={styles.specialists_master_title}>Название проекта</h1>
				<div className={styles.input_list}>
					<Input
						name="name"
						required
						labelName="Название проекта"
						className={styles.input_extra}
					/>
					<TextEditor
						labelName={'Описание проекта'}
						name={'description'}
						desc={
							'Расскажите о проекте и его цели используя не более 750 символов'
						}
						control={control}
					/>
				</div>

				<div className={styles.directions}>
					<h3 className={styles.input_list_title}>Направление разработки</h3>
					<ul className={styles.directions_list}>
						{DEVELOPING?.map((profession) => (
							<li className={styles.directions_item} key={profession.id}>
								<CheckboxAndRadio
									labelName={profession.field}
									label={`professions`}
									type={'checkbox'}
									required
									id={`professions_${profession.id}`}
									name={'professions'}
								/>
							</li>
						))}
					</ul>
				</div>

				<div className={styles.employment}>
					<h3 className={styles.input_list_title}>Занятость</h3>
					<ul className={styles.employment_list}>
						{EMPLOYMENT.map((busyness) => (
							<li className={styles.directions_item} key={busyness.id}>
								<CheckboxAndRadio
									labelName={busyness.name}
									label={`busyness`}
									type={'radio'}
									required
									id={`busyness_${busyness.id}.`}
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
						<Contacts control={control} />
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
				<div className={styles.specialists_buttons}>
					<MainButton
						variant={'primary'}
						width={'min'}
						type="submit"
						disabled={false}>
						{'Submit'}
					</MainButton>
					<MainButton variant={'trivial'} width={'min'} disabled={false}>
						{'Очистить'}
					</MainButton>
				</div>
			</div>
		</Form>
	);
};
