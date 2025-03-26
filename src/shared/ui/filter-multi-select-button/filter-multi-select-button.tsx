'use client';
import React, { FC, useEffect, useRef, useState } from 'react';
import { FilterMultiSelectButtonProps } from './type';
import styles from './filter-multi-select-button.module.scss';
import clsx from 'clsx';
import { InputSearch } from '../input-search/input-search';
import { Option } from '../option-item/type';
import { OptionItem } from '../option-item/option-item';

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

	const handleOptionChange = (option: Option) => {
		const isSelected = selectedOptions.some((o) => o.value === option.value);

		if (isSelected) {
			// Удаляем опцию
			const newSelected = selectedOptions.filter(
				(o) => o.value !== option.value
			);
			setSelectedOptions(newSelected);
			setIsAllChecked(false);
		} else {
			// Добавляем опцию, если не превышен лимит
			if (maxSelections <= 0 || selectedOptions.length < maxSelections) {
				setSelectedOptions([...selectedOptions, option]);
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

	const isOptionDisabled = (option: Option) => {
		return (
			maxSelections > 0 &&
			selectedOptions.length >= maxSelections &&
			!selectedOptions.some((o) => o.value === option.value)
		);
	};

	const isAllOptionDisabled = () => {
		return maxSelections > 0 && options.length > maxSelections && !isAllChecked;
	};

	const handleSearchChange = (query: string) => {
		setSearchQuery(query);
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
		<div className={styles.filterContainer} ref={containerRef}>
			{/* FilterButton */}
			<div
				className={clsx(
					styles.filterButton,
					isOpen && styles.filterButtonIsActive,
					selectedOptions.length > 0 && styles.filterButtonSelectedItem
				)}
				onClick={handleClickFilterButton}
				onMouseEnter={handleButtonMouseEnter}
				onMouseLeave={handleButtonMouseLeave}>
				{label}
			</div>
			{tooltip.length > 0 && buttonIsHovered && showTooltip && !isOpen && (
				<span className={styles.filterTooltip}>{tooltip}</span>
			)}
			{isOpen && (
				<div className={styles.filterListContainer}>
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
							<li
								className={clsx(
									styles.filterItem,
									isAllOptionDisabled() && styles.filterItemDisabled
								)}
								onClick={() => handleAllOptionChange()}>
								<input
									className={styles.customCheckbox}
									type="checkbox"
									checked={isAllChecked}
									disabled={isAllOptionDisabled()}
									readOnly
								/>
								<label>Все</label>
							</li>
						)}
						{filteredOptions.map((option) => (
							<OptionItem
								key={option.value}
								option={option}
								selected={selectedOptions.some((o) => o.value === option.value)}
								disabled={isOptionDisabled(option)}
								onChange={handleOptionChange}
							/>
						))}
						{filteredOptions.length === 0 && (
							<li className={styles.noResults}>Ничего не найдено</li>
						)}
					</ul>
				</div>
			)}
		</div>
	);
};
