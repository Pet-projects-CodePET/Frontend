'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { MainButton } from '@/shared/ui';
import { Input } from '@/shared/ui';
import Plus from '@/shared/assets/icons/plus-large.svg';
import { TContact } from '@/shared/ui/contact-card/types';
import { generalEmailRegex, phoneRegex } from '@/utils/regex-consts';
import { CONTACTS } from '@/utils/constants';
import { ContactsList } from '@/entities/contact-list/contact-list';
import clsx from 'clsx';
import styles from './contacts-selector.module.scss';

interface ContactsSelectorProps {
	contacts: TContact[];
	setContacts: React.Dispatch<React.SetStateAction<TContact[]>>;
}

type TOption = {
	label: string;
	value: string;
	id?: number;
};

export const ContactsSelector: React.FC<ContactsSelectorProps> = ({
	contacts,
	setContacts,
}) => {
	const [selectedOptionContactType, setSelectedOptionContactType] =
		useState<TOption | null>(CONTACTS[0]);
	const [addContactErrorText, setAddContactErrorText] = useState<string>('');
	const [inputValueContact, setInputValueContact] = useState<string>('');
	const pathname = usePathname();

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (addContactErrorText !== '') setAddContactErrorText('');
		setInputValueContact(event.target.value);
	};

	const handleOptionSelect = (option: TOption) => {
		setSelectedOptionContactType(option);
	};

	const getNextAvailableContactType = (currentContacts: TContact[]) => {
		const existingContactTypes = currentContacts.map(
			(contact) => Object.keys(contact)[0]
		);
		const nextType = CONTACTS.find(
			(contactType) => !existingContactTypes.includes(contactType.value)
		);
		return nextType || CONTACTS[0];
	};

	const handleAddContact = () => {
		if (selectedOptionContactType && inputValueContact) {
			let isValid = true;
			const newContact: TContact = {
				[selectedOptionContactType.value]: inputValueContact,
			};

			if (selectedOptionContactType.value === 'email') {
				if (!generalEmailRegex.test(inputValueContact)) {
					setAddContactErrorText('Пожалуйста, введите корректный email адрес.');
					isValid = false;
				}
			}

			if (selectedOptionContactType.value === 'phone') {
				if (!phoneRegex.test(inputValueContact)) {
					setAddContactErrorText(
						'Допустимый формат +7XXXXXXXXXX, где X - цифры.'
					);
					isValid = false;
				}
			}

			const contactAlreadyExists = contacts.some((contact) =>
				Object.prototype.hasOwnProperty.call(
					contact,
					selectedOptionContactType.value
				)
			);

			if (isValid && !contactAlreadyExists) {
				const updatedContacts = [...contacts, newContact];
				setContacts(updatedContacts);
				setInputValueContact('');

				const nextAvailableContactType =
					getNextAvailableContactType(updatedContacts);
				setSelectedOptionContactType(nextAvailableContactType);
			} else if (!isValid) {
				return;
			} else {
				setAddContactErrorText(
					`Контакт типа "${selectedOptionContactType.label}" уже существует.`
				);
			}
		}
	};

	const allContactsAdded = CONTACTS.every((contactType) =>
		contacts.some((contact) => Object.keys(contact)[0] === contactType.value)
	);

	return (
		<div className={styles.contacts}>
			<h3
				className={clsx(styles.input_list_title, {
					[styles.input_list_titleProfile]: pathname?.includes('profile'),
				})}>
				Контакты для связи
			</h3>
			<ContactsList contacts={contacts} setContacts={setContacts} />

			{!allContactsAdded ? (
				<div className={styles.fields__addContactWrapper}>
					<label className={styles.fields__addContactTypeWrapper}>
						<select
							className={styles.fields__addContactType}
							value={selectedOptionContactType?.value || ''}
							onChange={(event) =>
								handleOptionSelect(
									CONTACTS.find(
										(contact) => contact.value === event.target.value
									)!
								)
							}>
							{CONTACTS.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
						<span className={styles.fields__addContactTypeLabel}>
							Выберите ресурс
						</span>
					</label>

					{selectedOptionContactType?.value === 'phone_number' ? (
						<Input
							placeholder="+7XXXXXXXXXX"
							className={styles.fields__addContactTextValue}
							name="inputValueContact"
							labelName=""
							description={false}
							value={inputValueContact}
							error={addContactErrorText}
							onChange={handleInputChange}
						/>
					) : (
						<Input
							className={styles.fields__addContactTextValue}
							name="inputValueContact"
							labelName=""
							description={false}
							value={inputValueContact}
							error={addContactErrorText}
							onChange={handleInputChange}
						/>
					)}
				</div>
			) : null}

			<div className={styles.specialists_buttons}>
				<MainButton
					type="button"
					onClick={handleAddContact}
					variant="secondary"
					width="regular"
					disabled={allContactsAdded}
					IconLeft={Plus}>
					{'Добавить'}
				</MainButton>
				{pathname?.includes('create-project') ? (
					<MainButton
						variant="trivial"
						width="regular"
						onClick={() => setContacts([])}>
						Сбросить
					</MainButton>
				) : null}
			</div>
		</div>
	);
};
