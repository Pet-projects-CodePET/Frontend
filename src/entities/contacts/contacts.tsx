import { Input, MainButton } from '@/shared/ui';
import { Plus, Trash2 } from 'lucide-react';
import React from 'react';
import styles from './contacts.module.scss';
import { useFieldArray, Controller, Control, useWatch } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { CONTACTS } from '@/utils/constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Contacts = ({ control }: { control: Control<any> }) => {
	const { fields, append, remove, update } = useFieldArray({
		control,
		name: 'contacts', // Internal name for field array management
	});

	const contacts = useWatch({ control, name: 'contacts', defaultValue: [] });

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const isTypeDisabled = (type: string) => {
		return contacts.some((contact: { type: string }) => contact.type === type);
	};

	return (
		<>
			<h3 className={styles.contacts_title}>Контакты для связи</h3>
			<div className={styles.contacts}>
				{fields.map((field, index) => (
					<div key={field.id} className={styles.container}>
						{/* Contact Type Select */}
						<Controller
							name={`contacts.${index}.type`} // Internal name for tracking the contact type
							control={control}
							defaultValue={field.type || ''}
							render={({ field: selectField }) => (
								<select
									className={styles.select}
									{...selectField}
									onChange={(e) => {
										// Update the contact type and reset the value field
										update(index, {
											...contacts[index],
											type: e.target.value,
											value: '',
										});
										selectField.onChange(e);
									}}>
									{CONTACTS.map((option) => (
										<option
											className={styles.fields__addContactTypeListItem}
											key={option.value}
											value={option.value}>
											{option.label}
										</option>
									))}
								</select>
							)}
						/>

						{/* Contact Value Input */}
						{contacts[index]?.type && (
							<Controller
								// Dynamically use the selected contact type as the field name
								name={contacts[index].type}
								control={control}
								defaultValue={field.value || ''}
								render={({ field: inputField }) => (
									<Input
										labelName=""
										name={inputField.name} // Will dynamically be "phone", "email", or "telegram"
										value={inputField.value}
										onChange={inputField.onChange}
										className={styles.input_extra}
									/>
								)}
							/>
						)}

						{/* Remove Button */}
						<MainButton
							variant={'trivial'}
							width={'min'}
							disabled={false}
							onClick={() => remove(index)}>
							<Trash2 color="black" />
						</MainButton>
					</div>
				))}
			</div>

			{/* Add Contact Button */}
			<div className={styles.buttons}>
				<MainButton
					variant="secondary"
					width="regular"
					IconLeft={
						Plus as React.ComponentType<React.HTMLAttributes<HTMLElement>>
					}
					type="button"
					onClick={() => append({ id: uuidv4(), type: '', value: '' })} // Append new contact
					disabled={contacts.length >= 3} // Disable if all types are selected
				>
					Добавить
				</MainButton>

				{/* Reset Button */}
				<MainButton
					onClick={() => remove()} // Remove all contacts
					variant={'trivial'}
					width={'min'}
					disabled={false}>
					Сбросить
				</MainButton>
			</div>
		</>
	);
};
