'use client';

import React, { useState } from 'react';

import { ProjectCardFull } from '@/widgets/project-card-full';
import { MultiSelect } from '@/shared/ui/multi-select/multi-select';
import { statusOptions } from '@/shared/constants/status-options/status-options';
import { projectsArray } from '@/shared/constants/projects/projects';
import { recruitmentStatus } from '@/shared/constants/recruitment-status/recruitment-status';
import { months2, professions } from '@/shared/constants';
import { months } from '@/shared/constants/months/months';
import { SingleSelect } from '@/shared/ui/single-select/single-select';
import { ProjectFilter } from '@/entities/project-filter';
import { PopUp } from '@/shared/ui/pop-up/pop-up';
import { MainButton } from '@/shared/ui';
import { FilterIcon } from '@/shared/assets';
import { useMediaQuery } from '@/shared/hooks';

import styles from './projects-page.module.scss';
import { specialties } from '@/shared/constants/specialties/specialties';
import { skills } from '@/shared/constants/skills/skills';
import { Tooltip } from '@/widgets/tooltip';

export const Projects = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const isMobile = useMediaQuery('(max-width:779px)');

	const handleStatusProjectChange = (selectedOptions: (string | object)[]) => {
		console.info('selected option: ', selectedOptions?.[0]);
	};

	const handleMonthChange = (selectedItems: object) => {
		console.info('selected options: ', selectedItems);
	};

	const handleRecruitmentStatusChange = (
		selectedOptions: (string | object)[]
	) => {
		console.info('selected option: ', selectedOptions?.[0]);
	};

	const handleSpecialtiesChange = (selectedItems: object) => {
		console.info('selected options: ', selectedItems);
	};

	const handleSkillsChange = (selectedItems: object) => {
		console.info('selected options: ', selectedItems);
	};

	return (
		<>
			<PopUp
				visible={isPopupOpen}
				title=""
				onClose={() => setIsPopupOpen(false)}>
				<ProjectFilter
					isMobile={isMobile}
					months={months2}
					professions={professions}
				/>
			</PopUp>
			{(isMobile && !isPopupOpen) || !isMobile ? (
				<>
					<div className={styles.allFilterContainer}>
						<div className={styles.filterContainer}>
							<SingleSelect
								name="select-status"
								options={statusOptions}
								buttonLabel="Статус проекта"
								value={{ value: 'completed', label: 'Завершенный' }}
								onChange={handleStatusProjectChange}
							/>
							<MultiSelect
								name="select-months"
								caption="Дата"
								options={months}
								values={[]}
								onChange={handleMonthChange}
								selectedAll={true}
								buttonWidth={114}
							/>
							<SingleSelect
								name="select-recruitment-status"
								options={recruitmentStatus}
								buttonLabel="Статус набора"
								value={undefined}
								onChange={handleRecruitmentStatusChange}
							/>
							<Tooltip text="Не более 2 специальностей">
								<MultiSelect
									name="select-specialties"
									caption="Специальность"
									options={specialties}
									values={[
										{
											value: 'software-developer',
											label: 'Десктоп разработчик / Software Developer',
										},
										{
											value: 'performance-engineer',
											label:
												'Инженер по нагрузочному тестированию / Performance Engineer',
										},
									]}
									onChange={handleSpecialtiesChange}
									maxSelections={2}
									buttonWidth={207}
									tooltip="Не более 2 специальностей"
								/>
							</Tooltip>
							<Tooltip text="Не более 5 навыков">
								<MultiSelect
									name="select-skills"
									caption="Навыки"
									options={skills}
									values={[]}
									onChange={handleSkillsChange}
									maxSelections={5}
									buttonWidth={131}
									isSearchable
									tooltip="Не более 5 навыков"
								/>
							</Tooltip>
						</div>
						<MainButton
							variant="primary"
							width="regular"
							onClick={() => setIsPopupOpen(true)}
							IconLeft={FilterIcon}>
							Фильтры
						</MainButton>
					</div>
					<div className={styles.projectsContainer}>
						{projectsArray.map((project) => {
							return (
								<ProjectCardFull
									isActiveProject={project.isActiveProject}
									professions={project.professions}
									skills={project.skills}
									description={project.description}
									duration={project.duration}
									title={project.title}
									subtitle={project.subtitle}
									key={project.id}
								/>
							);
						})}
					</div>
				</>
			) : null}
		</>
	);
};
