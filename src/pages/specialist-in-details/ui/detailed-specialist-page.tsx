import { DetailedSpecialistPageType } from './types';
import styles from './detailed-specialist-page.module.scss';
import React, { FC } from 'react';
import { DetailedSpecialistCard } from '@/widgets/specialist-detailed-card';
export const DetailedSpecialistPage: FC<DetailedSpecialistPageType> = ({}) => {
	return (
		<>
			<div>
				<DetailedSpecialistCard
					name={''}
					specialty={''}
					specialization={''} 
					socials={[]}
					skills={[]}
				/>

			</div>
		</>
	);
};
