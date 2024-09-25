'use client';
import React from 'react';
import styles from './form-project.module.scss';
import { CheckboxAndRadio, Form, Input, MainButton } from '@/shared/ui';
import { TextEditor } from '@/shared/ui/text-editor/text-editor';
import { DEVELOPING, EMPLOYMENT } from '@/utils/constants';
import { DatePickerRHF } from '@/shared/ui/date-picker-rhf/date-picker-rhf';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Contacts } from '@/entities/contacts/contacts';
type FormValues = {
	name: string;
	contacts: { [key: string]: string }[]; // Dynamic contact keys
};

export const FormProject = () => {
	const { control } = useForm();

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		// Process the contacts array to map type to value
		const formattedContacts = data.contacts?.reduce((acc, contact) => {
			if (contact.type && contact.value) {
				acc[contact.type] = contact.value; // Make contact type the key
			}
			return acc;
		}, {} as { [key: string]: string });

		console.log('Formatted Contacts:', formattedContacts);
		console.log('Full Form Data:', { ...data, contacts: formattedContacts });
	};



	return (

		<Form className={styles.container} onSubmit={onSubmit}>
			<div className={styles.specialists}>
				<h1 className={styles.specialists_master_title}>Название проекта</h1>
				<div className={styles.input_list}>
					<Input
						name="name"
						
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
