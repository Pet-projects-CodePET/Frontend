'use client';

import React, { FC, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { IFormCreateProjectCard } from './types';
import SelectWithSearch from '@/shared/ui/select-search/select-search';
import { MultiSelectInput } from '@/shared/ui/multi-select-input/multi-select-input';
import Edit from '@/shared/assets/icons/edit-icon.svg';
import IconDelete from '@/shared/assets/icons/delete-red.svg';
import { MainButton, Counter, Toggler } from '@/shared/ui';
import { TProfession, TSkills /*TSpeciality*/ } from '@/shared/types/specialty';
import IconPlus from '@/shared/assets/icons/plus-large.svg';
import { Option } from '@/shared/types/option';
import { LEVEL } from '@/utils/constants';
import styles from './form-create-project-card.module.scss';

type ProjectSpecialist = {
	id: number;
	profession:
		| {
				id: number;
				specialization: string;
				speciality: string;
		  }
		| number;
	skills: number[];
	count: number;
	level: number;
	is_required?: boolean;
};

export const FormCreateProjectCard: FC<IFormCreateProjectCard> = ({
	allSkills,
	professions,
	name = 'project_specialists',
	setSubmitSuccessfulReset,
	isSubmitSuccessfulReset,
}) => {
	const {
		setValue,
		getValues,
		reset,
		formState: { errors, touchedFields, isSubmitted },
	} = useFormContext();
	const [specialties, setSpecialties] = useState<ProjectSpecialist[]>(
		getValues(name) || []
	);
	const [editingId, setEditingId] = useState<number | null>(null);
	const [recruitmentIsOpen, setRecruitmentIsOpen] = useState(true);
	const [cardToggles, setCardToggles] = useState<Record<number, boolean>>({});
	const [forceUpdate, setForceUpdate] = useState(false);
	const [counts, setCounts] = useState<Record<number, number>>({});
	const [profession, setProfession] = useState<TProfession | null>(null);
	const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
	const [skills, setSkills] = useState<TSkills[]>([]);

	// Определяем, нужно ли показывать ошибку
	const shouldShowError =
		(touchedFields.project_specialists || isSubmitted) &&
		errors.project_specialists;

	useEffect(() => {
		setValue(name, specialties, { shouldValidate: true });
	}, [specialties, name, setValue]);

	useEffect(() => {
		if (specialties.length > 0 && Object.keys(cardToggles).length === 0) {
			const initialToggles: Record<number, boolean> = {};
			specialties.forEach((item) => {
				initialToggles[item.id] = recruitmentIsOpen;
			});
			setCardToggles(initialToggles);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [specialties]);

	useEffect(() => {
		if (isSubmitSuccessfulReset) {
			reset();
			setSpecialties([]);
			setSubmitSuccessfulReset(false);
		}
	}, [isSubmitSuccessfulReset, reset, setSubmitSuccessfulReset]);

	useEffect(() => {
		// При изменении глобального toggle обновляем все карточки
		setSpecialties((prev) =>
			prev.map((item) => ({
				...item,
				// eslint-disable-next-line camelcase
				is_required: cardToggles[item.id] ?? recruitmentIsOpen,
			}))
		);
	}, [cardToggles, recruitmentIsOpen]);

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
		const newSpecialties = specialties.filter((item) => item.id !== id);
		setSpecialties(newSpecialties);
		handleResetSpecialty();

		// Помечаем поле как touched при взаимодействии
		setValue(name, newSpecialties, {
			shouldValidate: true,
			shouldTouch: true,
		});
	};

	const addSpecialty = () => {
		if (!profession || !selectedLevel || skills.length === 0) return;
		const newId = Date.now();
		const newSpecialty: ProjectSpecialist = {
			id: newId,
			profession: profession.id,
			skills: skills.map((skill) => skill.id),
			level: selectedLevel,
			count: counts[newId] || 1,
			// eslint-disable-next-line camelcase
			is_required: recruitmentIsOpen,
		};

		setSpecialties((prev) => [...prev, newSpecialty]);
		setCardToggles((prev) => ({ ...prev, [newId]: recruitmentIsOpen }));
		handleResetSpecialty();
		// Помечаем поле как touched при взаимодействии
		setValue(name, [...specialties, newSpecialty], {
			shouldValidate: true,
			shouldTouch: true,
		});
	};

	const handleGlobalToggleChange = (
		evt: React.ChangeEvent<HTMLInputElement>
	) => {
		const isChecked = evt.target.checked;
		setRecruitmentIsOpen(isChecked);
		// Обновляем все индивидуальные тогглеры
		const newToggles: Record<number, boolean> = {};
		specialties.forEach((item) => {
			newToggles[item.id] = isChecked;
		});
		setCardToggles(newToggles);
		setForceUpdate(!forceUpdate); // Принудительное обновление
	};

	const handleCardToggleChange = (id: number, checked: boolean) => {
		if (!recruitmentIsOpen && checked) return;
		setCardToggles((prev) => ({ ...prev, [id]: checked }));
		setSpecialties((prev) =>
			// eslint-disable-next-line camelcase
			prev.map((item) =>
				// eslint-disable-next-line camelcase
				item.id === id ? { ...item, is_required: checked } : item
			)
		);
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
		setSpecialties((prev) =>
			prev.map((item) => (item.id === id ? { ...item, count: value } : item))
		);
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

	const getProfessionForDisplay = (
		prof: number | { id: number; specialization: string; speciality: string }
	) => {
		if (typeof prof === 'number') {
			return professions.find((p) => p.id === prof);
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
			<h2 className={styles.titleForm}>Специалисты для проекта</h2>
			<div className={styles.specialists_toggle}>
				<span className={styles.titleToggler}>
					Набор {recruitmentIsOpen ? 'открыт' : 'закрыт'}
				</span>
				<Toggler
					checked={recruitmentIsOpen}
					name={'allow_notifications'}
					id={'allow_notifications'}
					onChange={handleGlobalToggleChange}
				/>
			</div>

			{specialties.map((item) => (
				<li key={item.id} className={styles.card}>
					<div className={styles.container}>
						<h3 className={styles.title}>
							{getProfessionForDisplay(item.profession)?.specialization}
						</h3>
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
								<IconDelete className={styles.icon} />
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
							<div className={styles.counter}><Counter
								disabled={!cardToggles[item.id]}
								value={counts[item.id] || item.count || 1}
								onChange={(value) => handleCountChange(item.id, value)}
							/></div>
							
							<div className={styles.config_toggle}>
								<span className={styles.titleToggler}>
									Набор {cardToggles[item.id] ? 'открыт' : 'закрыт'}
								</span>
								<Toggler
									checked={cardToggles[item.id] || false}
									name={`card_toggle_${item.id}`}
									id={`card_toggle_${item.id}`}
									onChange={(evt) =>
										handleCardToggleChange(item.id, evt.target.checked)
									}
									disabled={!recruitmentIsOpen}
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
				{shouldShowError && (
					<p className={styles.errorText}>
						{errors.project_specialists?.message as string}
					</p>
				)}
			</section>
		</>
	);
};
