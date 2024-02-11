import Image from 'next/image';

import { MainButton } from '@/shared/ui';
import backgroundImage from '@/shared/assets/images/backgroundLoginLayout.png';

import styles from './promo.module.scss';

export const Promo = () => {
	return (
		<section className={styles.promo__container}>
			<div className={styles.promo__imageContainer}>
				<Image
					src={backgroundImage}
					alt="abstract image"
					priority={true}
					fill
				></Image>
			</div>
			<div className={styles.promo__absoluteContainer}>
				<div className={styles.promo__textContainer}>
					<p className={styles.promo__title}>
						Пет-проекты для всех и идеальный для тебя
					</p>
					<p className={styles.promo__subtitle}>
						CodePET - платформа, которая дает возможности для сотрудничества,
						обмена знаниями и портфолио
					</p>
				</div>
				<div className={styles.promo__itemsContainer}>
					<div className={styles.promo__items}>
						<p className={styles.promo__itemOne}>1714</p>
						<p className={styles.promo__itemTwo}>проектов</p>
					</div>
					<div className={styles.promo__items}>
						<p className={styles.promo__itemOne}>1714</p>
						<p className={styles.promo__itemTwo}>участников</p>
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
