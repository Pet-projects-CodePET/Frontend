import React, { useState } from 'react';
import { Form } from '@/shared/ui/form/form';
import { useForm } from 'react-hook-form';
import { MainButton, CheckboxAndRadio } from '@/shared/ui';
import { IUser } from '@/services/models/IUser';
import { professions } from '@/shared/constants';
import { Input } from '@/shared/ui';
import clsx from 'clsx';
import styles from './specialists-filter.module.scss';

export const SpecialistsFilter = () => {
	const { reset } = useForm();
	const handleSubmit = (data: React.FormEvent<HTMLFormElement> | IUser) => {
		console.log(data);
	};

	const handleReset = () => {
		reset();
	};

	const [isExpandedProfessionsList, setIsExpandedProfessionsList] =
		useState(false);
	const getProfessionsList = (
		professions: string[],
		isExpandedList: boolean
	) => {
		if (!isExpandedList) return professions.slice(0, 3);
		return professions;
	};

	const handleExpandProfessionsList = () => {
		setIsExpandedProfessionsList(!isExpandedProfessionsList);
	};

	return (
		<Form className={styles.form} onSubmit={handleSubmit}>
			<h2 className={styles.title}>Фильтры</h2>
			<fieldset className={styles.fieldset}>
				<p className={styles.groupName}>Статус специалиста</p>
				<div className={styles.inputContainer}>
					<CheckboxAndRadio
						labelName="Готов(а) к участию в проектах"
						label="radioReadyStatus"
						id="radioReady"
						type="radio"
						value="Готов(а) к участию в проектах"
					/>
					<CheckboxAndRadio
						labelName="Не готов(а) к участию в проектах"
						label="radioReadyStatus"
						id="radioNotReady"
						type="radio"
						value="Не готов(а) к участию в проектах"
					/>
				</div>
			</fieldset>
			<fieldset className={styles.fieldset}>
				<p className={styles.groupName}>Уровень квалификации</p>
				<div className={styles.inputContainer}>
					<CheckboxAndRadio
						labelName="Junior"
						label="optionJunior"
						id="optionJunior"
						type="checkbox"
					/>
					<CheckboxAndRadio
						labelName="Middle"
						label="optionMiddle"
						id="optionMiddle"
						type="checkbox"
					/>
					<CheckboxAndRadio
						labelName="Senior"
						label="optionSenior"
						id="optionSenior"
						type="checkbox"
					/>
					<CheckboxAndRadio
						labelName="Lead"
						label="optionLead"
						id="optionLead"
						type="checkbox"
					/>
				</div>
			</fieldset>
			<fieldset className={styles.fieldset}>
				<p className={styles.groupName}>Специальность</p>
				<div className={clsx(styles.inputContainer, styles.flexColumn)}>
					{getProfessionsList(professions, isExpandedProfessionsList).map(
						(p, ind) => {
							return (
								<CheckboxAndRadio
									key={ind}
									labelName={p}
									label={`optionProfession${ind}`}
									id={`optionProfession${ind}`}
									type="checkbox"
								/>
							);
						}
					)}
				</div>
				<MainButton
					onClick={handleExpandProfessionsList}
					type="button"
					variant="trivial"
					width="min">
					{isExpandedProfessionsList ? 'Свернуть' : 'Развернуть'}
				</MainButton>
			</fieldset>
			<fieldset className={styles.fieldset}>
				<p className={styles.groupName}>Навыки</p>
				<Input
					name="skills"
					labelName=" "
					description={true}
					descrText="Не более 5 навыков"
				/>
			</fieldset>
			<div className={styles.buttonsContainer}>
				<div>
					<MainButton variant="primary" width="max">
						Применить фильтры
					</MainButton>
				</div>
				<div>
					<MainButton
						onClick={handleReset}
						type="button"
						variant="secondary"
						width="max">
						Сбросить все фильтры
					</MainButton>
				</div>
			</div>
		</Form>
	);
};
