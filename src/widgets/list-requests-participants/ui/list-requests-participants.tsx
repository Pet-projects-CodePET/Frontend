import React, { useState, useEffect } from 'react';
import { RequestParticipantCard } from '@/widgets/request-participant-card';
import { RequestParticipantCardType } from '@/widgets/request-participant-card/ui/types';
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
	refetch,
}: {
	arrayRequests: RequestParticipantCardType[];
	currentSettings: CurrentSettingsType;
	setCurrentSettings: (arg: CurrentSettingsType) => void;
	refetch: () => void;
}) => {
	const [requests, setRequests] = useState<RequestParticipantCardType[]>([]);
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
					currentPage: currentSettings.currentPage - 1,
					role: currentSettings.role,
					statusNumber: currentSettings.statusNumber,
				});
			}
			// if (currentSettings.currentPage === 1) {
			// 	refetch();
			// }
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [requests, refetch]);

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
