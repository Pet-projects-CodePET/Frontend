'use client';

import React, { FC } from 'react';
import Select, {
	components,
	ControlProps,
	CSSObjectWithLabel,
	GroupBase,
	OptionProps,
} from 'react-select';
import { SingleSelectProps } from './type';
import { Option } from '@/shared/types/option';
import CheckIcon from '@/shared/assets/icons/check-icon.svg';

export const SingleSelect: FC<SingleSelectProps> = ({
	name,
	caption,
	options,
	selectedOption,
}) => {
	const containerStyles = (base: CSSObjectWithLabel) => ({
		...base,
		width: '100%',
	});

	const placeholderStyles = (base: CSSObjectWithLabel) => ({
		...base,
		color: '#020617',
	});

	const optionStyles = (
		base: CSSObjectWithLabel,
		state: OptionProps<Option, boolean, GroupBase<Option>>
	) => ({
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
	});

	const controlStyles = (
		base: CSSObjectWithLabel,
		state: ControlProps<Option, boolean, GroupBase<Option>>
	) => ({
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
	});

	const menuListStyles = (base: CSSObjectWithLabel) => ({
		...base,
		padding: '0px 0px',
	});

	const menuStyles = (base: CSSObjectWithLabel) => ({
		...base,
		width: '320px',
		borderRadius: '12px',
		border: '1px solid #E2E8F0',
		boxShadow: '2px 2px 12px 0px rgba(62, 56, 56, 0.10)',
	});

	const singleValueStyles = (base: CSSObjectWithLabel) => ({
		...base,
		color: '#020617',
	});

	const indicatorSeparatorStyles = (base: CSSObjectWithLabel) => ({
		...base,
		display: 'none',
	});

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
					container: (base) => containerStyles(base),
					placeholder: (base) => placeholderStyles(base),
					option: (base, state) => optionStyles(base, state),
					control: (base, state) => controlStyles(base, state),
					menuList: (base) => menuListStyles(base),
					menu: (base) => menuStyles(base),
					singleValue: (base) => singleValueStyles(base),
					indicatorSeparator: (base) => indicatorSeparatorStyles(base),
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
