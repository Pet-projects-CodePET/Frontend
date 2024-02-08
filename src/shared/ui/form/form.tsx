'use client';

import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styles from './form.module.scss';

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
	extraClass?: string;
	schema?: yup.AnyObjectSchema;
	onSubmit: (data: Record<string, any>) => void;
}

const Form: FC<FormProps> = ({
	extraClass,
	children,
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
				{...FormHTMLAttributes}
			>
				{children}
			</form>
		</FormProvider>
	);
};

export default Form;
