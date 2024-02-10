import { HTMLAttributes, ReactNode } from 'react';
import * as yup from 'yup';

export type FormProps = HTMLAttributes<HTMLFormElement> & {
	children: ReactNode;
	extraClass?: string;
	schema?: yup.AnyObjectSchema;
	onSubmit: (data: Record<string, any>) => void;
};
