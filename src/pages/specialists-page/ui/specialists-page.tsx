'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { SpecialistCard } from '@/widgets/specialist-card';
import { InputSearch } from '@/shared/ui/input-search/input-search';
import { statusSpecialist } from '@/shared/constants/status-specialist/status-specialist';
import { qualification } from '@/shared/constants/qualification/qualification';
import FilterIcon from '@/shared/assets/icons/filter-icon.svg';
import { PopUp } from '@/shared/ui/pop-up/pop-up';
import { Pagination } from '@/entities/pagination/ui/pagination';
import { SpecialistsFilter } from '@/entities/specialists-filter';
import { useMediaQuery } from '@/shared/hooks';
import styles from './specialists-page.module.scss';
import { useGetAllSpecialistsDataQuery } from '@/services/SpecialistService';
import { Filters, SpecialistType } from './types';
import { Loader } from '@/shared/ui';
import { FilterSelectButton } from '@/shared/ui/filter-select-button/filter-select-button';
import { Option } from '@/shared/ui/filter-select-button/type';
import { FilterMultiSelectButton } from '@/shared/ui/filter-multi-select-button/filter-multi-select-button';
import {
	useGetProfessionsQuery,
	useGetSkillsQuery,
} from '@/services/GeneralService';
import { TProfession, TSkills } from '@/shared/types/specialty';

export const Specialists = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [filters, setFilters] = useState<Filters>({
		status: undefined,
		specialists: undefined,
		specialty: undefined,
		skills: undefined,
		searchQuery: undefined,
	});
	const pageSize = 7;
	const isMobile = useMediaQuery('(max-width:779px)');

	const { data: specialistArray } = useGetAllSpecialistsDataQuery({
		currentPage,
		filters,
	});
	const { data: professions } = useGetProfessionsQuery([]);
	const { data: skills } = useGetSkillsQuery([]);

	const currentData = useMemo(() => {
		return specialistArray && specialistArray.results;
	}, [specialistArray]);

	const handleSearchChange = (query: string) => {
		setFilters((prev) => ({ ...prev, searchQuery: query }));
		setCurrentPage(1);
		console.log(query);
	};

	const handleStatusChange = (selectedOption: Option | undefined) => {
		let selectedOptionValue = undefined;
		if (selectedOption !== undefined) {
			selectedOptionValue = selectedOption.value === 1 ? true : false;
		}
		setFilters((prev) => ({
			...prev,
			status: selectedOptionValue,
		}));
		setCurrentPage(1);
		console.info('selected status options: ', selectedOption);
	};

	const handleQualificationChange = (selectedOptions: Option[] | undefined) => {
		if (selectedOptions) {
			const values = selectedOptions.map((option) => option.value);
			setFilters({ ...filters, specialists: values });
			console.info('selected qualification options: ', values);
		}
	};

	const handleSpecialtiesChange = (selectedOptions: Option[] | undefined) => {
		if (selectedOptions) {
			const values = selectedOptions.map((option) => option.value);
			setFilters({ ...filters, specialty: values });
			console.info('selected specialty options: ', values);
		}
	};

	const handleSkillsChange = (selectedOptions: Option[] | undefined) => {
		if (selectedOptions) {
			const values = selectedOptions.map((option) => option.value);
			setFilters({ ...filters, skills: values });
			console.info('selected skill options: ', values);
		}
	};

	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
		});
	}, [currentPage]);

	return (
		<section className={styles.specialists}>
			<div className={styles.specialists__wrapper}>
				<div className={styles.specialists__container}>
					<h1 className={styles.specialists__title}>Специалисты</h1>
					<div className={styles.specialists__item}>
						<div className={styles.specialists__inputSearch}>
							<InputSearch search={handleSearchChange} />
						</div>
						<button
							className={styles.specialists__filterButton}
							type="button"
							onClick={() => setIsPopupOpen(true)}>
							<FilterIcon />
						</button>
						{isMobile ? (
							<PopUp
								visible={isPopupOpen}
								title=""
								onClose={() => setIsPopupOpen(false)}>
								<SpecialistsFilter />
							</PopUp>
						) : null}
					</div>
				</div>
				<div className={styles.specialists__filterContainer}>
					<FilterSelectButton
						options={statusSpecialist}
						value={
							filters.status === true ? { value: 1, label: '' } : undefined
						}
						label="Статус специалиста"
						onChange={handleStatusChange}
					/>
					<FilterMultiSelectButton
						options={qualification}
						value={filters.specialists?.map((item) => ({
							value: item,
							label: '',
						}))}
						label="Уровень квалификации"
						selectedAll={true}
						onChange={handleQualificationChange}
					/>
					<FilterMultiSelectButton
						options={
							professions?.map((item: TProfession) => ({
								value: item.id,
								label: `${item.speciality} \\ ${item.specialization}`,
							})) || []
						}
						value={filters.specialty?.map((item) => ({
							value: item,
							label: '',
						}))}
						label="Специальность"
						onChange={handleSpecialtiesChange}
						maxSelections={2}
						tooltip="Не более 2-х специальностей"
					/>
					<FilterMultiSelectButton
						options={
							skills?.map((item: TSkills) => ({
								value: item.id,
								label: item.name,
							})) || []
						}
						value={filters.skills?.map((item) => ({
							value: item,
							label: '',
						}))}
						label="Навыки"
						onChange={handleSkillsChange}
						maxSelections={5}
						isSearchable={true}
						tooltip="Не более 5-ти навыков"
					/>
				</div>
			</div>
			<div className={styles.specialists__cards}>
				{currentData ? (
					currentData.map((res: SpecialistType) => (
						<SpecialistCard
							key={res?.user_id}
							userId={res?.user_id}
							specialists={res?.specialists}
							avatar={res?.avatar ? res?.avatar : ''}
							name={res?.name}
							userName={res?.username}
							readyToParticipate={res?.ready_to_participate}
							is_favorite={res?.is_favorite}
						/>
					))
				) : (
					<Loader />
				)}
			</div>

			<Pagination
				onPageChange={(page) => setCurrentPage(Number(page))}
				totalCount={specialistArray?.count}
				currentPage={currentPage}
				pageSize={pageSize}
			/>
		</section>
	);
};
