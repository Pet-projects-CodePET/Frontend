export type ToggleCheck = {
	id?: string;
	name?: string;
	variant: 'defaultOn' | 'defaultOf' | 'errorDefaultOn' | 'errorDefaultOf';
	checked?: boolean;
	onChange: (checked: boolean) => void;
	disabled?: boolean;
};