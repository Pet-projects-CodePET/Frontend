import React, { FC } from 'react';
import { MultiSelectInputProps } from './type';
import styles from './multi-select-input.module.scss';
import styled from '@emotion/styled';
import Select, {
	SelectItemRenderer,
	SelectRenderer,
} from 'react-dropdown-select';
import { InputSearch } from '../input-search/input-search';
import { Option } from '@/shared/types/option';
import CloseIcon from '@/shared/assets/icons/xmark.svg';

export const MultiSelectInput: FC<MultiSelectInputProps> = ({
	name,
	options,
	values,
	onChange,
	selectedAll,
	maxSelections,
	width = '100%',
	isSearchable,
	label,
	description = '',
	selectedItemsType = 'list',
}) => {
	// Отображение в виде текста, через запятую
	const contentRendererList = ({ state }: SelectRenderer<object | string>) => {
		return (
			<div>
				{state.values?.length > 0 &&
					Object.assign(state.values)
						.map((item: Option) => item.label)
						.join(', ')}
			</div>
		);
	};

	// Отображение в виде блоков текста с кнопкой удаления
	const contentRendererBlock = ({
		state,
		methods,
	}: SelectRenderer<object | string>) => {
		return (
			state.values?.length > 0 &&
			Object.assign(state.values).map((currentOption: Option) => {
				return (
					<span key={currentOption.value} className={styles.selectedItem}>
						{currentOption.label}
						<span
							onClick={(event) =>
								methods.removeItem(event, currentOption, true)
							}>
							{' '}
							<CloseIcon />
						</span>
					</span>
				);
			})
		);
	};

	// Отображение опции
	const customItemRenderer = ({
		item,
		itemIndex,
		state,
		methods,
	}: SelectItemRenderer<object | string>) => {
		const disabledOption =
			state?.values?.length >= (maxSelections || Infinity) &&
			!methods.isSelected(item);

		return (
			<StyledItem>
				{itemIndex === 0 && selectedAll ? (
					// Отображение опции для выбора всех опций
					<div
						onClick={() => {
							return methods.areAllSelected()
								? methods.clearAll()
								: methods.selectAll();
						}}>
						<input
							className={styles.customCheckbox}
							onChange={() => {
								return methods.areAllSelected()
									? methods.clearAll()
									: methods.selectAll();
							}}
							type="checkbox"
							checked={methods.areAllSelected() ? true : false}
						/>{' '}
						<label>Все</label>
					</div>
				) : (
					// Отображение стандартной опции
					<div
						className={disabledOption ? styles.disabledOption : ''}
						onClick={() => !disabledOption && methods.addItem(item)}>
						<input
							className={styles.customCheckbox}
							onChange={() => methods.addItem(item)}
							type="checkbox"
							checked={methods.isSelected(item)}
						/>
						<label>
							{
								// eslint-disable-next-line @typescript-eslint/ban-ts-comment
								// @ts-ignore
								item.label
							}
						</label>
					</div>
				)}
			</StyledItem>
		);
	};

	// Отображение выпадающего списка с опциями и фильтром
	const customDropdownRenderer = ({
		props,
		state,
		methods,
	}: SelectRenderer<string | object>) => {
		const regexp = new RegExp(state.search, 'i');

		return (
			<div>
				<Search>
					<InputSearch
						search={() => state.search}
						onChange={methods.setSearch}
					/>
				</Search>
				<StyledItems>
					{props.options
						.filter((item) => {
							const searchBy = props.searchBy || '';
							const labelField = props.labelField || '';
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore
							return regexp.test(item[searchBy] || item[labelField]);
						})
						.map((option) => {
							if (!props.keepSelectedInList && methods.isSelected(option)) {
								return null;
							}

							const disabledOption =
								state?.values?.length >= (maxSelections || Infinity) &&
								!methods.isSelected(option);

							return (
								<StyledItem
									// eslint-disable-next-line @typescript-eslint/ban-ts-comment
									// @ts-ignore
									key={option[props.valueField]}
									style={{
										color: disabledOption ? '#ccc' : undefined,
										cursor: disabledOption ? 'not-allowed' : undefined,
									}}
									onClick={() => {
										!disabledOption && methods.addItem(option);
										methods.searchResults;
									}}>
									<input
										className={styles.customCheckbox}
										type="checkbox"
										checked={methods.isSelected(option)}
										onChange={() => {
											methods.addItem(option);
										}}
									/>
									<label>
										{
											// eslint-disable-next-line @typescript-eslint/ban-ts-comment
											// @ts-ignore
											option[props.labelField]
										}
									</label>
								</StyledItem>
							);
						})}
				</StyledItems>
			</div>
		);
	};

	const StyledSelect = styled(Select)`
		color: #020617;
		font-feature-settings:
			'clig' off,
			'liga' off;
		font-family:
			Open Sans,
			sans-serif;
		font-size: 16px;
		font-weight: 400;
		line-height: 24px; /* 150% */
		letter-spacing: 0.25px;

		background-color: #feffff;
		border: 1px solid #e2e8f0;
		border-radius: 12px;
		min-height: 48px;
		cursor: pointer;
		${selectedItemsType === 'list'
			? 'padding: 8px 12px;'
			: 'padding: 8px 16px;'}

		:hover,
		:focus {
			border: 1px solid #8caaff;
			box-shadow: none;
		}

		.react-dropdown-select-clear,
		.react-dropdown-select-dropdown-handle {
			color: #fff;
		}

		.react-dropdown-select-option {
			padding: 4px 12px;
			color: #020617;
			border: 1px solid #e2e8f0;
			border-radius: 20px;
			background-color: transparent;
		}

		.react-dropdown-select-item {
			color: #333;
		}

		.react-dropdown-select-input {
			color: #fff;
		}

		.react-dropdown-select-dropdown {
			position: absolute;
			left: 0;
			border: 1px solid #e2e8f0;
			width: 100%;
			padding: 8px 0;
			display: flex;
			flex-direction: column;
			border-radius: 12px;
			max-height: 308px;
			${({ searchable }) =>
				searchable && searchable !== undefined
					? 'overflow: hidden;'
					: 'overflow: auto;'}
			z-index: 9;
			background: #fff;
			box-shadow: 0px 0px 10px 0px rgba(21, 22, 23, 0.1);

			::-webkit-scrollbar {
				width: 8px;
				background-color: transparent;
			}

			::-webkit-scrollbar-thumb {
				background-color: #e2e8f0;
				border-radius: 4px;
			}

			::-webkit-scrollbar-thumb:hover {
				background-color: #cdd4db;
			}
		}

		.react-dropdown-select-item {
			color: #f2f2f2;
			border-bottom: 1px solid #333;

			:hover {
				color: #ffffff80;
			}
		}

		.react-dropdown-select-item.react-dropdown-select-item-selected,
		.react-dropdown-select-item.react-dropdown-select-item-active {
			background: #111;
			border-bottom: 1px solid #333;
			color: #fff;
			font-weight: bold;
		}

		.react-dropdown-select-item.react-dropdown-select-item-disabled {
			background: #777;
			color: #ccc;
		}

		.react-dropdown-select-content {
			justify-content: flex-start;
			gap: 8px;
		}
	`;

	const StyledItems = styled.div`
		color: black;
		overflow: auto;
		min-height: 10px;
		max-height: 200px;

		::-webkit-scrollbar {
			width: 8px;
			background-color: transparent;
		}

		::-webkit-scrollbar-thumb {
			background-color: #e2e8f0;
			border-radius: 4px;
		}

		::-webkit-scrollbar-thumb:hover {
			background-color: #cdd4db;
		}
	`;

	const StyledItem = styled.div`
		padding: 8px 16px;
		color: #020617;

		font-family: 'Open Sans', sans-serif;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 24px; /* 150% */
		letter-spacing: 0.25px;
		cursor: pointer;

		> div {
			display: flex;

			align-items: center;
		}

		input {
			margin-right: 8px;
		}

		:hover {
			background: #e8eeff;
		}
	`;

	const Search = styled.div`
		margin: 8px 16px 16px;
		color: 'green';
	`;

	const buttonMenuStyle = {
		minWidth: width,
	};

	return (
		<>
			<label className={styles.inputLabel}>{label}</label>
			{isSearchable ? (
				<StyledSelect
					multi
					name={name}
					className={styles.inputSelect}
					contentRenderer={contentRendererBlock}
					dropdownHandle={false}
					onChange={(options) => onChange(options)}
					options={options}
					values={values}
					style={buttonMenuStyle}
					dropdownRenderer={customDropdownRenderer}
					searchable={true}
					placeholder=""
				/>
			) : (
				<StyledSelect
					multi
					name={name}
					className={styles.inputSelect}
					contentRenderer={contentRendererList}
					dropdownHandle={false}
					onChange={(options) => onChange(options)}
					options={options}
					values={values}
					style={buttonMenuStyle}
					itemRenderer={customItemRenderer}
					searchable={false}
					placeholder=""
				/>
			)}
			{description?.length > 0 && (
				<span className={styles.description}>{description}</span>
			)}
		</>
	);
};
