'use client';

import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@/shared/ui/form/form';
import { Input, MainButton } from '@/shared/ui';
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
					<Input
						className={styles.inputLabel}
						labelName="Junior"
						label="optionJunior"
						type="checkbox"
					/>
					<Input
						className={styles.inputLabel}
						labelName="Middle"
						label="optionMiddle"
						type="checkbox"
					/>
					<Input
						className={styles.inputLabel}
						labelName="Senior"
						label="optionSenior"
						type="checkbox"
					/>
					<Input
						className={styles.inputLabel}
						labelName="Lead"
						label="optionLead"
						type="checkbox"
					/>
				</div>
			</fieldset>
			<hr className={styles.divider} />
			<fieldset className={styles.fieldset}>
				<p className={styles.groupName}>Занятость</p>
				<div className={styles.inputContainer}>
					<Input
						className={styles.inputLabel}
						labelName="10 часов в неделю"
						label="option10hours"
						type="checkbox"
					/>
					<Input
						className={styles.inputLabel}
						labelName="20 часов в неделю"
						label="option20hours"
						type="checkbox"
					/>
					<Input
						className={styles.inputLabel}
						labelName="30 часов в неделю"
						label="option30hours"
						type="checkbox"
					/>
					<Input
						className={styles.inputLabel}
						labelName="40 часов в неделю"
						label="option40hours"
						type="checkbox"
					/>
				</div>
			</fieldset>
			<hr className={styles.divider} />
			<fieldset className={styles.fieldset}>
				<p className={styles.groupName}>Направление разработки</p>
				<div className={styles.inputContainer}>
					<Input
						className={styles.inputLabel}
						labelName="Десктоп"
						label="optionDesctop"
						type="checkbox"
					/>
					<Input
						className={styles.inputLabel}
						labelName="Мобильная"
						label="optionMobile"
						type="checkbox"
					/>
					<Input
						className={styles.inputLabel}
						labelName="Веб"
						label="optionWeb"
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
