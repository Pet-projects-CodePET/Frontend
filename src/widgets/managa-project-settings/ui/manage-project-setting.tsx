'use client';
import React from 'react';
import styles from './manage-project-setting.module.scss';
import { CheckboxAndRadio, Form, Input } from '@/shared/ui';
import { TextEditor } from '@/shared/ui/text-editor/text-editor';
import { DEVELOPING, EMPLOYMENT} from '@/utils/constants';

export const ManageProjectsSetting = () => {
	return (
		<Form className={styles.container} onSubmit={undefined}>
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
								type={'checkbox'}
								id={`busyness_${busyness.id}.`}
								name={'busyness'}
							/>
						</li>
					))}
				</ul>
			</div>
		</Form>
	);
};
