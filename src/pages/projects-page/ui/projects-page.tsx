'use client';

import React from 'react';
import { ProjectCardFull } from '@/widgets/project-card-full';
// import { SingleSelect } from '@/shared/ui/single-select/single-select';
import { MultiSelect } from '@/shared/ui/multi-select/multi-select';
// import { statusOptions } from '@/shared/constants/status-options/status-options';
import { projectsArray } from '@/shared/constants/projects/projects';
// import { recruitmentStatus } from '@/shared/constants/recruitment-status/recruitment-status';
import { months } from '@/shared/constants/months/months';
import styles from './projects-page.module.scss';
import { Option } from '@/shared/types/option';

export const Projects = () => {
	const handleChange = (selectedItems: Option[]) => {
		console.info(selectedItems);
	};

	return (
		<>
			<div className={styles.filterContainer}>
				{/* <SingleSelect
					name="select-status"
					caption="Статус проекта"
					options={statusOptions}
					selectedOption={null}
				/> */}
				<MultiSelect
					name="select-months"
					caption="Дата"
					options={months}
					values={[]}
					onChange={handleChange}
				/>
				{/* <SingleSelect
					name="select-recruitment-status"
					caption="Статус набора"
					options={recruitmentStatus}
					selectedOption={null}
				/> */}
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
