import { TProfession, TSkills } from "@/shared/types/specialty";
import { Control, FieldValues } from 'react-hook-form';
export interface IFormCreateProjectCard {
    allSkills: TSkills[];
    professions: TProfession[];
    control: Control<FieldValues>;
    name?: string;
    setSubmitSuccessfulReset: (arg: boolean) => void;
	isSubmitSuccessfulReset: boolean;
}