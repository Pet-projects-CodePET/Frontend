import React from 'react';
import styles from './project.module.scss';
import { BlankCard, Form, Input, MainButton, TextEditor } from '@/shared/ui';
import {
	Availability,
	ProjectSpecification,
} from '@/entities/project-change-filter';

export const ProjectEditForm = () => {
	return (
		<BlankCard>
			<Form onSubmit={''} className={styles.formSettings}>
				<h2 className={styles.formSettings__title}>Детали проекта</h2>
				<div className={styles.formSettings__listPassword}>
					<>
						<h3 className={styles.formSettings__thirdTitle}>
							Название проекта
						</h3>
						<Input
							className={styles.formSettings__input}
							name="project-name"
							type="project-name"
							placeholder="Название проекта"
						/>
					</>
					<>
						<h3 className={styles.formSettings__thirdTitle}>
							Название проекта
						</h3>
						<TextEditor labelName={''} />
					</>
					<h3 className={styles.formSettings__thirdTitle}>
						Направление разработки
					</h3>
					<div className={styles.formSettings__blockContainer}>
						<ProjectSpecification />
					</div>
					<h3 className={styles.formSettings__thirdTitle}>Занятость </h3>
					<div className={styles.formSettings__blockContainer}>
						<Availability />
					</div>
				</div>
				<div className={styles.formSettings__button}>
					<MainButton variant={'primary'} width={'regular'}>
						Сохранить
					</MainButton>
				</div>
			</Form>
		</BlankCard>
	);
};
