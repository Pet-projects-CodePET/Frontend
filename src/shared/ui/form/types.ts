import { HTMLAttributes, ReactNode, FormEventHandler } from 'react';
import * as z from 'zod';
import { IUser } from '@/services/models/IUser';

export type FormProps = HTMLAttributes<HTMLFormElement> & {
	children: ReactNode;
	extraClass?: string;
	schema?: z.ZodEffects<z.AnyZodObject> | z.AnyZodObject;
	onSubmit: FormEventHandler<HTMLFormElement> & ((data: IUser) => void);
};
