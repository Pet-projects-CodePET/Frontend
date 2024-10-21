'use client';
import { Form, MainButton } from '@/shared/ui';
import { FormProject, FormProjectSpecialists } from '@/widgets';
import React from 'react';
import styles from './profile-create-project-page.module.scss';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Project } from './types';

type FormValues = {
	name: string;
	contacts: { [key: string]: string }[]; // Dynamic contact keys
};
export const ProfileCreateProject = () => {
	let obj: Project;
	const onSubmit: SubmitHandler<FormValues> = (data: Project) => {
		obj = { ...data };

		console.table(obj);
	};
	const { control } = useForm();
	return (
		<Form onSubmit={onSubmit} extraClass={styles.form}>
			<FormProject control={control} />
			<FormProjectSpecialists control={control} />
			<div className={styles.btn}>
				<MainButton
					variant={'primary'}
					width={'min'}
					type="submit"
					disabled={false}>
					{'Submit'}
				</MainButton>
			</div>
		</Form>
	);
};
