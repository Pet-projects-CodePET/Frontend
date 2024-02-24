import { InputHTMLAttributes } from 'react';

export type InputSearchProps = InputHTMLAttributes<HTMLInputElement> & {
    search: (str:string)=>void;
    delay?:number;
};
