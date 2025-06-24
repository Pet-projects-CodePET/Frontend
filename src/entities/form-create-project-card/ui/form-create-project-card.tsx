'use client';

import React, { FC, useState } from 'react';
import styles from './form-create-project-card.module.scss';
import { IFormCreateProjectCard } from './types';
import SelectWithSearch from '@/shared/ui/select-search/select-search';
import { MultiSelectInput } from '@/shared/ui/multi-select-input/multi-select-input';
import Edit from '@/shared/assets/icons/edit-icon.svg';
import Delete from '@/shared/assets/icons/delete.svg';
import { SingleSelectInput } from '@/shared/ui/single-select-input/single-select-input';
import { MainButton, Counter, Toggler } from '@/shared/ui';
import { TProfession, TSkills, TSpeciality } from '@/shared/types/specialty';
import IconPlus from '@/shared/assets/icons/plus-large.svg';
import { Option } from '@/shared/types/option';
import { LEVEL } from '@/utils/constants';

export const FormCreateProjectCard: FC<IFormCreateProjectCard> = ({
	allSkills,
	professions,
}) => {
	const [specialties, setSpecialties] = useState<TSpeciality[]>([]);
	const [isEdit, setIsEdit] = useState(false);
	const [recruitmentIsOpen, setRecruitmentIsOpen] = useState(false);

	const [profession, setProfession] = useState<TProfession | null>(null);
	const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
	const [skills, setSkills] = useState<TSkills[]>([]);

	const handleIsEdit = () => {
		setIsEdit(!isEdit);
	};

	const handleDelete = () => {
		console.log(`delete --> `, 'delete');
	};

	const addSpecialty = (data: {
		profession: TProfession;
		level: number;
		skills: TSkills[];
	}) => {
		const newSpecialty: TSpeciality = {
			id: Date.now(),
			profession: data.profession,
			skills: [],
			level: data.level,
		};
		setSpecialties([...specialties, newSpecialty]);
	};

	const transformProfessions = (profList: TProfession[]) => {
		return profList?.map(({ id, specialization }) => ({
			label: specialization,
			value: specialization,
			id,
		}));
	};
	const handleProfessionChange = (value: string) => {
		setProfession(
			professions.find(
				(element) => element.specialization === value
			) as TProfession
		); // обновляем состояние выбранного значения
	};
	const handleLevelChange = (value: string) => {
		setSelectedLevel(
			LEVEL.find((element) => element.value === value)?.level as number
		); // обновляем состояние выбранного значения
	};

	const getSkills = (skills: TSkills[]) => {
		return skills.map(({ id, name }) => ({
			label: name,
			value: id,
		}));
	};

	const editSkills = (skills: Option[]) => {
		setSkills(
			skills.map(({ label, value }) => ({
				name: label,
				id: value,
			}))
		);
	};
	const getLevelName = (level: number) => {
		if (level > 0 && level < 5) {
			return LEVEL[level - 1].value;
		} else return '';
	};

	const isFieldsNotFill = () => {
		return profession === null || selectedLevel === null || skills.length === 0;
	};

	const handleResetSpecialty = () => {
		setProfession(null);
		setSkills([]);
		setSelectedLevel(null);
	}

	const handleAddSpecialty = () => {
		addSpecialty({
			profession: profession as TProfession,
			level: selectedLevel as number,
			skills: skills as TSkills[],
		});
		handleResetSpecialty();
	};


	return (
		<>
			<h2>Специалисты для проекта</h2>
			<div className={styles.specialists_toggle}>
				<span>Набор {recruitmentIsOpen ? 'открыт' : 'закрыт'}</span>
				<Toggler
					checked={recruitmentIsOpen as boolean}
					name={'allow_notifications'}
					id={'allow_notifications'}
					onChange={(evt) => setRecruitmentIsOpen(evt.target.checked)}
				/>
			</div>
			{specialties.map((item) => (
				<li key={item.id} className={styles.card}>
					<div className={styles.container}>
						<h3 className={styles.title}>{item.profession.specialization}</h3>

						{!isEdit && (
							<button
								type="button"
								className={styles.card_button}
								onClick={handleIsEdit}>
								<Edit className={styles.icon} />
							</button>
						)}
						{isEdit && (
							<button
								type="button"
								className={styles.card_button}
								onClick={handleDelete}>
								<Delete className={styles.icon} />
							</button>
						)}

						{isEdit && (
							<>
								<SingleSelectInput
									name={`project_specialists`}
									label={'Специальность'}
									onChange={() => {}}
									options={[]}
									description="Выберите одну специальность"
									isSearchable
								/>
								<div>
									<MultiSelectInput
										name={`project_specialists`}
										onChange={() => {}}
										options={[]}
										values={[]}
										label={'Уровень квалификации'}
									/>
								</div>
								<div>
									<MultiSelectInput
										name={`project_specialists`}
										onChange={() => {}}
										options={getSkills(allSkills)}
										values={getSkills(skills)}
										label={'Навыки'}
										description="Выберите не более 15 навыков"
									/>
								</div>
							</>
						)}

						<div className={styles.config}>
							<Counter disabled={!recruitmentIsOpen} />
							<div className={styles.config_toggle}>
								<span>Набор {recruitmentIsOpen ? 'открыт' : 'закрыт'}</span>
								<Toggler
									checked={recruitmentIsOpen as boolean}
									name={'allow_notifications'}
									id={'allow_notifications'}
									onChange={(evt) => setRecruitmentIsOpen(evt.target.checked)}
								/>
							</div>
						</div>

						{isEdit && (
							<MainButton
								variant="secondary"
								width="regular"
								onClick={handleIsEdit}>
								Сохранить
							</MainButton>
						)}
					</div>
				</li>
			))}

			<section className={styles.addSpecialty}>
				<SelectWithSearch
					label="Специальность"
					options={transformProfessions(professions)}
					selectedValue={profession?.specialization as unknown as string}
					onValueChange={handleProfessionChange}
				/>
				<SelectWithSearch
					label="Уровень квалификации"
					options={LEVEL}
					selectedValue={getLevelName(selectedLevel as number)}
					onValueChange={handleLevelChange}
				/>
				<MultiSelectInput
					width="100%"
					name="select-skills"
					label="Навыки"
					description="Выберите не более 15 навыков"
					maxSelections={15}
					isSearchable
					options={getSkills(allSkills)}
					values={getSkills(skills)}
					onChange={(item) => {
						editSkills(item as Option[]);
					}}
				/>
				<div className={styles.addSpecialty__buttons}>
					<MainButton
						onClick={handleAddSpecialty}
						IconLeft={IconPlus}
						variant="secondary"
						width="regular"
						disabled={isFieldsNotFill() /*|| isLoadingAddSpecialty*/}>
						Добавить
					</MainButton>
					<MainButton
					    onClick={handleResetSpecialty}
						className={styles.addSpecialty__resetButton}
						variant="trivial"
						width="min">
						Сбросить
					</MainButton>
				</div>
			</section>
		</>
	);
};
