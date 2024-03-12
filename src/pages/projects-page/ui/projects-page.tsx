'use client';

import React from 'react';
import { ProjectCardFull } from '@/widgets/project-card-full';
import { MultiSelect } from '@/shared/ui/multi-select/multi-select';
import { statusOptions } from '@/shared/constants/status-options/status-options';
import { projectsArray } from '@/shared/constants/projects/projects';
import { recruitmentStatus } from '@/shared/constants/recruitment-status/recruitment-status';
import { months } from '@/shared/constants/months/months';
import styles from './projects-page.module.scss';
import { Option } from '@/shared/types/option';
import { SingleSelect } from '@/shared/ui/single-select/single-select';
import { specialties } from '@/shared/constants/specialties/specialties';
import { MultiSelectWithDisable } from '@/shared/ui/multi-select-with-disable/multi-select-with-disable';
import { MultiSelectWithFilter } from '@/shared/ui/multi-select-with-filter/multi-select-with-filter';
import { skills } from '@/shared/constants/skills/skills';

export const Projects = () => {
	const handleMonthChange = (selectedItems: Option[]) => {
		console.info('selected options: ', selectedItems);
	};

	const handleStatusProjectChange = (selectedOptions: Option[]) => {
		console.info('selected option: ', selectedOptions?.[0]);
	};

	const handleRecruitmentStatusChange = (selectedOptions: Option[]) => {
		console.info('selected option: ', selectedOptions?.[0]);
	};

	const handleSpecialtiesChange = (selectedItems: Option[]) => {
		console.info('selected options: ', selectedItems);
	};

	const handleSkillsChange = (selectedItems: Option[]) => {
		console.info('selected options: ', selectedItems);
	};

	return (
		<>
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
				/>
				<SingleSelect
					name="select-recruitment-status"
					options={recruitmentStatus}
					buttonLabel="Статус набора"
					value={undefined}
					onChange={handleRecruitmentStatusChange}
				/>
				<MultiSelectWithDisable
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
				/>
				<MultiSelectWithFilter
					name="select-skills"
					caption="Навыки"
					options={skills}
					values={[]}
					onChange={handleSkillsChange}
					maxSelections={5}
				/>
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
	);
};
