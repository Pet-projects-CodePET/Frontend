'use client';

import React, { FC } from 'react';
import styled from '@emotion/styled';
import Select from 'react-dropdown-select';
import { SingleSelectProps } from './type';
import CheckIcon from '@/shared/assets/icons/check-icon.svg';

export const SingleSelect: FC<SingleSelectProps> = ({
	name,
	buttonLabel,
	options,
	value,
	onChange,
}) => {
	const customContentRenderer = () => (
		<div style={buttonMenuCaptionStyle}>{buttonLabel}</div>
	);

	const customDropdownRenderer = ({ props, state, methods }) => {
		return (
			<>
				{props.options.map((option) => {
					const isSelected = state.values?.[0]?.value === option.value;

					return (
						<Item
							disabled={option.disabled}
							key={option[props.valueField]}
							onClick={() => {
								if (option.disabled) return;

								if (isSelected) {
									methods.clearAll();
								} else {
									methods.addItem(option);
								}
							}}
							isSelected={isSelected}>
							<div>{option[props.labelField]}</div>
							{isSelected && <CheckIcon />}
						</Item>
					);
				})}
			</>
		);
	};

	return (
		<div>
			<StyledSelect
				name={name}
				style={buttonMenuStyle}
				options={options}
				values={value ? [value] : []}
				onChange={onChange}
				contentRenderer={customContentRenderer}
				dropdownRenderer={customDropdownRenderer}
				dropdownHandle={false}
				valueField="value"
				labelField="label"
				multi={false}
			/>
		</div>
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
	fontFamily: 'Open Sans, sans-serif',
	fontSize: '16px',
	fontWeight: '700',
};

const StyledSelect = styled(Select)`
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

	.react-dropdown-select-content {
		justify-content: center;
	}
`;

const Item = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	padding: 10px 16px;
	color: #020617;
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px; /* 150% */
	letter-spacing: 0.25px;
	cursor: pointer;
	border: none;

	:hover {
		background-color: #e8eeff;
	}
`;
