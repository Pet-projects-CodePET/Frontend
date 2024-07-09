import { HTMLAttributes, ReactNode, FormEventHandler } from 'react';
import * as zod from 'zod';
import { IUser } from '@/services/models/IUser';

export type FormProps = HTMLAttributes<HTMLFormElement> & {
	children: ReactNode;
	extraClass?: string;
	schema?: zod.AnyZodObject;
	onSubmit: FormEventHandler<HTMLFormElement> & ((data: IUser) => void);
};
