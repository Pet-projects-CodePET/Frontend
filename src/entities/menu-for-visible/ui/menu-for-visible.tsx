import React from 'react';
import clsx from 'clsx';
import { CheckboxAndRadio } from '@/shared/ui';
import { useFormContext } from 'react-hook-form';
import { MenuForVisibleProps } from './types';
import styles from './menu-for-visible.module.scss';

export const MenuForVisible = ({
	isOpen,
	// onClose,
	settings,
	nameSettings,
}: MenuForVisibleProps) => {
	const { register } = useFormContext();

	return (
		<ul 
			className={clsx(styles.menuList, {
				[styles.menuList_visible]: isOpen,
			})}>
			<li className={styles.menuList__item}>
				<CheckboxAndRadio
					label={nameSettings}
					type="radio"
					defaultChecked={settings === 1}
					id={`${nameSettings}_1`}
					value={1}
					{...register(nameSettings, {
						valueAsNumber: true,
					})}
					// {...register(nameSettings)}
					labelName={'Видно всем'}
				/>
			</li>
			<li className={styles.menuList__item}>
				<CheckboxAndRadio
					label={nameSettings}
					type="radio"
					defaultChecked={settings === 2}
					id={`${nameSettings}_2`}
					value={2}
					{...register(nameSettings, {
						valueAsNumber: true,
					})}
					// {...register(nameSettings)}
					labelName={'Видно организаторам'}
				/>
			</li>
			<li className={styles.menuList__item}>
				<CheckboxAndRadio
					label={nameSettings}
					type="radio"
					defaultChecked={settings === 3}
					id={`${nameSettings}_3`}
					value={3}
					{...register(nameSettings, {
						valueAsNumber: true,
					})}
					// {...register(nameSettings)}
					labelName={'Не видно никому'}
				/>
			</li>
		</ul>
	);
};
