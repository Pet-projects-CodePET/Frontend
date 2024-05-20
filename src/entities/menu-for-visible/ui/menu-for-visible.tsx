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
					value="1"
					{...register(nameSettings)}
					labelName={'Видно всем'}
				/>
			</li>
			<li className={styles.menuList__item}>
				<CheckboxAndRadio
					label={nameSettings}
					type="radio"
					defaultChecked={settings === 2}
					id={`${nameSettings}_2`}
					value="2"
					{...register(nameSettings)}
					labelName={'Видно организаторам'}
				/>
			</li>
			<li className={styles.menuList__item}>
				<CheckboxAndRadio
					label={nameSettings}
					type="radio"
					defaultChecked={settings === 3}
					id={`${nameSettings}_3`}
					value="3"
					{...register(nameSettings)}
					labelName={'Не видно никому'}
				/>
			</li>
		</ul>
		// <div
		// 	className={clsx(styles.menuVisible, {
		// 		[styles.menu]: isOpen,
		// 	})}>
		// 	<div
		// 		className={clsx(styles.menu, {
		// 			[styles.menuVisible]: onClose,
		// 		})}>
		// 		<div className={styles.menu__itemVisible}>
		// 			<CheckboxAndRadio
		// 				label={nameSettings}
		// 				type="radio"
		// 				defaultChecked={settings === 1}
		// 				id={`${nameSettings}_1`}
		// 				value="1"
		// 				{...register(`${nameSettings}`)}
		// 				labelName={'Видно всем'}
		// 			/>
		// 			{/* <label className={styles.menu__subtitle}>Видно всем</label> */}
		// 		</div>
		// 		<div className={styles.menu__itemVisible}>
		// 			<CheckboxAndRadio
		// 				labelName={'Видно организаторам'}
		// 				label={nameSettings}
		// 				type="radio"
		// 				defaultChecked={settings === 2}
		// 				id={`${nameSettings}_2`}
		// 				// id="2"
		// 				value="2"
		// 				{...register(`${nameSettings}`)}
		// 			/>
		// 			{/* <label className={styles.menu__subtitle}>Видно организаторам</label> */}
		// 		</div>
		// 		<div className={styles.menu__itemVisible}>
		// 			<CheckboxAndRadio
		// 				labelName={'Не видно никому'}
		// 				label={nameSettings}
		// 				type="radio"
		// 				defaultChecked={settings === 3}
		// 				id={`${nameSettings}_3`}
		// 				// id="3"
		// 				value="3"
		// 				{...register(`${nameSettings}`)}
		// 			/>
		// 			{/* <label className={styles.menu__subtitle}>Не видно никому</label> */}
		// 		</div>
		// 	</div>
		// </div>
	);
};
