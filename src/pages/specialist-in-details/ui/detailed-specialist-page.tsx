import React, { FC } from 'react';
import { DetailedSpecialistCard } from '@/widgets/specialist-detailed-card';
import { getDataAxiosInstance } from '@/utils/declension/axiosInstance';

export const DetailedSpecialistPage: FC = async () => {
	// const { data } = useGetUserDataQuery()

	const data = getDataAxiosInstance
		.get('/profiles/171')
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.log(error);
		});

	console.log(data);

	return (
		<>
			<div>
				<DetailedSpecialistCard
					name={''}
					specialty={''}
					specialization={''}
					socials={[]}
					skills={[]}
					image={''}
				/>
			</div>
		</>
	);
};
