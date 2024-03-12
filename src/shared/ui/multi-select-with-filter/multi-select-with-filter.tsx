import React from 'react';
import { MultiSelectWithFilterProps } from './type';
import styled from '@emotion/styled';
import Select from 'react-dropdown-select';
import styles from './multi-select-with-filter.module.scss';
import { InputSearch } from '../input-search/input-search';

export const MultiSelectWithFilter: React.FC<MultiSelectWithFilterProps> = ({
	name,
	caption,
	options,
	values,
	onChange,
	maxSelections,
}) => {
	// Кнопка с надписью
	const customContentRenderer = ({ state }) => {
		return (
			<div style={buttonMenuCaptionStyle}>
				{caption} {state.values?.length > 0 && `(${state.values?.length})`}
			</div>
		);
	};

	const customDropdownRenderer = ({ props, state, methods }) => {
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
						.filter((item) =>
							regexp.test(item[props.searchBy] || item[props.labelField])
						)
						.map((option) => {
							if (!props.keepSelectedInList && methods.isSelected(option)) {
								return null;
							}

							const disabledOption =
								state?.values?.length >= (maxSelections || Infinity) &&
								!methods.isSelected(option);

							return (
								<StyledItem
									key={option[props.valueField]}
									disabled={disabledOption}
									onClick={() => {
										!disabledOption && methods.addItem(option);
									}}>
									<input
										className={styles.customCheckbox}
										type="checkbox"
										checked={methods.isSelected(option)}
										onChange={() => {
											methods.addItem(option);
										}}
									/>
									<label>{option[props.labelField]}</label>
								</StyledItem>
							);
						})}
				</StyledItems>
			</div>
		);
	};

	return (
		<StyledSelect
			multi
			instanceId={name}
			name={name}
			contentRenderer={customContentRenderer}
			dropdownRenderer={customDropdownRenderer}
			dropdownHandle={false}
			onChange={onChange}
			options={options}
			values={values}
			style={buttonMenuStyle}
		/>
	);
};

const buttonMenuStyle = {
	borderRadius: '50px',
	minHeight: '48px',
	minWidth: '207px',
};

const buttonMenuCaptionStyle = {
	cursor: 'pointer',
	padding: '0px 16px',
	fontFamily: 'sans-serif',
	fontSize: '16px',
	fontWeight: '700',
};

const StyledSelect = styled(Select)`
	color: #020617;

	.react-dropdown-select-clear,
	.react-dropdown-select-dropdown-handle {
		color: #fff;
	}

	.react-dropdown-select-option {
		border: 1px solid #fff;
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
		width: 320px;
		padding: 8px 0;
		display: flex;
		flex-direction: column;
		border-radius: 12px;
		max-height: 308px;
		overflow: hidden;
		z-index: 9;
		background: #fff;
		box-shadow: 0px 0px 10px 0px rgba(21, 22, 23, 0.1);
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
		justify-content: center;
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

	${({ disabled }) => disabled && 'color: #ccc; cursor: not-allowed;'}
`;

const Search = styled.div`
	margin: 8px 16px 16px;
`;
