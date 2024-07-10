import React from 'react';
import styles from './project.module.scss';
import { BlankCard, MainButton } from '@/shared/ui';

export const ProjectEditForm = () => {
	return (
		<BlankCard>
			{/* <Form onSubmit={} className={styles.formSettings}> */}
				<h2 className={styles.formSettings__title}>Настройка аккаунта</h2>

				<div className={styles.formSettings__list}>
					<div className={styles.formSettings__listItem}>
						<div className={styles.formSettings__item}>
							<p className={styles.formSettings__subtitle}>Видимость профиля</p>
						</div>
					</div>
				</div>
				<MainButton
					// type="button"
					variant={'primary'}
					width={'regular'}
					// onClick={handleSubmit()}
				>
					Сохранить настройки
				</MainButton>
			{/* </Form> */}
		</BlankCard>
	);
};
