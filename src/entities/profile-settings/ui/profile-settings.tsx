'use client';

import React, { useState } from 'react';
import { MainButton } from '@/shared/ui';
import { Input } from '@/shared/ui';
import { Form } from '@/shared/ui';
import { useForm } from 'react-hook-form';
import IconDown from '@/shared/assets/icons/chevron-down.svg';
import styles from './profile-settings.module.scss';
import Link from 'next/link';
import { ToggleCheckbox } from '@/shared/ui/toggle-checkbox/toggle-checkbox';

export const ProfileSettings = () => {
	const { register } = useForm();
	const [checked, setChecked] = useState(false);

	const checkedChange = (checked: boolean) => {
		setChecked(checked);
		console.log('выполнить действие чекбокса');
	};

	const handleSubmit = () => {
		console.log('Submit');
	};
	return (
		<section className={styles.profileSettings}>
			<Form onSubmit={handleSubmit} className={styles.formSettings}>
				<h2 className={styles.formSettings__title}>Настройка аккаунта</h2>
				<div className={styles.formSettings__list}>
					<div className={styles.formSettings__item}>
						<p className={styles.formSettings__subtitle}>Видимость профиля</p>
						<IconDown className={styles.formSettings__icon} />
					</div>

					<div className={styles.formSettings__itemVisible}>
						<label
							className={styles.formSettings__subtitle}
							htmlFor="visibleEveryone">
							Видно всем
						</label>
						<div className={styles.formSettings__checkbox}>
							<ToggleCheckbox
								id="visibleEveryone"
								name="visibleEveryone"
								variant="defaultOf"
								onChange={() => {}}
							/>
						</div>
					</div>
					<div className={styles.formSettings__itemVisible}>
						<label
							className={styles.formSettings__subtitle}
							htmlFor="visibleOrganizers">
							Видно организаторам
						</label>
						<div className={styles.formSettings__checkbox}>
							<ToggleCheckbox
								id="visibleOrganizers"
								name="visibleOrganizers"
								variant="defaultOf"
								onChange={() => {}}
							/>
						</div>
					</div>

					<div className={styles.formSettings__itemVisible}>
						<label
							className={styles.formSettings__subtitle}
							htmlFor="noVisible">
							Не видно никому
						</label>
						<div className={styles.formSettings__checkbox}>
							<ToggleCheckbox
								id="noVsible"
								name="noVisible"
								variant="defaultOf"
								onChange={() => {
									console.log('не видно');
								}}
							/>
						</div>
					</div>

					<div className={styles.formSettings__item}>
						<p className={styles.formSettings__subtitle}>Видимость контактов</p>
						<IconDown className={styles.formSettings__icon} />
					</div>

					<div className={styles.formSettings__itemVisible}>
						<label
							className={styles.formSettings__subtitle}
							htmlFor="visible-everyone">
							Видно всем
						</label>
						<div className={styles.formSettings__checkbox}>
							<ToggleCheckbox
								id="visible-everyone"
								name="visible-everyone"
								variant="defaultOf"
								onChange={() => {}}
							/>
						</div>
					</div>
					<div className={styles.formSettings__itemVisible}>
						<label
							className={styles.formSettings__subtitle}
							htmlFor="visible-organizers">
							Видно организаторам
						</label>
						<div className={styles.formSettings__checkbox}>
							<ToggleCheckbox
								id="visible-organizers"
								name="visible-organizers"
								variant="defaultOf"
								onChange={() => {}}
							/>
						</div>
					</div>

					<div className={styles.formSettings__itemVisible}>
						<label
							className={styles.formSettings__subtitle}
							htmlFor="no-visible">
							Не видно никому
						</label>
						<div className={styles.formSettings__checkbox}>
							<ToggleCheckbox
								id="no-visible"
								name="no-visible"
								variant="defaultOf"
								onChange={() => {
									console.log('не видно');
								}}
							/>
						</div>
					</div>

					<div className={styles.formSettings__item}>
						<label className={styles.formSettings__subtitle} htmlFor="notify">
							Отправка уведомлений
						</label>
						<div className={styles.formSettings__checkbox}>
							<ToggleCheckbox
								id="notify"
								name="notify"
								variant="defaultOn"
								checked={checked}
								onChange={checkedChange}
							/>
						</div>
					</div>

					<div className={styles.formSettings__item}>
						<label
							className={styles.formSettings__subtitle}
							htmlFor="subscription">
							Подписка на проекты
						</label>
						<div className={styles.formSettings__checkbox}>
							<ToggleCheckbox
								variant="defaultOn"
								id="subscription"
								name="subscription"
								onChange={() => {
									console.log('подписка');
								}}
							/>
						</div>
					</div>
				</div>
				<Link className={styles.formSettings__link} href={'/'}>
					Удалить аккаунт
				</Link>
			</Form>

			<Form onSubmit={handleSubmit} className={styles.formSettings}>
				<h2 className={styles.formSettings__title}>Смена пароля</h2>
				<div className={styles.formSettings__listPassword}>
					<Input
						className={styles.formSettings__input}
						label="password"
						type="password"
						labelName="Старый пароль"
						register={register}
						description
					/>
					<Input
						className={styles.formSettings__input}
						label="new-password"
						type="password"
						labelName="Новый пароль"
						register={register}
						description
					/>
					<Input
						className={styles.formSettings__input}
						label="repeat-new-password"
						type="password"
						labelName="Новый пароль еще раз"
						register={register}
						description
					/>
				</div>

				<div>
					<MainButton variant={'primary'} width={'regular'}>
						Сохранить
					</MainButton>
				</div>
			</Form>
		</section>
	);
};
