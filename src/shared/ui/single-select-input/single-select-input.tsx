import React, { FC } from 'react';
import { SingleSelectInputProps } from './types';
import Select, { SelectRenderer } from 'react-dropdown-select';
import styled from '@emotion/styled';
import CheckIcon from '@/shared/assets/icons/check-icon.svg';
import styles from './single-select-input.module.scss';
import { InputSearch } from '../input-search/input-search';

export const SingleSelectInput: FC<SingleSelectInputProps> = ({
	name,
	label,
	options,
	value,
	onChange,
	description = '',
	isSearchable = false,
}) => {
	const StyledSelect = styled(Select)`
		color: #020617 !important;
		background-color: #feffff !important;
		border: 1px solid #e2e8f0 !important;
		border-radius: 12px !important;
		min-height: 50px !important;
		padding: 0px 16px !important;

		:hover,
		:focus {
			border: 1px solid #8caaff !important;
			box-shadow: none !important;
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
	`;

	const Item = styled.div`
		display: flex;
		justify-content: space-between;
		align-self: stretch;
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
		border-radius: none;

		:hover {
			background-color: #e8eeff;
		}
	`;

	const Search = styled.div`
		margin: 8px 16px 16px;
	`;

	const customContentRenderer = ({
		state,
	}: SelectRenderer<string | object>) => (
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		<div style={{ cursor: 'pointer' }}>{state.values?.[0]?.label}</div>
	);

	// Отображение выпадающего списка с опциями и фильтром
	const customDropdownRenderer = ({
		props,
		state,
		methods,
	}: SelectRenderer<string | object>) => {
		const regexp = new RegExp(state.search, 'i');

		return (
			<>
				{isSearchable && (
					<Search>
						<InputSearch
							search={() => state.search}
							onChange={methods.setSearch}
						/>
					</Search>
				)}
				{props.options
					.filter((item) => {
						const searchBy = props.searchBy || '';
						const labelField = props.labelField || '';
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						// @ts-ignore
						return regexp.test(item[searchBy] || item[labelField]);
					})
					.map((option) => {
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
								{isSelected && <CheckIcon width="1.5em" height="1.5em" />}
							</Item>
						);
					})}
			</>
		);
	};

	return (
		<div className={styles.wrapper}>
			<label className={styles.label}>{label}</label>
			<StyledSelect
				name={name}
				className={styles.input}
				options={options}
				values={value ? [value] : []}
				onChange={onChange}
				contentRenderer={customContentRenderer}
				dropdownRenderer={customDropdownRenderer}
				dropdownHandle={false}
				multi={false}
			/>
			{description?.length > 0 && (
				<span className={styles.description}>{description}</span>
			)}
		</div>
	);
};
