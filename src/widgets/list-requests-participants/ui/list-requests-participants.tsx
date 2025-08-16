import React, { useState, useEffect } from 'react';
import { RequestParticipantCard } from '@/widgets/request-participant-card';
import { RequestParticipantCardType } from '@/widgets/request-participant-card/ui/types';
import { useGetAllRequestsParticipationQuery } from '@/services/ProjectService';
import styles from './list-requests-participants.module.scss';

type CurrentSettingsType = {
	currentPage: number;
	role: string;
	statusNumber: null | number;
};
export const ListRequestsParticipants = ({
	arrayRequests,
	currentSettings,
	setCurrentSettings,
}: {
	arrayRequests: RequestParticipantCardType[];
	currentSettings: CurrentSettingsType;
	setCurrentSettings: (arg: CurrentSettingsType) => void;
}) => {
	const [requests, setRequests] = useState<RequestParticipantCardType[]>([]);
	 const { refetch } = useGetAllRequestsParticipationQuery(currentSettings);
	useEffect(() => {
		if (arrayRequests) {
			setRequests(arrayRequests);
		}
	}, [arrayRequests]);

	const handleDeleteCard = (id: number) => {
		setRequests(requests.filter((item) => Number(item.id) !== id));
	};

	 useEffect(() => {
    if (requests?.length === 0) {
      if (currentSettings.currentPage > 1) {
        setCurrentSettings({
          ...currentSettings,
          currentPage: currentSettings.currentPage - 1,
        });
      } else {
        refetch(); 
      }
    }
  }, [requests, currentSettings, setCurrentSettings, refetch]);

	return (
		<>
			{requests?.length > 0 ? (
				requests?.map((card: RequestParticipantCardType) => (
					<RequestParticipantCard
						key={card.id}
						request_status={card.request_status}
						project={card.project}
						position={card.position}
						cover_letter={card.cover_letter}
						id={card.id}
						handleDeleteCard={handleDeleteCard}
					/>
				))
			) : (
				<div className={styles.textContainer}>
					<p className={styles.text}>Здесь появятся ваши заявки на проекты</p>
					<span className={styles.subtitle}>
						Откликнитесь на интересующие вас проекты
					</span>
				</div>
			)}
		</>
	);
};
