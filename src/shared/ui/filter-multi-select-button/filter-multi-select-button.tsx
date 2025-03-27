'use client';
import React, { FC, useEffect, useRef, useState } from 'react';
import { FilterMultiSelectButtonProps } from './type';
import styles from './filter-multi-select-button.module.scss';
import clsx from 'clsx';
import { InputSearch } from '../input-search/input-search';
import { Option } from '../option-item/type';
import { OptionItem } from '../option-item/option-item';
import IconInformation from '../../assets/icons/information.svg';

export const FilterMultiSelectButton: FC<FilterMultiSelectButtonProps> = ({
	options,
	value = [],
	label,
	onChange,
	tooltip = '',
	selectedAll = false,
	maxSelections = 0,
	isSearchable = false,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedOptions, setSelectedOptions] = useState<Option[]>(value);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
	const [searchQuery, setSearchQuery] = useState<string>('');
	const filteredOptions = options.filter((option) =>
		option.label.toLowerCase().includes(searchQuery.toLowerCase())
	);
	const [buttonIsHovered, setButtonIsHovered] = useState<boolean>(false);
	const [showTooltip, setShowTooltip] = useState(false);
	let timeoutId: NodeJS.Timeout | null = null;

	const handleButtonMouseEnter = () => {
		setButtonIsHovered(true);
		timeoutId = setTimeout(() => {
			setShowTooltip(true);
		}, 1000);
	};

	const handleButtonMouseLeave = () => {
		setButtonIsHovered(false);
		if (timeoutId) {
			clearTimeout(timeoutId);
			timeoutId = null;
		}
		setShowTooltip(false);
	};

	const handleClickFilterButton = () => {
		setIsOpen((prev) => !prev);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			containerRef.current &&
			!containerRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
			setSearchQuery('');
		}
	};

	const handleOptionChange = (option?: Option) => {
		if (option && isSelected(option)) {
			// Удаляем опцию
			const newSelected = selectedOptions.filter(
				(o) => o.value !== option.value
			);
			setSelectedOptions(newSelected);
			setIsAllChecked(false);
		} else {
			// Добавляем опцию, если не превышен лимит
			if (maxSelections <= 0 || selectedOptions.length < maxSelections) {
				if (option) {
					setSelectedOptions([...selectedOptions, option]);
				}
				// Проверяем, выбраны ли все опции
				if (selectedAll && selectedOptions.length + 1 === options.length) {
					setIsAllChecked(true);
				}
			}
		}
	};

	const handleAllOptionChange = () => {
		if (isAllChecked) {
			setSelectedOptions([]);
			setIsAllChecked(false);
		} else {
			if (maxSelections > 0 && options.length > maxSelections) {
				setSelectedOptions(options.slice(0, maxSelections));
			} else {
				setSelectedOptions([...options]);
			}
			setIsAllChecked(!isAllChecked);
		}
	};

	const handleSearchChange = (query: string) => {
		setSearchQuery(query);
	};

	const isSelected = (option: Option) => {
		return selectedOptions.some((o) => o.value === option.value);
	}

	const isOptionDisabled = (option: Option) => {
		return (maxSelections > 0 && selectedOptions.length >= maxSelections && !isSelected(option));
	};

	const isAllOptionDisabled = () => {
		return maxSelections > 0 && options.length > maxSelections && !isAllChecked;
	};

	// Проверяем, все ли опции выбраны при монтировании
	useEffect(() => {
		if (selectedAll && options.length > 0) {
			const allSelected = options.length === selectedOptions.length;
			setIsAllChecked(allSelected);
		}
	}, [options, selectedAll, selectedOptions.length]);

	useEffect(() => {
		onChange(selectedOptions);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedOptions]);

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className={styles.filterWrapper} ref={containerRef}>
			{/* FilterButton */}
			<div
				className={clsx(
					styles.filterButton,
					isOpen && styles.filterButton_isActive,
					selectedOptions.length > 0 && styles.filterButton_selected
				)}
				onClick={handleClickFilterButton}
				onMouseEnter={handleButtonMouseEnter}
				onMouseLeave={handleButtonMouseLeave}>
				{label}
				{tooltip && <IconInformation className={styles.iconInformation} />}
			</div>
			{tooltip.length > 0 && buttonIsHovered && showTooltip && !isOpen && (
				<span className={styles.filterButton__tooltip}>{tooltip}</span>
			)}
			{isOpen && (
				<div className={styles.filterContainer}>
					{/* Filter */}
					{isSearchable && (
						<InputSearch
							className={styles.filterInput}
							search={handleSearchChange}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								handleSearchChange(e.target.value);
							}}
						/>
					)}
					<ul className={styles.filterList}>
						{selectedAll && (
							<OptionItem
								option={{ value: -1, label: 'Все' }}
								selected={isAllChecked}
								disabled={isAllOptionDisabled()}
								onChange={handleAllOptionChange}
							/>
						)}
						{filteredOptions.map((option) => (
							<OptionItem
								key={option.value}
								option={option}
								selected={isSelected(option)}
								disabled={isOptionDisabled(option)}
								onChange={handleOptionChange}
							/>
						))}
						{filteredOptions.length === 0 && (
							<li className={styles.filterList__noResults}>Ничего не найдено</li>
						)}
					</ul>
				</div>
			)}
		</div>
	);
};
