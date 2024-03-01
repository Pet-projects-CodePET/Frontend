'use client';

import React, { FC } from 'react';
import Select, { components, OptionProps } from 'react-select';
import { Option, SingleSelectProps } from '../type';

export const SingleSelect: FC<SingleSelectProps> = ({
	options,
	selectedOption,
	handleChange,
}) => {
	return (
		<div>
			<Select
				// closeMenuOnSelect={false}
				components={{ Option, DropdownIndicator: () => null }}
				defaultValue={selectedOption}
				options={options}
				isClearable={false}
				isSearchable={false}
				isDisabled={false}
				placeholder="Статус проекта"
				formatOptionLabel={() => 'Статус проекта'}
				onChange={(option: Option) => handleChange(option)}
				styles={{
					container: (base) => ({ ...base, width: '100%' }),
					placeholder: (base) => ({
						...base,
						color: '#020617',
					}),
					option: (base, state) => ({
						...base,
						minHeight: '40px',
						padding: '8px 16px',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						fontFamily: 'Open Sans, sans-serif',
						fontSize: '16px',
						fontWeight: '400',
						color: state.isSelected
							? '#020617'
							: state.isDisabled
								? 'gray'
								: state.isFocused
									? '#020617'
									: 'inherit',
						backgroundColor: state.isFocused
							? '#E8EEFF'
							: state.isSelected
								? 'white'
								: 'white',
					}),
					control: (base, state) => ({
						...base,
						width: '170px',
						height: '48px',
						padding: '8px 12px',
						border: '1px solid #E2E8F0',
						borderRadius: '1000px',
						outline: 'none',
						fontFamily: 'Open Sans, sans-serif',
						fontSize: '16px',
						fontWeight: '700',
						color: state.isFocused ? '#020617' : '#E2E8F0',
						backgroundColor: state.isFocused ? '#E8EEFF' : 'white',
						boxShadow: '0 0 0 0 transparent',
						cursor: 'pointer',
					}),
					menu: (base) => ({
						...base,
						width: '320px',
					}),
					singleValue: (base) => ({
						...base,
						color: '#020617',
					}),
					indicatorSeparator: () => ({
						display: 'none',
					}),
				}}
			/>
		</div>
	);
};

const Option = (props: OptionProps<Option>) => {
	return (
		<components.Option {...props}>
			{props.label}
			{props.isSelected && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M20.7096 5.79536C21.0987 6.18724 21.0965 6.82041 20.7046 7.20957L9.62772 18.2096C9.23776 18.5968 8.60839 18.5968 8.21844 18.2096L3.29536 13.3207C2.90348 12.9315 2.90127 12.2984 3.29043 11.9065C3.67959 11.5146 4.31276 11.5124 4.70464 11.9015L8.92308 16.0907L19.2954 5.79043C19.6872 5.40127 20.3204 5.40348 20.7096 5.79536Z"
						fill="#475569"
					/>
				</svg>
			)}
		</components.Option>
	);
};
