'use client'

import React, { FC, useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { clsx } from 'clsx';

import type { InputProps } from './types';
import styles from './input.module.scss';

export const Input: FC<InputProps> = ({
  label,
  labelName = 'labelName',
  error = null,
  register,
  link = null,
  className,
  type = 'text',
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible(!visible)
  };

	return (
		<label className={clsx(className, styles.label)}>
			{labelName}
			<div className={styles.inputContainer}>
				<input
					{...register(label)}
					type={type === 'password' ? (visible ? 'text' : 'password') : type}
					className={clsx({
						[styles.input]: true,
						[styles.input_typeSucces]: Boolean(error) === false,
						[styles.input_typeError]: Boolean(error) === true,
					})}
					{...props}
				/>
				{type === 'password' && (
					<div className={styles.eye} onClick={handleVisible}>
						{visible ? <EyeOff color="#94a3b8" /> : <Eye color="#94a3b8" />}
					</div>
				)}
				{error && <p className={styles.inputError}>{error}</p>}
			</div>
			{link && (
				<Link href={link.href} className={styles.inputLink}>
					{link.text}
				</Link>
			)}
		</label>
	);
};
