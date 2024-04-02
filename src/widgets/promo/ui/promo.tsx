import React from 'react';
import Image from 'next/image';

import { MainButton } from '@/shared/ui';
import backgroundImage from '@/shared/assets/images/background-login-layout.png';
import { NounsDeclension } from '@/utils/declension/declension';
import {
	useGetCountQuery,
	useGetSectionQuery,
} from '@/services/GeneralService';
import styles from './promo.module.scss';

export const Promo = () => {

	const { data: counters } = useGetCountQuery(0);
	const { data: section } = useGetSectionQuery([]);  
	
	return (
		<section className={styles.promo__container}>
			<div className={styles.promo__imageContainer}>
				<Image
					src={backgroundImage}
					className={styles.promo__image}
					alt="abstract image"
					priority={true}
					fill></Image>
			</div>
			<div className={styles.promo__absoluteContainer}>
				<div className={styles.promo__textContainer}>
					<p className={styles.promo__title}>{section ? section.results[0].title : ' '}</p>
					<p className={styles.promo__subtitle}>{section ? section.results[0].description : ' '}
					</p>
				</div>
				<div className={styles.promo__itemsContainer}>
					<div className={styles.promo__items}>
						<p className={styles.promo__itemOne}>{counters?.projects}</p>
						<p className={styles.promo__itemTwo}>{NounsDeclension(counters?.projects, ['проект', 'проекта', 'проектов'])}</p> 
					</div>
					<div className={styles.promo__items}>
						<p className={styles.promo__itemOne}>{counters?.users}</p>
						<p className={styles.promo__itemTwo}>{NounsDeclension(counters?.users, ['участник', 'участника', 'участников'])}</p>
					</div>
				</div>
				<div className={styles.promo__button}>
					<MainButton variant="primary" width="max">
						Создать проект
					</MainButton>
				</div>
			</div>
		</section>
	);
};
