import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './speciality-card.module.scss';
import { LEVEL } from '@/utils/constants';
import { Option } from '@/shared/types/option';
import { SpecialityCardProps } from './types';
import { TProfession, TSkills } from '@/shared/types/specialty';
import { Counter, Input, MainButton, Toggler } from '@/shared/ui';
import { MultiSelectInput } from '@/shared/ui/multi-select-input/multi-select-input';
import SelectWithSearch from '@/shared/ui/select-search/select-search';
import { SkillsList } from '@/shared/ui/skills-list/skills-list';
import { Edit, Trash2 } from 'lucide-react';

export const ProjectSpecialitCard: FC<SpecialityCardProps> = ({
	data,
	professions,
	allSkills,
	isLoadingChangeSpecialty,
	isSuccessСhangeSpecialty,
	handleSubmitChangeSpecialty,
	handleDeleteSpecialty,
	isLoadingDeleteSpecialty,
}) => {
	const [isShowViewEdit, setIsShowViewEdit] = useState<boolean>(false);
	const [recruitmentIsOpen, setRecruitmentIsOpen] = useState<boolean>(false);
	const [profession, setProfession] = useState<TProfession>(data.profession);
	const [selectedLevel, setSelectedLevel] = useState<number>(data.level);
	const [skills, setSkills] = useState<TSkills[]>(data.skills);

	useEffect(() => {
		if (isSuccessСhangeSpecialty) {
			setIsShowViewEdit(false);
		}
	}, [isSuccessСhangeSpecialty]);

	const transformProfessions = (profList: TProfession[]) => {
		return profList.map(({ id, specialization }) => ({
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

	const changeViewforEdit = () => {
		setIsShowViewEdit(true);
	};

	const getLevelName = (level: number) => {
		if (level > 0 && level < 5) {
			return LEVEL[level - 1].value;
		} else return 'Invalid level';
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

	// const getSkillsforSubmit = (dataSkills: TSkills[]) => {
	// 	return dataSkills.map((dataSkill) => dataSkill.id);
	// };

	const isSkillsNotAdded = () => {
		return skills.length === 0;
	};
//	 ========================  possible bug 
const handleSubmit = () => {
		handleSubmitChangeSpecialty({
			level: selectedLevel,
			profession: profession,
			skills: skills,
			id: data.id,
		});
	};

	const handleDelete = () => {
		handleDeleteSpecialty(data.id as number);
	};

	const serialize = (skills: TSkills[]) => {
		const nums = skills.map((skill) => skill.id);

		return nums.toString();
	};

	return (
		<div className={styles.specialityCard__wrapper}>
			{!isShowViewEdit ? (
				<div className={styles.specialityCard}>
					<button
						type="button"
						className={clsx(
							styles.specialityCard__button,
							styles.specialityCard__button_edit
						)}
						onClick={changeViewforEdit}>
						<Edit />
					</button>
					<h3 className={styles.specialityCard__title}>
						{profession.specialization}, {getLevelName(selectedLevel)}
					</h3>
					<SkillsList skills={skills} />
					<div className={styles.config}>
						<Counter
							id={data.id as number}
							disabled={!recruitmentIsOpen}
							
						/>
						<div className={styles.config_toggle}>
							<span>Набор {recruitmentIsOpen ? 'открыт' : 'закрыт'}</span>
							<Toggler
								checked={recruitmentIsOpen as boolean}
								name={`project_specialists[${data.id}].is_required`}
								onChange={(evt) => setRecruitmentIsOpen(evt.target.checked)}
							/>
						</div>
					</div>

 {/* we shall try to cahnge the data in the value change, or something instead of onSubmit */}

					<Input
						labelName=""
						name={`project_specialists[${data.id}].profession`}
						value={profession.id}
						className={styles.invicible}
					/>

					<Input
						labelName=""
						name={`project_specialists[${data.id}].level`}
						value={selectedLevel}
						style={{ display: 'none' }}
					/>
					<Input
						labelName=""
						name={`project_specialists[${data.id}].skills`}
						value={serialize(skills)}
						style={{ display: 'none' }}
					/>
				</div>
			) : (
				<div className={styles.specialityCard}>
					<button
						type="button"
						disabled={isLoadingDeleteSpecialty}
						className={clsx(
							styles.specialityCard__button,
							styles.specialityCard__button_delete
						)}
						onClick={handleDelete}>
						<Trash2 color="red" />
					</button>
					<h3 className={styles.specialityCard__title}>
						{data.profession.specialization}, {getLevelName(selectedLevel)}
					</h3>

					<SelectWithSearch
						label="Специальность"
						options={transformProfessions(professions)}
						selectedValue={profession.specialization as string}
						onValueChange={handleProfessionChange}
					/>
					<SelectWithSearch
						label="Уровень квалификации"
						options={LEVEL}
						selectedValue={getLevelName(selectedLevel)}
						onValueChange={handleLevelChange}
					/>
					<div className={styles.inputBlock}>
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
					</div>
					<MainButton
						variant="primary"
						width="regular"
						type="button"
						onClick={handleSubmit}
						disabled={isSkillsNotAdded() || isLoadingChangeSpecialty}>
						Сохранить
					</MainButton>
				</div>
			)}
		</div>
	);
};
