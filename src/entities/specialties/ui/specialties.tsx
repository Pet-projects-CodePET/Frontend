import React, { FC } from 'react';
import styles from './specialties.module.scss';
import { SpecialityCard } from '@/shared/ui/speciality-card/speciality-card';
import { TSpecialties } from './types';
// import { Form } from '@/shared/ui';
// import SelectWithSearch from '@/shared/ui/select-search/select-search';

export const Specialties: FC<TSpecialties> = ({
	professions,
	specialists,
	allSkills,
	handleSubmitChangeSpecialty,
	isLoadingChangeSpecialty,
	isSuccessСhangeSpecialty,
	handleDeleteSpecialty,
	// isSuccessDeleteSpecialty
}) => {
	return (
		<section className={styles.specialityList}>
			<h3 className={styles.specialityList__title}>Специальность</h3>
			<ul className={styles.specialityList__contentList}>
				{specialists.map((specialist) => (
					<li key={specialist.id}>
						<SpecialityCard
							data={specialist}
							professions={professions}
							allSkills={allSkills}
							handleSubmitChangeSpecialty={handleSubmitChangeSpecialty}
							isLoadingChangeSpecialty={isLoadingChangeSpecialty}
							isSuccessСhangeSpecialty={isSuccessСhangeSpecialty}
							handleDeleteSpecialty={handleDeleteSpecialty}
						/>
					</li>
				))}
			</ul>
			{/* <Form onSubmit={() => console.log('test')}>
				<SelectWithSearch
					label="Специальность"
					options={transformProfessions(professions)}
					selectedValue={profession.specialization as string}
					onValueChange={handleProfessionChange}
				/>
			</Form> */}
		</section>
	);
};
