/* eslint-disable camelcase */
'use client';
import React from 'react';
import { DetailedSpecialistCard } from '@/widgets/specialist-detailed-card';
import { useGetSpecialistByIdQuery } from '@/services/SpecialistService';
import { Loader } from '@/shared/ui';

export const DetailedSpecialistPage = ({ user_id }: { user_id: number }) => {

	const { data: specialist, isLoading } = useGetSpecialistByIdQuery({
		user_id,
	});

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<DetailedSpecialistCard
					user_id={user_id}
					avatar={specialist?.avatar}
					name={specialist?.name}
					userName={specialist?.username}
					readyToParticipate={specialist?.ready_to_participate || false}
					specialists={specialist?.specialists}
					about={specialist?.about}
					portfolioLink={specialist?.portfolio_link}
					birthday={specialist?.birthday || 0}
					country={specialist?.country}
					city={specialist?.city}
					phoneNumber={specialist?.phone_number}
					telegramNick={specialist?.telegram_nick}
					email={specialist?.email}
					projects={specialist?.projects}
					is_favorite={specialist?.is_favorite}
				/>
			)}
		</>
	);
};
