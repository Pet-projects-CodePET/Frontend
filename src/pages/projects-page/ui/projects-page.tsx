'use client';

import React, { useMemo, useState } from 'react';
import { ProjectCardFull } from '@/widgets/project-card-full';
import { SingleSelect } from '@/shared/ui/single-select/single-select';
import { statusOptions } from '@/shared/constants/status-options/status-options';
import { projectsArray } from '@/shared/constants/projects/projects';
import { recruitmentStatus } from '@/shared/constants/recruitment-status/recruitment-status';
import styles from './projects-page.module.scss';

import { Pagination } from '@/entities/pagination/ui/pagination';

const data = [
	{
		id: 1,
		first_name: 'Jessamyn',
		last_name: 'Espinazo',
		email: 'jespinazo0@chicagotribune.com',
		phone: '162-166-0977',
	},
	{
		id: 2,
		first_name: 'Isac',
		last_name: 'Tooher',
		email: 'itooher1@psu.edu',
		phone: '655-567-3619',
	},
	{
		id: 3,
		first_name: 'Tabbatha',
		last_name: 'Proschke',
		email: 'tproschke2@weibo.com',
		phone: '327-612-4850',
	},
	{
		id: 4,
		first_name: 'Ninetta',
		last_name: 'Mabb',
		email: 'nmabb3@canalblog.com',
		phone: '971-296-0911',
	},
	{
		id: 5,
		first_name: 'Danni',
		last_name: 'Wallentin',
		email: 'dwallentin4@comcast.net',
		phone: '983-297-0506',
	},
	{
		id: 6,
		first_name: 'Neely',
		last_name: 'Purkins',
		email: 'npurkins5@mediafire.com',
		phone: '379-119-4237',
	},
	{
		id: 7,
		first_name: 'Jessika',
		last_name: 'Kinkaid',
		email: 'jkinkaid6@eventbrite.com',
		phone: '771-888-6284',
	},
	{
		id: 8,
		first_name: 'Julianna',
		last_name: 'Swindall',
		email: 'jswindall7@aol.com',
		phone: '252-614-0486',
	},
	{
		id: 9,
		first_name: 'Corrinne',
		last_name: 'Geeve',
		email: 'cgeeve8@wisc.edu',
		phone: '450-872-8646',
	},
	{
		id: 10,
		first_name: 'Trumann',
		last_name: 'Flux',
		email: 'tflux9@census.gov',
		phone: '249-892-1585',
	},
	{
		id: 11,
		first_name: 'Annalise',
		last_name: 'Keinrat',
		email: 'akeinrata@i2i.jp',
		phone: '659-283-4601',
	},
	{
		id: 12,
		first_name: 'Cal',
		last_name: 'Haverson',
		email: 'chaversonb@multiply.com',
		phone: '689-567-9516',
	},
	{
		id: 13,
		first_name: 'Erik',
		last_name: 'McGillivrie',
		email: 'emcgillivriec@theglobeandmail.com',
		phone: '334-579-0995',
	},
	{
		id: 14,
		first_name: 'Cherilyn',
		last_name: 'Tuddenham',
		email: 'ctuddenhamd@indiegogo.com',
		phone: '408-721-4575',
	},
	{
		id: 15,
		first_name: 'Merola',
		last_name: 'MacDowal',
		email: 'mmacdowale@omniture.com',
		phone: '863-234-5628',
	},
	{
		id: 16,
		first_name: 'Olenolin',
		last_name: "O'Shiels",
		email: 'ooshielsf@smh.com.au',
		phone: '646-127-1652',
	},
	{
		id: 17,
		first_name: 'Donnie',
		last_name: 'Oliphant',
		email: 'doliphantg@i2i.jp',
		phone: '975-457-5826',
	},
	{
		id: 18,
		first_name: 'Carly',
		last_name: 'Bulleyn',
		email: 'cbulleynh@fc2.com',
		phone: '938-211-6682',
	},
	{
		id: 19,
		first_name: 'Walt',
		last_name: 'Meace',
		email: 'wmeacei@printfriendly.com',
		phone: '688-775-4039',
	},
	{
		id: 20,
		first_name: 'Debbie',
		last_name: 'Rockhall',
		email: 'drockhallj@weebly.com',
		phone: '120-270-4052',
	},
	{
		id: 21,
		first_name: 'Devonna',
		last_name: 'Oylett',
		email: 'doylettk@jalbum.net',
		phone: '364-921-6359',
	},
	{
		id: 22,
		first_name: 'Jourdan',
		last_name: 'Grahamslaw',
		email: 'jgrahamslawl@irs.gov',
		phone: '939-973-9940',
	},
	{
		id: 23,
		first_name: 'Brana',
		last_name: 'Haste',
		email: 'bhastem@typepad.com',
		phone: '142-349-6034',
	},
	{
		id: 24,
		first_name: 'Wilmer',
		last_name: 'Trenouth',
		email: 'wtrenouthn@netvibes.com',
		phone: '346-897-1305',
	},
	{
		id: 25,
		first_name: 'Brandtr',
		last_name: 'Esler',
		email: 'beslero@wikispaces.com',
		phone: '638-763-4382',
	},
	{
		id: 26,
		first_name: 'Andonis',
		last_name: 'Durbin',
		email: 'adurbinp@newyorker.com',
		phone: '531-854-8916',
	},
	{
		id: 27,
		first_name: 'Cynthia',
		last_name: 'How to preserve',
		email: 'chowtopreserveq@de.vu',
		phone: '119-342-9726',
	},
	{
		id: 28,
		first_name: 'Jennee',
		last_name: 'Cowdroy',
		email: 'jcowdroyr@marketwatch.com',
		phone: '804-307-6112',
	},
	{
		id: 29,
		first_name: 'Lorin',
		last_name: "D'Hooghe",
		email: 'ldhooghes@wix.com',
		phone: '374-113-9906',
	},
	{
		id: 30,
		first_name: 'Letti',
		last_name: 'Acreman',
		email: 'lacremant@ted.com',
		phone: '157-463-7705',
	},
];

export const Projects = () => {
	const pageSize = 3;
	const [currentPage, setCurrentPage] = useState(1);

	const currentData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * pageSize;
		const lastPageIndex = firstPageIndex + pageSize;
		return data.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);

	return (
		<>
			<div className={styles.filterContainer}>
				<SingleSelect
					name="select-status"
					caption="Статус проекта"
					options={statusOptions}
					selectedOption={null}
				/>
				<SingleSelect
					name="select-recruitment-status"
					caption="Статус набора"
					options={recruitmentStatus}
					selectedOption={null}
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
			<Pagination
				onPageChange={(page) => setCurrentPage(page)}
				totalCount={data.length}
				currentPage={currentPage}
				pageSize={pageSize}
			/>
		</>
	);
};
