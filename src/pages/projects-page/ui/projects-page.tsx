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
				/>
				<SingleSelect
					name="select-recruitment-status"
					options={recruitmentStatus}
					buttonLabel="Статус набора"
					value={undefined}
					onChange={handleRecruitmentStatusChange}
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
