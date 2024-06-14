export type TogglerProps = {
	variant?: 'default' | 'error' | 'disabled';
	checked: boolean;
	id?: string;
	name?: string;
	onChange: (checked: boolean) => void;
	// disabled?: boolean;
};
