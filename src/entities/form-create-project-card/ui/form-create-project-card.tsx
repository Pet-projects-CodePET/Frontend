'use client';

import React, { FC, useEffect, useState } from 'react';
import styles from './form-create-project-card.module.scss';
import { IFormCreateProjectCard } from './types';
import SelectWithSearch from '@/shared/ui/select-search/select-search';
import { MultiSelectInput } from '@/shared/ui/multi-select-input/multi-select-input';
import Edit from '@/shared/assets/icons/edit-icon.svg';
import Delete from '@/shared/assets/icons/delete.svg';
import { MainButton, Counter, Toggler } from '@/shared/ui';
import { TProfession, TSkills /*TSpeciality*/ } from '@/shared/types/specialty';
import IconPlus from '@/shared/assets/icons/plus-large.svg';
import { Option } from '@/shared/types/option';
import { LEVEL } from '@/utils/constants';
import { useFormContext } from 'react-hook-form';

type ProjectSpecialist = {
	id: number;
	profession:  {
		id: number;
		specialization: string;
		speciality: string;
	} | number;
	skills: number[];
	count: number;
	level: number;
	is_required?: boolean;
};

export const FormCreateProjectCard: FC<IFormCreateProjectCard> = ({
	allSkills,
	professions,
	name = 'project_specialists',
}) => {
	const { setValue, getValues } = useFormContext();
	const [specialties, setSpecialties] = useState<ProjectSpecialist[]>(
		getValues(name) || []
	);
	const [editingId, setEditingId] = useState<number | null>(null);
	const [recruitmentIsOpen, setRecruitmentIsOpen] = useState(false);
	const [counts, setCounts] = useState<Record<number, number>>({});

	const [profession, setProfession] = useState<TProfession | null>(null);
	const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
	const [skills, setSkills] = useState<TSkills[]>([]);

	useEffect(() => {
		setValue(name, specialties);
	}, [specialties, name, setValue]);

	const handleEditClick = (id: number) => {
		const itemToEdit = specialties.find((item) => item.id === id);
		if (itemToEdit) {
			const professionObj = professions.find(
				(p) => p.id === itemToEdit.profession
			);
			const skillsObjs = allSkills.filter((s) =>
				itemToEdit.skills.includes(s.id)
			);
			if (professionObj) {
				setProfession(professionObj);
			}
			setSelectedLevel(itemToEdit.level);
			setSkills(skillsObjs);
			setEditingId(id);
		}
	};

	const handleSaveEdit = () => {
		if (!editingId || !profession || !selectedLevel) return;

		setSpecialties((prev) =>
			prev.map((item) =>
				item.id === editingId
					? {
							...item,
							profession: profession.id, // Только ID
							skills: skills.map((skill) => skill.id), // Массив ID
							level: selectedLevel,
							count: counts[editingId] || item.count,
						}
					: item
			)
		);
		setEditingId(null);
	};

	const handleDelete = (id: number) => (event: React.MouseEvent) => {
		event.stopPropagation();
		setSpecialties((prev) => prev.filter((item) => item.id !== id));
	};

	const addSpecialty = () => {
		if (!profession || !selectedLevel || skills.length === 0) return;

		const newSpecialty: ProjectSpecialist = {
			id: Date.now(),
			profession: profession.id,
			skills: skills.map((skill) => skill.id),
			level: selectedLevel,
			count: counts[Date.now()] || 1,
			// eslint-disable-next-line camelcase
			is_required: true,
		};

		setSpecialties((prev) => [...prev, newSpecialty]);
		handleResetSpecialty();
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
		);
	};

	const handleCountChange = (id: number, value: number) => {
		setCounts((prev) => ({ ...prev, [id]: value }));
	};

	const handleLevelChange = (value: string) => {
		setSelectedLevel(
			LEVEL.find((element) => element.value === value)?.level as number
		);
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
		return LEVEL.find((l) => l.level === level)?.value || '';
	};

	const getProfessionForDisplay = (prof: number | { id: number; specialization: string; speciality: string }) => {
		if (typeof prof === 'number') {
		  return professions.find(p => p.id === prof);
		}
		return prof;
	  };

	const isFieldsNotFill = () => {
		return !profession || !selectedLevel || skills.length === 0;
	};

	const handleResetSpecialty = () => {
		setProfession(null);
		setSkills([]);
		setSelectedLevel(null);
	};

	return (
		<>
			<h2>Специалисты для проекта</h2>
			<div className={styles.specialists_toggle}>
				<span>Набор {recruitmentIsOpen ? 'открыт' : 'закрыт'}</span>
				<Toggler
					checked={recruitmentIsOpen}
					name={'allow_notifications'}
					id={'allow_notifications'}
					onChange={(evt) => setRecruitmentIsOpen(evt.target.checked)}
				/>
			</div>

			{specialties.map((item) => (
				<li key={item.id} className={styles.card}>
					<div className={styles.container}>
						<h3 className={styles.title}>{getProfessionForDisplay(item.profession)?.specialization}</h3>
						{editingId !== item.id ? (
							<button
								type="button"
								className={styles.card_button}
								onClick={() => handleEditClick(item.id)}>
								<Edit className={styles.icon} />
							</button>
						) : (
							<button
								type="button"
								className={styles.card_button}
								onClick={handleDelete(item.id)}>
								<Delete className={styles.icon} />
							</button>
						)}

						{editingId === item.id && (
							<>
								<SelectWithSearch
									label="Специальность"
									options={transformProfessions(professions)}
									selectedValue={profession?.specialization}
									onValueChange={handleProfessionChange}
								/>
								<SelectWithSearch
									label="Уровень квалификации"
									options={LEVEL}
									selectedValue={getLevelName(selectedLevel || 0)}
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
							</>
						)}

						<div className={styles.config}>
							<Counter
								disabled={!recruitmentIsOpen}
								value={counts[item.id] || item.count || 1}
								onChange={(value) => handleCountChange(item.id, value)}
							/>
							<div className={styles.config_toggle}>
								<span>Набор {recruitmentIsOpen ? 'открыт' : 'закрыт'}</span>
								<Toggler
									checked={recruitmentIsOpen}
									name={'allow_notifications'}
									id={'allow_notifications'}
									onChange={(evt) => setRecruitmentIsOpen(evt.target.checked)}
								/>
							</div>
						</div>

						{editingId === item.id && (
							<MainButton
								type="button"
								variant="secondary"
								width="regular"
								onClick={handleSaveEdit}>
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
					selectedValue={profession?.specialization}
					onValueChange={handleProfessionChange}
				/>
				<SelectWithSearch
					label="Уровень квалификации"
					options={LEVEL}
					selectedValue={getLevelName(selectedLevel || 0)}
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
						onClick={addSpecialty}
						IconLeft={IconPlus}
						variant="secondary"
						width="regular"
						disabled={isFieldsNotFill()}>
						Добавить
					</MainButton>
					<MainButton
						type="button"
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
