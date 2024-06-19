export type MenuForVisibleProps = {
	isOpen: boolean;
	settings: number | undefined;
	nameSettings: string;
	changeVisibleStatus: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
