'use client';

import React, { useState, useEffect, useMemo } from 'react';
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
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { specialties } from '@/shared/constants/specialties/specialties';
import { skills } from '@/shared/constants/skills/skills';
import { Tooltip } from '@/widgets/tooltip';
import { InputSearch } from '@/shared/ui/input-search/input-search';

import styles from './projects-page.module.scss';

import { Pagination } from '@/entities/pagination/ui/pagination';

const data = [
	{
		id: 1,
		firstname: 'Jessamyn',
		lastname: 'Espinazo',
		email: 'jespinazo0@chicagotribune.com',
		phone: '162-166-0977',
	},
	{
		id: 2,
		firstname: 'Isac',
		lastname: 'Tooher',
		email: 'itooher1@psu.edu',
		phone: '655-567-3619',
	},
	{
		id: 3,
		firstname: 'Tabbatha',
		lastname: 'Proschke',
		email: 'tproschke2@weibo.com',
		phone: '327-612-4850',
	},
	{
		id: 4,
		firstname: 'Ninetta',
		lastname: 'Mabb',
		email: 'nmabb3@canalblog.com',
		phone: '971-296-0911',
	},
	{
		id: 5,
		firstname: 'Danni',
		lastname: 'Wallentin',
		email: 'dwallentin4@comcast.net',
		phone: '983-297-0506',
	},
	{
		id: 6,
		firstname: 'Neely',
		lastname: 'Purkins',
		email: 'npurkins5@mediafire.com',
		phone: '379-119-4237',
	},
	{
		id: 7,
		firstname: 'Jessika',
		lastname: 'Kinkaid',
		email: 'jkinkaid6@eventbrite.com',
		phone: '771-888-6284',
	},
	{
		id: 8,
		firstname: 'Julianna',
		lastname: 'Swindall',
		email: 'jswindall7@aol.com',
		phone: '252-614-0486',
	},
	{
		id: 9,
		firstname: 'Corrinne',
		lastname: 'Geeve',
		email: 'cgeeve8@wisc.edu',
		phone: '450-872-8646',
	},
	{
		id: 10,
		firstname: 'Trumann',
		lastname: 'Flux',
		email: 'tflux9@census.gov',
		phone: '249-892-1585',
	},
	{
		id: 11,
		firstname: 'Annalise',
		lastname: 'Keinrat',
		email: 'akeinrata@i2i.jp',
		phone: '659-283-4601',
	},
	{
		id: 12,
		firstname: 'Cal',
		lastname: 'Haverson',
		email: 'chaversonb@multiply.com',
		phone: '689-567-9516',
	},
	{
		id: 13,
		firstname: 'Erik',
		lastname: 'McGillivrie',
		email: 'emcgillivriec@theglobeandmail.com',
		phone: '334-579-0995',
	},
	{
		id: 14,
		firstname: 'Cherilyn',
		lastname: 'Tuddenham',
		email: 'ctuddenhamd@indiegogo.com',
		phone: '408-721-4575',
	},
	{
		id: 15,
		firstname: 'Merola',
		lastname: 'MacDowal',
		email: 'mmacdowale@omniture.com',
		phone: '863-234-5628',
	},
	{
		id: 16,
		firstname: 'Olenolin',
		lastname: "O'Shiels",
		email: 'ooshielsf@smh.com.au',
		phone: '646-127-1652',
	},
	{
		id: 17,
		firstname: 'Donnie',
		lastname: 'Oliphant',
		email: 'doliphantg@i2i.jp',
		phone: '975-457-5826',
	},
	{
		id: 18,
		firstname: 'Carly',
		lastname: 'Bulleyn',
		email: 'cbulleynh@fc2.com',
		phone: '938-211-6682',
	},
	{
		id: 19,
		firstname: 'Walt',
		lastname: 'Meace',
		email: 'wmeacei@printfriendly.com',
		phone: '688-775-4039',
	},
	{
		id: 20,
		firstname: 'Debbie',
		lastname: 'Rockhall',
		email: 'drockhallj@weebly.com',
		phone: '120-270-4052',
	},
	{
		id: 21,
		firstname: 'Devonna',
		lastname: 'Oylett',
		email: 'doylettk@jalbum.net',
		phone: '364-921-6359',
	},
	{
		id: 22,
		firstname: 'Jourdan',
		lastname: 'Grahamslaw',
		email: 'jgrahamslawl@irs.gov',
		phone: '939-973-9940',
	},
	{
		id: 23,
		firstname: 'Brana',
		lastname: 'Haste',
		email: 'bhastem@typepad.com',
		phone: '142-349-6034',
	},
	{
		id: 24,
		firstname: 'Wilmer',
		lastname: 'Trenouth',
		email: 'wtrenouthn@netvibes.com',
		phone: '346-897-1305',
	},
	{
		id: 25,
		firstname: 'Brandtr',
		lastname: 'Esler',
		email: 'beslero@wikispaces.com',
		phone: '638-763-4382',
	},
	{
		id: 26,
		firstname: 'Andonis',
		lastname: 'Durbin',
		email: 'adurbinp@newyorker.com',
		phone: '531-854-8916',
	},
	{
		id: 27,
		firstname: 'Cynthia',
		lastname: 'How to preserve',
		email: 'chowtopreserveq@de.vu',
		phone: '119-342-9726',
	},
	{
		id: 28,
		firstname: 'Jennee',
		lastname: 'Cowdroy',
		email: 'jcowdroyr@marketwatch.com',
		phone: '804-307-6112',
	},
	{
		id: 29,
		firstname: 'Lorin',
		lastname: "D'Hooghe",
		email: 'ldhooghes@wix.com',
		phone: '374-113-9906',
	},
	{
		id: 30,
		firstname: 'Letti',
		lastname: 'Acreman',
		email: 'lacremant@ted.com',
		phone: '157-463-7705',
	},
];

export const Projects = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const { 1: urlToken } = window.location.hash.split('#/login/');
		if (urlToken) {
			localStorage.setItem('token', urlToken);
		}

		const token = localStorage.getItem('token');
		if (token) {
			setIsLoggedIn(true);
		}
	}, []);

	const pageSize = 3;
	const [currentPage, setCurrentPage] = useState(1);
	const currentData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * pageSize;
		const lastPageIndex = firstPageIndex + pageSize;
		return data.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);

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
		console.log(currentData);
	};

	return (
		<>
			<div className={styles.pageContainer}>
				<Header isLoggedIn={isLoggedIn} />
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
						<Pagination
							onPageChange={(page) => setCurrentPage(Number(page))}
							totalCount={data.length}
							currentPage={currentPage}
							pageSize={pageSize}
						/>
					</>
				) : null}
			</div>
			<Footer />
		</>
	);
};
