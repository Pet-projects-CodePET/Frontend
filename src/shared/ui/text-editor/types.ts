export type TextEditorProps = {
	labelName?: string;
	placeholder?: string;
	desc?: string;
	name: string; // Name for form field
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	control?: any; // React Hook Form's control object for Controller
};
