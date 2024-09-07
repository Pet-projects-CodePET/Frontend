'use client';
import React, { useState } from 'react';
import styles from './manage-specialist.specialist.module.scss';
import { Form, Toggler } from '@/shared/ui';
import { SingleSelectInput } from '@/shared/ui/single-select-input/single-select-input';
import { FormCreateProjectCard } from '@/entities/form-create-project-card';
import { MultiSelectInput } from '@/shared/ui/multi-select-input/multi-select-input';
import { LEVEL } from '@/utils/constants';
import { professions } from '@/shared/constants';

export const ManageSpecialists = () => {
	const [recruitmentIsOpen, setRecruitmentIsOpen] = useState(false)
	return (
		<Form className={styles.container} onSubmit={undefined}>
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
					options={professions?.map((specialization, index) => {
							return {
								label: index,
								value: specialization,
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
						options={[].map((skill: { id: number; name: string }) => {
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
			</div>
		</Form>
	);
};
