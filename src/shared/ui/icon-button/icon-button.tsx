import React, { FC } from 'react';
import Link from 'next/link';
import type { IconButtonProps } from './types';
import styles from './icon-button.module.scss';

export const IconButton: FC<IconButtonProps> = ({ variant, link }) => {
	const getClassnameForType = (
		buttonType: 'gmail' | 'vk' | 'yandex' | 'git'
	) => {
		switch (buttonType) {
			case 'gmail':
				return styles.buttonGmail;
			case 'vk':
				return styles.buttonVk;
			case 'yandex':
				return styles.buttonYandex;
			case 'git':
				return styles.buttonGit;
			default:
				return '';
		}
	};

	return (
		<Link href={`${link}`} className={`${getClassnameForType(variant)}`} />
	);
};
