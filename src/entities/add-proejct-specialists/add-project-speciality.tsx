import React from 'react';
import styles from './add-specialty.module.scss';
import { LEVEL } from '@/utils/constants';
import { TSpeciality } from '@/shared/types/specialty';
import IconPlus from '@/shared/assets/icons/plus-large.svg';
import { AddSpecialtyProps } from './types';
import SelectWithSearch from '@/shared/ui/select-search/select-search';
import {
	getLevelName,
	getSkills,
	transformProfessions,
} from '@/utils/specialists-functions';
import { MainButton } from '@/shared/ui';
import { MultiSelectInput } from '@/shared/ui/multi-select-input/multi-select-input';

import { useForm, Controller } from 'react-hook-form';

export const AddProjectSpeciality: React.FC<AddSpecialtyProps> = ({
	professions,
	allSkills,
	handleAddSpecialty,
}) => {
	const { control, reset, handleSubmit, watch } = useForm({
		defaultValues: {
			profession: null,
			level: null,
			skills: [],
		},
	});

	const skillField = watch('skills');
	const levelField = watch('level');
	const professionField = watch('profession');

	const fieldsNotEmpty = () => {
		if (skillField && levelField && professionField) {
			return false;
		} else {
			return true;
		}
	};

	const onSubmit = (data: TSpeciality) => {
		handleAddSpecialty(data);
	};

	const handleResetForm = () => {
		handleAddSpecialty([] as never);
		reset({
			profession: null,
			level: null,
			skills: [],
		});
	};

	return (
		<>
			<div className={styles.addSpecialty}>
				<Controller
					name="profession"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<SelectWithSearch
							label="Специальность"
							options={transformProfessions(professions)}
							selectedValue={field.value?.specialization}
							onValueChange={(value) =>
								field.onChange(
									professions.find((p) => p.specialization === value)
								)
							}
						/>
					)}
				/>

				{/* Level Field */}
				<Controller
					name="level"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<SelectWithSearch
							label="Уровень квалификации"
							options={LEVEL}
							selectedValue={getLevelName(field.value as unknown as number)}
							onValueChange={(value) =>
								field.onChange(
									LEVEL.find((lvl) => lvl.value === value)?.level as number
								)
							}
						/>
					)}
				/>

				{/* Skills Field */}
				<Controller
					name="skills"
					control={control}
					rules={{ validate: (value) => value.length > 0 }}
					render={({ field }) => (
						<MultiSelectInput
							width="100%"
							name="select-skills"
							label="Навыки"
							description="Выберите не более 15 навыков"
							maxSelections={15}
							isSearchable
							options={getSkills(allSkills)}
							values={getSkills(field.value)}
							onChange={(item) =>
								field.onChange(
									item.map(({ label, value }) => ({
										name: label,
										id: value,
									}))
								)
							}
						/>
					)}
				/>

				{/* Buttons */}
				<div className={styles.addSpecialty__buttons}>
					{/* Add Specialty Button */}
					<MainButton
						IconLeft={IconPlus}
						variant="secondary"
						onClick={handleSubmit(() => onSubmit)} // Handle form submission on button click
						width="regular"
						disabled={fieldsNotEmpty()}
						type="button">
						Добавить
					</MainButton>

					{/* Reset Button */}
					<MainButton
						className={styles.addSpecialty__resetButton}
						type="button"
						variant="trivial"
						width="min"
						onClick={handleResetForm}>
						Сбросить
					</MainButton>
				</div>
			</div>
		</>
	);
};
