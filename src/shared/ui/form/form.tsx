'use client';

import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

import styles from './form.module.scss';

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
	extraClass?: string;
	isUpdating?: boolean;
	submitText?: string;
	title?: string;
	subtitle?: string;
	schema?: yup.AnyObjectSchema;
	onSubmit: (data: Record<string, any>) => void;
}

const Form: FC<FormProps> = ({
	extraClass,
	submitText,
	title,
	subtitle,
	isUpdating = false,
	children,
	schema,
	onSubmit,
	...FormHTMLAttributes
}) => {
	const methods = useForm();

	return (
		<FormProvider {...methods}>
			<form
				className={`${styles.form} ${extraClass}`}
				onSubmit={methods.handleSubmit(onSubmit)}
				{...FormHTMLAttributes}
			>
				<h1 className={styles.title}>{title}</h1>
				<h2 className={styles.subtitle}>{subtitle}</h2>
				{children}
				<button type="submit">Отправить данные</button>
			</form>
		</FormProvider>
	);
};

export default Form;
