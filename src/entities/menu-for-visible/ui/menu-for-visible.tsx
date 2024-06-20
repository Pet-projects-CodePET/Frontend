import React from 'react';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import { MenuForVisibleProps } from './types';
import styles from './menu-for-visible.module.scss';

export const MenuForVisible = ({
	isOpen,
	settings,
	nameSettings,
	changeVisibleStatus,
}: MenuForVisibleProps) => {
	const { register } = useFormContext();

	return (
		<ul
			className={clsx(styles.menuList, {
				[styles.menuList_visible]: isOpen,
			})}>
			<li className={styles.menuList__item}>
				<input
					{...register(nameSettings, {
						valueAsNumber: true,
					})}
					className={styles.menuList__input}
					type="radio"
					checked={Number(settings) === 1}
					id={`${nameSettings}_1`}
					onChange={changeVisibleStatus}
					value={1}
				/>
				<label htmlFor={`${nameSettings}_1`} className={styles.menuList__label}>
					Видно всем
				</label>
			</li>
			<li className={styles.menuList__item}>
				<input
					{...register(nameSettings, {
						valueAsNumber: true,
					})}
					className={styles.menuList__input}
					type="radio"
					checked={Number(settings) === 2}
					id={`${nameSettings}_2`}
					onChange={changeVisibleStatus}
					value={2}
				/>
				<label htmlFor={`${nameSettings}_2`} className={styles.menuList__label}>
					Видно организаторам
				</label>
			</li>
			<li className={styles.menuList__item}>
				<input
					{...register(nameSettings, {
						valueAsNumber: true,
					})}
					className={styles.menuList__input}
					type="radio"
					checked={Number(settings) === 3}
					id={`${nameSettings}_3`}
					onChange={changeVisibleStatus}
					value={3}
				/>
				<label htmlFor={`${nameSettings}_3`} className={styles.menuList__label}>
					Не видно никому
				</label>
			</li>
		</ul>
	);
};
