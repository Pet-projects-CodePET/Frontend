/* eslint-disable camelcase */
'use client';

import React, { useState, useMemo } from 'react'; //useMemo
import { ProjectCardFull } from '@/widgets/project-card-full';
import { statusOptions } from '@/shared/constants/status-options/status-options';
import { recruitmentStatus } from '@/shared/constants/recruitment-status/recruitment-status';
import { months2, professions } from '@/shared/constants';
import { months } from '@/shared/constants/months/months';
import { ProjectFilter } from '@/entities/project-filter';
import { PopUp } from '@/shared/ui/pop-up/pop-up';
import { MainButton } from '@/shared/ui';
import { FilterIcon } from '@/shared/assets';
import { useMediaQuery } from '@/shared/hooks';
import { specialties } from '@/shared/constants/specialties/specialties';
import { skills } from '@/shared/constants/skills/skills';
import { Tooltip } from '@/widgets/tooltip';
import { InputSearch } from '@/shared/ui/input-search/input-search';
import Link from 'next/link';
import { Pagination } from '@/entities/pagination/ui/pagination';
import { SingleSelectButton } from '@/shared/ui/single-select-button/single-select-button';
import { MultiSelectButton } from '@/shared/ui/multi-select-button/multi-select-button';
import { useGetAllProjectsQuery } from '@/services/ProjectService';
import { ProjectCardFullType } from '@/widgets/project-card-full/ui/type';
import styles from './projects-page.module.scss';

export const Projects = () => {
	
	const { data: projects } = useGetAllProjectsQuery([]);
	console.log('projects', projects);

	const pageSize = 3;
	const [currentPage, setCurrentPage] = useState(1);
	const currentData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * pageSize;
		const lastPageIndex = firstPageIndex + pageSize;
		return projects?.results.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);
	console.log('currentData', currentData);

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
		//console.log(currentData);
	};

	return (
		<>
		 <div className={styles.pageContainer}>
				<div className={styles.projects__container}>
					<h1 className={styles.projects__title}>Проекты</h1>
					<div className={styles.projects__inputSearch}>
						<InputSearch search={() => {}} onChange={() => {}} />

						<button
							className={styles.projects__filterButton}
							onClick={() => setIsPopupOpen(true)}>
							<FilterIcon />
						</button>
					</div>
				</div>
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
								<SingleSelectButton
									name="select-status"
									options={statusOptions}
									buttonLabel="Статус проекта"
									value={{ value: 'completed', label: 'Завершенный' }}
									onChange={handleStatusProjectChange}
								/>
								<MultiSelectButton
									name="select-months"
									caption="Дата"
									options={months}
									values={[]}
									onChange={handleMonthChange}
									selectedAll={true}
									buttonWidth={114}
								/>
								<SingleSelectButton
									name="select-recruitment-status"
									options={recruitmentStatus}
									buttonLabel="Статус набора"
									value={undefined}
									onChange={handleRecruitmentStatusChange}
								/>
								<Tooltip text="Не более 2 специальностей">
									<MultiSelectButton
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
									<MultiSelectButton
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
							{isMobile ? null : (
								<MainButton
									variant="primary"
									width="regular"
									onClick={() => setIsPopupOpen(true)}
									IconLeft={FilterIcon}>
									Фильтры
								</MainButton>
							)}
						</div>

						<div className={styles.projectsContainer}>
							{projects?.results.map((project: ProjectCardFullType) => {
								
								const {
									id,
									started,
									ended,
									name,
									directions,
									description,
									status,
									recruitment_status,
									project_specialists,
								} = project;
								return (
									<>
										<Link
											href={`projects/${id}`}
											className={styles.linkProject}>
											<ProjectCardFull
												description={description}
												ended={ended}
												started={started as string}
												name={name}
												directions={directions}
												status={status}
												key={id}
												recruitment_status={recruitment_status}
												project_specialists={project_specialists}
											/>
										</Link>
									</>
								);
							})}
						</div>
						<Pagination
							onPageChange={(page) => setCurrentPage(Number(page))}
							totalCount={currentData?.length}
							currentPage={currentPage}
							pageSize={pageSize}
						/>
					</>
				) : null}
			</div>
			
		</>
	);
};
