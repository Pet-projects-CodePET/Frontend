'use client';
import React, { FC } from 'react';
import styled from '@emotion/styled';
import Select, { SelectRenderer } from 'react-dropdown-select';
import { SingleSelectButtonProps } from './type';
import CheckIcon from '@/shared/assets/icons/check-icon.svg';

export const SingleSelectButton: FC<SingleSelectButtonProps> = ({
	name,
	buttonLabel,
	options,
	value,
	onChange,
}) => {
	const StyledSelect = styled(Select)`
		color: #020617 !important;
		background-color: #feffff !important;
		border: 1px solid #e2e8f0 !important;
		border-radius: 50px !important;
		min-height: 40px !important;
		padding: 0px 16px !important;

		font-family:
			Open Sans,
			sans-serif;
		font-size: 16px;
		font-weight: 700;

		:hover {
			box-shadow: 0px 0px 6px 0px rgba(132, 129, 255, 0.5);
		}
		:focus {
			box-shadow: none !important;
			border: 1px solid #8caaff;
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

	const buttonMenuCaptionStyle = {
		display: 'flex',
		alignItems: 'center',
		gap: '8px',
	};

	// Кнопка с надписью
	const contentRenderer = () => (
		<div style={buttonMenuCaptionStyle}>{buttonLabel}</div>
	);

	// Отображение выпадающего списка с опциями и фильтром
	const dropdownRenderer = ({
		props,
		state,
		methods,
	}: SelectRenderer<string | object>) => {
		return (
			<>
				{props.options.map((option) => {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					const isSelected = state.values?.[0]?.value === option.value;

					return (
						<Item
							key={
								// eslint-disable-next-line @typescript-eslint/ban-ts-comment
								// @ts-ignore
								option[props.valueField]
							}
							onClick={() => {
								// eslint-disable-next-line @typescript-eslint/ban-ts-comment
								// @ts-ignore
								if (option.disabled) return;

								if (isSelected) {
									methods.clearAll();
								} else {
									methods.addItem(option);
								}
							}}>
							<div>
								{
									// eslint-disable-next-line @typescript-eslint/ban-ts-comment
									// @ts-ignore
									option[props.labelField]
								}
							</div>
							{isSelected && <CheckIcon />}
						</Item>
					);
				})}
			</>
		);
	};

	return (
		<StyledSelect
			name={name}
			options={options}
			values={value ? [value] : []}
			onChange={onChange}
			contentRenderer={contentRenderer}
			dropdownRenderer={({ props, state, methods }) =>
				dropdownRenderer({ props, state, methods })
			}
			dropdownHandle={false}
			valueField="value"
			labelField="label"
			multi={false}
		/>
	);
};
