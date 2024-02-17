import { InputHTMLAttributes } from 'react';
import { UseFormRegister, FieldValues} from "react-hook-form"

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string
    labelName?:string
    error?: string
    register: UseFormRegister<FieldValues>
    link?: {
        text: string,
        href: string 
    }
};


