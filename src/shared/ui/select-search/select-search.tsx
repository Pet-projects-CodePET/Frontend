import React, { useState, useEffect, useRef } from 'react';
import styles from './select-search.module.scss';
import { SelectWithSearchProps } from './types';
import { useClickOutside } from '@/shared/hooks';

const SelectWithSearch: React.FC<SelectWithSearchProps> = ({
	options,
	selectedValue,
	onValueChange,
	label = '',
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const countryListRef = useRef(null);

	useClickOutside(countryListRef, () => {
		if (isOpen) setIsOpen(false);
	});

	// Эффект для установки значения, когда пропс обновляется
	useEffect(() => {
		setSearchTerm(''); // очищаем текст поиска при смене выбранного значения
	}, [selectedValue]);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (option: string) => {
		onValueChange(option); // вызываем функцию обратного вызова с выбранным значением
		setIsOpen(false);
	};

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const filteredOptions = options.filter((option) =>
		option.label.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<label className={styles.container}>
			{label !== '' && <span className={styles.container__title}>{label}</span>}
			<div className={styles.container__input} onClick={toggleDropdown}>
				{selectedValue || ''}
			</div>
			{isOpen && (
				<div className={styles.container__dropdown} ref={countryListRef}>
					<input
						type="text"
						value={searchTerm}
						onChange={handleSearchChange}
						className={styles.container__inputSearch}
					/>
					<ul className={styles.container__optionsList}>
						{filteredOptions.length > 0 ? (
							filteredOptions.map((option, index) => (
								<li key={index} onClick={() => handleOptionClick(option.label)}>
									{option.label}
								</li>
							))
						) : (
							<li>Не найдено...</li>
						)}
					</ul>
				</div>
			)}
		</label>
	);
};

export default SelectWithSearch;
