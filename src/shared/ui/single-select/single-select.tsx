'use client';

import React, { FC } from 'react';
import Select, { components, OptionProps } from 'react-select';
import { SingleSelectProps } from './type';
import { Option } from '@/shared/types/option';
import CheckIcon from '@/shared/assets/icons/check-icon.svg';

export const SingleSelect: FC<SingleSelectProps> = ({
	name,
	caption,
	options,
	selectedOption,
}) => {
	return (
		<div>
			<Select
				instanceId={name}
				name={name}
				// closeMenuOnSelect={false}
				// menuIsOpen={true}
				components={{ Option, DropdownIndicator: () => null }}
				defaultValue={selectedOption}
				options={options}
				isClearable={false}
				isSearchable={false}
				isDisabled={false}
				placeholder={caption}
				formatOptionLabel={() => caption}
				onChange={(option) => console.log(option)}
				styles={{
					container: (base) => ({ ...base, width: '100%' }),
					placeholder: (base) => ({
						...base,
						color: '#020617',
					}),
					option: (base, state) => ({
						...base,
						minHeight: '44px',
						padding: '0px 16px',
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
							? '#E8EEFF' // не выбранная опция
							: state.isSelected
								? 'transparent' // выбранная опция
								: 'transparent', // обычное состояние
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
						// backgroundColor: state.isFocused ? '#E8EEFF' : 'white',

						boxShadow: '0 0 0 0 transparent',
						cursor: 'pointer',
					}),
					menuList: (base) => ({
						...base,
						padding: '0px 0px',
					}),
					menu: (base) => ({
						...base,
						width: '320px',
						borderRadius: '12px',
						border: '1px solid #E2E8F0',
						boxShadow: '2px 2px 12px 0px rgba(62, 56, 56, 0.10)',
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
			{props.isSelected && <CheckIcon />}
		</components.Option>
	);
};
