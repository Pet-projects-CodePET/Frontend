import React from 'react';
import { ToggleCheckbox } from '@/shared/ui/toggle-checkbox/toggle-checkbox';
import styles from './menu-for-visible.module.scss';
import clsx from 'clsx';

export const MenuForVisible = ( { isOpen, onClose } : { isOpen : boolean, onClose : () => void}) => {

	return (
        <div className={clsx(styles.menuVisible, {
            [styles.menu ] : isOpen
        })}>
		<div className={clsx(styles.menu, {
            [styles.menuVisible ] : onClose
        })}>
			<div className={styles.menu__itemVisible}>
				<label className={styles.menu__subtitle}>Видно всем</label>
				<div className={styles.menu__checkbox}>
					<ToggleCheckbox
						variant="defaultOf"
						onChange={() => {}}
					/>
				</div>
			</div>
			<div className={styles.menu__itemVisible}>
				<label className={styles.menu__subtitle}>Видно организаторам</label>
				<div className={styles.menu__checkbox}>
					<ToggleCheckbox
						variant="defaultOf"
						onChange={() => {}}
					/>
				</div>
			</div>

			<div className={styles.menu__itemVisible}>
				<label className={styles.menu__subtitle}>Не видно никому</label>
				<div className={styles.menu__checkbox}>
					<ToggleCheckbox
						variant="defaultOf"
						onChange={() => {
							console.log('не видно');
						}}
					/>
				</div>
			</div>
		</div>
        </div>
	);
};
