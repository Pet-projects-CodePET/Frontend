import { FC } from 'react';

import type { IconButtonProps } from './types';
import styles from './iconbutton.module.scss';

export const IconButton: FC<IconButtonProps> = ({
	variant,
}) => {
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
	// const getClassNameForSize = (buttonSize: 'desktop' | 'mobile') => {
	// 	switch (buttonSize) {
	// 		case 'desktop':
	// 			return styles.buttonSizeDesktop;
	// 		case 'mobile':
	// 			return styles.buttonSizeMobile;
	// 		default:
	// 			return '';
	// 	}
	// };

	return (
		<button
			// className={`${getClassnameForType(variant)} ${getClassNameForSize(size)}`}
			className={`${getClassnameForType(variant)}`}
		/>
		// </button>
	);
};
