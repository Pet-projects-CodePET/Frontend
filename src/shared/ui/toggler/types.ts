export type TogglerProps = {
	variant?: 'default' | 'error' | 'disabled';
	checked: boolean;
	id?: string;
	name?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	// disabled?: boolean;
};
