import React from 'react';
import styles from './contact-list.module.scss';
import { TContactsList } from './types';
import { ContactCard } from '@/shared/ui';

export const ContactsList: React.FC<TContactsList> = ({
	contacts,
	setContacts,
}) => {
	const handleContactDelete = (index: number) => {
		const updatedContacts = [...contacts];
		updatedContacts.splice(index, 1);
		setContacts(updatedContacts);
	};
	return (
		<ul className={styles.list}>
			{contacts.map((contact, index) => (
				<li className={styles.list__item} key={index}>
					<ContactCard
						data={contact}
						index={index}
						onDelete={handleContactDelete}
					/>
				</li>
			))}
		</ul>
	);
};
