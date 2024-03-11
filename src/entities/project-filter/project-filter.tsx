'use client';

import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@/shared/ui/form/form';
import { MainButton, Checkbox } from '@/shared/ui';
import { CloseIcon } from '@/shared/assets';

import styles from './project-filter.module.scss';

type ProjectFilterType = {
	// handleSubmit: (data: React.FormEvent<HTMLFormElement>) => void;
};

export const ProjectFilter: FC<ProjectFilterType> = () => {
	const { reset } = useForm();

	const handleSubmit = (data: React.FormEvent<HTMLFormElement>) => {
		console.log(data);
	};

	const handleCloseFilter = () => {
		console.log('закрытие фильтра');
	};

	const handleReset = () => {
		reset();
	};

	return (
		<Form className={styles.form} onSubmit={handleSubmit}>
			<CloseIcon onClick={handleCloseFilter} className={styles.closeIcon} />
			<h2 className={styles.title}>Фильтры</h2>
			<fieldset className={styles.fieldset}>
				<p className={styles.groupName}>Уровень квалификации</p>
				<div className={styles.inputContainer}>
					<Checkbox
						labelName="Junior"
						label="optionJunior"
						id="optionJunior"
						type="checkbox"
					/>
					<Checkbox
						labelName="Middle"
						label="optionMiddle"
						id="optionMiddle"
						type="checkbox"
					/>
					<Checkbox
						labelName="Senior"
						label="optionSenior"
						id="optionSenior"
						type="checkbox"
					/>
					<Checkbox
						labelName="Lead"
						label="optionLead"
						id="optionLead"
						type="checkbox"
					/>
				</div>
			</fieldset>
			<hr className={styles.divider} />
			<fieldset className={styles.fieldset}>
				<p className={styles.groupName}>Занятость</p>
				<div className={styles.inputContainer}>
					<Checkbox
						labelName="10 часов в неделю"
						label="option10hours"
						id="option10hours"
						type="checkbox"
					/>
					<Checkbox
						labelName="20 часов в неделю"
						label="option20hours"
						id="option20hours"
						type="checkbox"
					/>
					<Checkbox
						labelName="30 часов в неделю"
						label="option30hours"
						id="option30hours"
						type="checkbox"
					/>
					<Checkbox
						labelName="40 часов в неделю"
						label="option40hours"
						id="option40hours"
						type="checkbox"
					/>
				</div>
			</fieldset>
			<hr className={styles.divider} />
			<fieldset className={styles.fieldset}>
				<p className={styles.groupName}>Направление разработки</p>
				<div className={styles.inputContainer}>
					<Checkbox
						labelName="Десктоп"
						label="optionDesctop"
						id="optionDesctop"
						type="checkbox"
					/>
					<Checkbox
						labelName="Мобильная"
						label="optionMobile"
						id="optionMobile"
						type="checkbox"
					/>
					<Checkbox
						labelName="Веб"
						label="optionWeb"
						id="optionWeb"
						type="checkbox"
					/>
				</div>
			</fieldset>
			<hr className={styles.divider} />
			<div className={styles.buttonsContainer}>
				<MainButton variant="primary" width="regular">
					Применить фильтры
				</MainButton>
				<MainButton
					onClick={handleReset}
					type="button"
					variant="secondary"
					width="regular">
					Сбросить все фильтры
				</MainButton>
			</div>
		</Form>
	);
};
