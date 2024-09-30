"use client"
import { MainButton } from '@/shared/ui';
import { FormProject, FormProjectSpecialists } from '@/widgets';
import React from 'react';
import { Form, SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
	name: string;
	contacts: { [key: string]: string }[]; // Dynamic contact keys
};
export const ProfileCreateProject = () => {
	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.table(data);
	};
    const { control } = useForm();

	return (
		<Form onSubmit={onSubmit}>
			<FormProject control={control} />
			<FormProjectSpecialists />

			<MainButton
				variant={'primary'}
				width={'min'}
				type="submit"
				disabled={false}>
				{'Submit'}
			</MainButton>
		</Form>
	);
};
