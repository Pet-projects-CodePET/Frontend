'use client';

import React, { FC, useState } from 'react';
import styles from './form-create-project-card.module.scss';
import { IFormCreateProjectCard } from './types';
import { MultiSelectInput } from '@/shared/ui/multi-select-input/multi-select-input';
import Edit from '@/shared/assets/icons/edit-icon.svg';
import Delete from '@/shared/assets/icons/delete.svg';
import { SingleSelectInput } from '@/shared/ui/single-select-input/single-select-input';
import { MainButton, Counter, Toggler } from '@/shared/ui';

export const FormCreateProjectCard: FC<IFormCreateProjectCard> = () => {
	const [isEdit, setIsEdit] = useState(false);
	const [recruitmentIsOpen, setRecruitmentIsOpen] = useState(false);

	const handleIsEdit = () => {
		setIsEdit(!isEdit);
	};

	const handleDelete = () => {
		console.log(`delete --> `, 'delete');
	};

	return (
		<>
			<div className={styles.container}>
				<h3 className={styles.title}>
					UI/UX дизайнер / UI/UX Designer, Junior
				</h3>

				{!isEdit && (
					<button
						type="button"
						className={styles.card_button}
						onClick={handleIsEdit}>
						<Edit className={styles.icon} />
					</button>
				)}
				{isEdit && (
					<button
						type="button"
						className={styles.card_button}
						onClick={handleDelete}>
						<Delete className={styles.icon} />
					</button>
				)}

				{isEdit && (
					<>
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
					</>
				)}

				<div className={styles.config}>
					<Counter disabled={!recruitmentIsOpen} />
					<div className={styles.config_toggle}>
						<span>Набор {recruitmentIsOpen ? 'открыт' : 'закрыт'}</span>
						<Toggler
							checked={recruitmentIsOpen as boolean}
							name={'allow_notifications'}
							id={'allow_notifications'}
							onChange={(evt) => setRecruitmentIsOpen(evt.target.checked)}
						/>
					</div>
				</div>

				{isEdit && (
					<MainButton
						variant="secondary"
						width="regular"
						onClick={handleIsEdit}>
						Сохранить
					</MainButton>
				)}
			</div>
		</>
	);
};
