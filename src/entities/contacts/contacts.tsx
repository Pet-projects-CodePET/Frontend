import { MainButton } from '@/shared/ui';
import { Plus, Trash2 } from 'lucide-react';
import React from 'react';
import styles from './contacts.module.scss';
import {  useFieldArray, Controller, Control, FieldValues } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Contacts = (control: Control<FieldValues, any>) => {

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'contacts',
	});

	return (
		<>
			<h3 className={styles.contacts_title}>Контакты для связи</h3>
			<div className={styles.contacts}>
				{fields.map((field, index) => (
					<div key={field.id} className={styles.container}>
						<Controller
							name={`contacts[${index}].type`}
							control={control}
							render={({ field }) => (
								<select className={styles.select} {...field}>
									<option value="">Выберите ресурс</option>
									<option value="phone">Телефон</option>
									<option value="email">Email</option>
									<option value="telegram">Telegram</option>
								</select>
							)}
						/>
						<Controller
							name={`contacts[${index}].value`}
							control={control}
							render={({ field }) => (
								<input
									{...field}
									className={styles.input_extra}
									placeholder="Введите значение"
								/>
							)}
						/>
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
			<div className={styles.buttons}>
				<MainButton
					variant="secondary"
					name="add"
					width="regular"
					IconLeft={
						Plus as React.ComponentType<React.HTMLAttributes<HTMLElement>>
					}
					onClick={() => append({ id: uuidv4(), type: '', value: '' })}>
					Добавить
				</MainButton>
				<MainButton 
			onClick={() => remove()}

				variant={'trivial'} width={'min'} disabled={false}>
					Сбросить
				</MainButton>
			</div>
		</>
	);
};
