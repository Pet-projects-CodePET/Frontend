'use client';

import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import styles from './form.module.scss';
import type { FormProps } from './types';

export const Form: FC<FormProps> = ({
	children,
	extraClass,
	schema,
	onSubmit,
	...FormHTMLAttributes
}) => {
	const methods = useForm({
		shouldUnregister: true,
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
