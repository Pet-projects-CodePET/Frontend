import React, { FC } from 'react';
import { DetailedSpecialistCard } from '@/widgets/specialist-detailed-card';
import { getDataAxiosInstance } from '@/utils/declension/axiosInstance';

export const DetailedSpecialistPage: FC = async () => {
	// const { data } = useGetUserDataQuery()

	const response = (await getDataAxiosInstance.get('/profiles/171/')).data;
	console.log(response);

	return (
		<>
			<div>
				<DetailedSpecialistCard
					name={response.name}
					userName={response.username}
					specialty={''}
					specialization={''}
					socials={[]}
					skills={[]}
					image={response.image}
					readyToParticipate={response.ready_to_participate}
				/>
			</div>
		</>
	);
};
