'use client';

import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

import { Form } from '@/shared/ui/form/form';
import { MainButton, CheckboxAndRadio } from '@/shared/ui';

import { ProjectFilterType } from './types';
import styles from './project-filter.module.scss';

export const ProjectFilter: FC<ProjectFilterType> = ({
	isMobile,
	months,
	professions,
}) => {
	const { reset } = useForm();
	const [isExpandedMonthsList, setIsExpandedMonthsList] = useState(false);
	const [isExpandedProfessionsList, setIsExpandedProfessionsList] =
		useState(false);

	const handleSubmit = (data: React.FormEvent<HTMLFormElement>) => {
		console.log(data);
	};

	const handleReset = () => {
		reset();
	};

	const getMonthsList = (months: string[], isExpandedList: boolean) => {
		if (!isExpandedList) return months.slice(0, 6);
		return months;
	};

	const getProfessionsList = (
		professions: string[],
		isExpandedList: boolean
	) => {
		if (!isExpandedList) return professions.slice(0, 3);
		return professions;
	};

	const handleExpandMonthsList = () => {
		setIsExpandedMonthsList(!isExpandedMonthsList);
	};

	const handleExpandProfessionsList = () => {
		setIsExpandedProfessionsList(!isExpandedProfessionsList);
	};

	return (
		<Form className={styles.form} onSubmit={handleSubmit}>
			<h2 className={styles.title}>Фильтры</h2>
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
			<hr className={styles.divider} />
			<fieldset className={styles.fieldset}>
				<p className={styles.groupName}>Занятость</p>
				<div className={styles.inputContainer}>
					<CheckboxAndRadio
						labelName="10 часов в неделю"
						label="option10hours"
						id="option10hours"
						type="checkbox"
					/>
					<CheckboxAndRadio
						labelName="20 часов в неделю"
						label="option20hours"
						id="option20hours"
						type="checkbox"
					/>
					<CheckboxAndRadio
						labelName="30 часов в неделю"
						label="option30hours"
						id="option30hours"
						type="checkbox"
					/>
					<CheckboxAndRadio
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
					<CheckboxAndRadio
						labelName="Десктоп"
						label="optionDesctop"
						id="optionDesctop"
						type="checkbox"
					/>
					<CheckboxAndRadio
						labelName="Мобильная"
						label="optionMobile"
						id="optionMobile"
						type="checkbox"
					/>
					<CheckboxAndRadio
						labelName="Веб"
						label="optionWeb"
						id="optionWeb"
						type="checkbox"
					/>
				</div>
			</fieldset>
			<hr className={styles.divider} />
			{isMobile && (
				<>
					<fieldset className={styles.fieldset}>
						<p className={styles.groupName}>Статус проекта</p>
						<div className={clsx(styles.inputContainer, styles.row)}>
							<CheckboxAndRadio
								labelName="Активный"
								label="radioProjectStatus"
								id="radioActive"
								type="radio"
								value="Активный"
							/>
							<CheckboxAndRadio
								labelName="Завершенный"
								label="radioProjectStatus"
								id="radioFinished"
								type="radio"
								value="Завершенный"
							/>
						</div>
					</fieldset>
					<hr className={styles.divider} />
					<fieldset className={styles.fieldset}>
						<p className={styles.groupName}>Статус набора</p>
						<div className={clsx(styles.inputContainer, styles.row)}>
							<CheckboxAndRadio
								labelName="Набор открыт"
								label="radioRecruitmentStatus"
								id="radioOpen"
								type="radio"
								value="Набор открыт"
							/>
							<CheckboxAndRadio
								labelName="Набор закрыт"
								label="radioRecruitmentStatus"
								id="radioClosed"
								type="radio"
								value="Набор закрыт"
							/>
						</div>
					</fieldset>
					<hr className={styles.divider} />
					<fieldset className={styles.fieldset}>
						<p className={styles.groupName}>Дата</p>
						<div
							className={clsx(styles.inputContainer, {
								[styles.expandedList]: isExpandedMonthsList,
								[styles.notExpandedList]: !isExpandedMonthsList,
							})}>
							{getMonthsList(months, isExpandedMonthsList).map((m, ind) => {
								return (
									<CheckboxAndRadio
										key={ind}
										labelName={m}
										label={`optionMonth${ind}`}
										id={`optionMonth${ind}`}
										type="checkbox"
									/>
								);
							})}
						</div>
						<MainButton
							onClick={handleExpandMonthsList}
							type="button"
							variant="trivial"
							width="min">
							{isExpandedMonthsList ? 'Свернуть' : 'Развернуть'}
						</MainButton>
					</fieldset>
					<hr className={styles.divider} />
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
				</>
			)}
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
