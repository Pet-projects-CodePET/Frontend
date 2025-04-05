import { Option } from '../option-item/type';

export type FilterMultiSelectButtonProps = {
	/** Текст на кнопке */
	label: string;
	/** Список выбора */
	options: Option[];
	/** Выбранные опции */
	value?: Option[];
	/** Выбрать все */
	selectedAll?: boolean;
	/** Ограничение на кол-во выбранных опций */
	maxSelections?: number;
	/** Поиск по списку */
	isSearchable?: boolean;
	/** Обработчик выбора опции */
	onChange: (options: Option[] | undefined) => void;
	/** Всплывающая подсказка */
	tooltip?: string;
};
