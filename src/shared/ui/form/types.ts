import { HTMLAttributes, ReactNode, FormEventHandler } from 'react';
import * as yup from 'yup';
import { IUser } from '@/services/models/IUser';

export type FormProps = HTMLAttributes<HTMLFormElement> & {
	children: ReactNode;
	extraClass?: string;
	schema?: yup.AnyObjectSchema;
	onSubmit: FormEventHandler<HTMLFormElement> & ((data: IUser) => void);
};
