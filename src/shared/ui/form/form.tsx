'use client';

import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { FormProps } from './types';
import styles from './form.module.scss';

export const Form: FC<FormProps> = ({
	children,
	extraClass,
	schema,
	onSubmit,
	...FormHTMLAttributes
}) => {
	const methods = useForm({
		resolver: schema ? yupResolver(schema) : undefined,
	});

	const { handleSubmit } = methods;

	return (
		<FormProvider {...methods}>
			<form
				className={`${styles.form} ${extraClass}`}
				onSubmit={handleSubmit(onSubmit)}
				{...FormHTMLAttributes}>
				{children}
			</form>
		</FormProvider>
	);
};

export default Form;
