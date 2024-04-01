'use client';
import React from 'react';
import { SpecialistCard } from '@/widgets/specialist-card';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { InputSearch } from '@/shared/ui/input-search/input-search';
import { specialistsArray } from '@/shared/constants/specialists/specialists';
import { SingleSelect } from '@/shared/ui/single-select/single-select';
import { statusOptions } from '@/shared/constants/status-options/status-options';
import { MultiSelect } from '@/shared/ui/multi-select/multi-select';
import { qualification } from '@/shared/constants/qualification/qualification';
import { Tooltip } from '@/widgets/tooltip';
import { specialties } from '@/shared/constants/specialties/specialties';
import { skills } from '@/shared/constants/skills/skills';
import styles from './specialists-page.module.scss';

export const Specialists = () => {
	const handleStatusChange = (selectedOptions: (string | object)[]) => {
		console.info('selected option: ', selectedOptions?.[0]);
	};
	const handleQualificationChange = (selectedItems: object) => {
		console.info('selected options: ', selectedItems);
	};
	const handleSpecialtiesChange = (selectedItems: object) => {
		console.info('selected options: ', selectedItems);
	};
	const handleSkillsChange = (selectedItems: object) => {
		console.info('selected options: ', selectedItems);
	};

	return (
		<>
			<section className={styles.specialists}>
				<div className={styles.specialists__wrapper}>
					<Header isLoggedIn />
					<div className={styles.specialists__container}>
						<h1 className={styles.specialists__title}>Специалисты</h1>
						<div className={styles.specialists__inputSearch}>
							<InputSearch search={() => {}} onChange={() => {}} />
						</div>
					</div>
					<div className={styles.specialists__filterContainer}>
						<SingleSelect
							name="select-status"
							options={statusOptions}
							buttonLabel="Статус специалиста"
							value={{ value: 'completed', label: 'Завершенный' }}
							onChange={handleStatusChange}
						/>

						<MultiSelect
							name="select-months"
							caption="Уровень квалификации"
							options={qualification}
							values={[]}
							onChange={handleQualificationChange}
							selectedAll={true}
							buttonWidth={114}
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
				</div>
				<div className={styles.specialists__cards}>
					{specialistsArray.map((specialist) => {
						return (
							<SpecialistCard
								specialization={specialist.specialization}
								specialty={specialist.specialty}
								key={specialist.id}
								telegram={specialist.telegram}
								skills={specialist.skills}
							/>
						);
					})}
				</div>

				<div>ПАГИНАЦИЯ</div>
			</section>
			<Footer />
		</>
	);
};
