import React from 'react';
import { MultiSelectProps } from './type';
import styled from '@emotion/styled';
import Select from 'react-dropdown-select';
import styles from './multi-select.module.scss';

export const MultiSelect: React.FC<MultiSelectProps> = ({
	name,
	caption,
	options,
	values,
	onChange,
}) => {
	const customContentRenderer = ({ state, methods }) => (
		<div style={buttonMenuCaptionStyle}>
			{caption}{' '}
			{state.values?.length > 0 &&
				`(${methods.areAllSelected() ? state.values.length - 1 : state.values.length})`}
		</div>
	);

	const itemRenderer = ({ item, methods, itemIndex }) => {
		return (
			<StyledItem>
				{itemIndex === 0 ? (
					<div
						onClick={
							methods.areAllSelected() ? methods.clearAll : methods.selectAll
						}>
						<input
							className={styles.customCheckbox}
							onChange={
								methods.areAllSelected() ? methods.clearAll : methods.selectAll
							}
							type="checkbox"
							checked={methods.areAllSelected() ? true : false}
						/>{' '}
						<label>Все</label>
					</div>
				) : item.disabled ? (
					<div aria-disabled>
						<label>{item.label}</label>
					</div>
				) : (
					<div onClick={() => methods.addItem(item)}>
						<input
							className={styles.customCheckbox}
							onChange={() => methods.addItem(item)}
							type="checkbox"
							checked={methods.isSelected(item)}
						/>{' '}
						<label>{item.label}</label>
					</div>
				)}
			</StyledItem>
		);
	};

	return (
		<StyledSelect
			multi
			instanceId={name}
			name={name}
			contentRenderer={customContentRenderer}
			dropdownHandle={false}
			onChange={onChange}
			itemRenderer={itemRenderer}
			options={options}
			values={values}
			style={buttonMenuStyle}
			// keepOpen={true}
		/>
	);
};

const buttonMenuStyle = {
	borderRadius: '50px',
	minHeight: '48px',
	minWidth: '124px',
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
		overflow: auto;
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
		justify-content: center;
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
