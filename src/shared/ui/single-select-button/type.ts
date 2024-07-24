import { Option } from '@/shared/types/option';

export type SingleSelectButtonProps = {
	name: string;
	buttonLabel: string;
	options: Option[];
	value?: Option;
	onChange: (options: Option[]) => void;
};
