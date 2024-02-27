'use client';

import React from 'react';
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

					<div className={styles.formSettings__item}>
						<p className={styles.formSettings__subtitle}>Видимость контактов</p>
						<IconDown className={styles.formSettings__icon} />
					</div>

					<div className={styles.formSettings__item}>
						<p className={styles.formSettings__subtitle}>
							Отправка уведомлений
						</p>
						<div className={styles.formSettings__checkbox}>
							<ToggleCheckbox />
						</div>
					</div>

					<div className={styles.formSettings__item}>
						<p className={styles.formSettings__subtitle}>Подписка на проекты</p>
						<div className={styles.formSettings__checkbox}>
							<ToggleCheckbox />
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
