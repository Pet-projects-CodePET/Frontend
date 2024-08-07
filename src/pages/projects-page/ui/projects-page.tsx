/* eslint-disable camelcase */
'use client';
import React, { useState, /*useMemo*/ useEffect } from 'react';
import { ProjectCardFull } from '@/widgets/project-card-full';
import { statusOptions } from '@/shared/constants/status-options/status-options';
import { recruitmentStatus } from '@/shared/constants/recruitment-status/recruitment-status';
import { months2, professions } from '@/shared/constants';
import { ProjectFilter } from '@/entities/project-filter';
import { PopUp } from '@/shared/ui/pop-up/pop-up';
import { MainButton } from '@/shared/ui';
import { FilterIcon } from '@/shared/assets';
import { useMediaQuery } from '@/shared/hooks';
import { specialties } from '@/shared/constants/specialties/specialties';
import { skills } from '@/shared/constants/skills/skills';
import { Tooltip } from '@/widgets/tooltip';
import { InputSearch } from '@/shared/ui/input-search/input-search';
import { Pagination } from '@/entities/pagination/ui/pagination';
import { SingleSelectButton } from '@/shared/ui/single-select-button/single-select-button';
import { MultiSelectButton } from '@/shared/ui/multi-select-button/multi-select-button';
//import { useGetAllProjectsQuery, } from '@/services/ProjectService';
import { ProjectCardFullType } from '@/widgets/project-card-full/ui/type';
import { CalendarButton } from '@/shared/ui/calendar-button/calendar-button';
import { getAllProjects } from '@/shared/api';
import styles from './projects-page.module.scss';

type TProjectsData = {
	count: number;
	next: string;
	previous: null | string;
	results: ProjectCardFullType[];
};

export const Projects = () => {
	const pageSize = 7;
	const [currentSettings, setCurrentSettings] = useState({ currentPage: 1 });
	const [projectsData, setProjectsData] = useState({} as TProjectsData);

	const getAllProjectsData = async (pageNumber: number) => {
		const res = await getAllProjects({ currentPage: pageNumber });
		const projectsData = await res.json();
		console.log(projectsData);
		setProjectsData(projectsData);
	};

	useEffect(() => {
		getAllProjectsData(currentSettings.currentPage);
	}, [currentSettings]);

	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			//behavior: "smooth",
		});
	}, [currentSettings]);

	//const { data: projects } = useGetAllProjectsQuery(currentSettings);
	//console.log('projects', projects);
	//console.log('currentPage', currentPage)

	// const currentData = useMemo(() => {
	// 	 return projects && projects.results
	// }, [projects]);

	//console.log('currentData', currentData);

	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const isMobile = useMediaQuery('(max-width:779px)');

	const handleStatusProjectChange = (selectedOptions: (string | object)[]) => {
		console.info('selected option: ', selectedOptions?.[0]);
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

	const handleDateChange = (date: Date | [Date, Date | null]) => {
		console.info('selected date: ', date);
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
								<CalendarButton
									name="select-date"
									caption="Дата"
									isSelectsRange={true}
									onChange={handleDateChange}
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
							{projectsData.results &&
								projectsData.results.map((project: ProjectCardFullType) => {
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
										<ProjectCardFull
											id={id}
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
									);
								})}
						</div>
						<Pagination
							onPageChange={(page) =>
								setCurrentSettings({ currentPage: Number(page) })
							}
							totalCount={projectsData && projectsData.count}
							currentPage={currentSettings.currentPage}
							pageSize={pageSize}
						/>
					</>
				) : null}
			</div>
		</>
	);
};
