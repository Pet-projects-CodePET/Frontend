import { Input, MainButton } from '@/shared/ui';
import { Plus, Trash2 } from 'lucide-react';
import React from 'react';
import styles from './contacts.module.scss';
import { useFieldArray, Controller, Control, useWatch } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Contacts = ({ control }: { control: Control<any> }) => {
	const { fields, append, remove, update } = useFieldArray({
		control,
		name: 'contacts',
	});

	// Watching the contacts array to dynamically handle the selected types
	const contacts = useWatch({ control, name: 'contacts', defaultValue: [] });

	// Function to check if a contact type is already selected to disable that option
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
							name={`contacts.${index}.type`} // Type like phone, email, telegram
							control={control}
							defaultValue={field.type || ''}
							render={({ field }) => (
								<select
									className={styles.select}
									{...field}
									onChange={(e) => {
										// Update the contact type and reset the value field
										update(index, {
											...contacts[index],
											type: e.target.value,
											value: '',
										});
										field.onChange(e);
									}}>
									<option value="">Выберите ресурс</option>
									<option value="phone" disabled={isTypeDisabled('phone')}>
										Телефон
									</option>
									<option value="email" disabled={isTypeDisabled('email')}>
										Email
									</option>
									<option
										value="telegram"
										disabled={isTypeDisabled('telegram')}>
										Telegram
									</option>
								</select>
							)}
						/>
						{/* Contact Value Input */}
						{contacts[index] && (
							<Input
								name={`contacts.${index}.value`} // Use 'value' to capture the input
								className={styles.input_extra}
								placeholder={`Введите ${contacts[index].type}`}
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
