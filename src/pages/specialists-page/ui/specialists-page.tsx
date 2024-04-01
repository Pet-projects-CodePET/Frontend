'use client';
import React from 'react';
import { SpecialistCard } from '@/widgets/specialist-card';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { InputSearch } from '@/shared/ui/input-search/input-search';
import { specialistsArray } from '@/shared/constants/specialists/specialists';
import styles from './specialists-page.module.scss';

export const Specialists = () => {
	return (
		<>
			<section className={styles.specialists}>
				<div className={styles.specialists__wrapper}>
					<Header isLoggedIn />
					<div className={styles.specialists__container}>
						<h1 className={styles.specialists__title}>Специалисты</h1>
						<div className={styles.specialists__inputSearch}>
							<InputSearch search={() => {}} onChange={() => {}} />
						</div>
					</div>
					<div>Селекторы </div>
				</div>
				<div className={styles.specialists__cards}>
				{specialistsArray.map((specialist) => {
					return (
						<SpecialistCard
							specialization={specialist.specialization}
							specialty={specialist.specialty}
							key={specialist.id}
							telegram={specialist.telegram}
							skills={specialist.skills}
						/>
					);
				})}
				</div>

				<div>ПАГИНАЦИЯ</div>
			</section>
			<Footer />
		</>
	);
};
