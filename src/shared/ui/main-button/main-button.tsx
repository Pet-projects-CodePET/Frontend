import { FC } from 'react';

import type { MainButtonProps } from './types';
import styles from './main-button.module.scss';

export const MainButton: FC<MainButtonProps> = ({
	children,
	IconLeft,
	IconRight,
	variant,
	width,
	handleLeftIconClick = () => {},
	handleRightIconClick = () => {},
	...props
}) => {
	const getClassnameForType = (
		buttonType: 'primary' | 'secondary' | 'trivial' | 'inverse'
	) => {
		switch (buttonType) {
			case 'primary':
				return styles.buttonPrimary;
			case 'secondary':
				return styles.buttonSecondary;
			case 'trivial':
				return styles.buttonTrivial;
			case 'inverse':
				return styles.buttonInverse;
			default:
				return '';
		}
	};

	const getClassNameForWidth = (buttonWidth: 'regular' | 'max') => {
		switch (buttonWidth) {
			case 'regular':
				return styles.buttonDimensionsRegular;
			case 'max':
				return styles.buttonDimensionsMax;
			default:
				return '';
		}
	};

	return (
		<>
			<button
				className={`${getClassnameForType(variant)} ${getClassNameForWidth(width)}`}
				{...props}
			>
				<div className={styles.buttonContainer}>
					{IconLeft && (
						<IconLeft
							onClick={(e) => {
								e.stopPropagation();
								handleLeftIconClick();
							}}
							className={styles.icon}
						/>
					)}
					{children}
					{IconRight && (
						<IconRight
							onClick={(e) => {
								e.stopPropagation();
								handleRightIconClick();
							}}
							className={styles.icon}
						/>
					)}
				</div>
			</button>
		</>
	);
};

	export const getClassName = (buttonWidth: 'regular' | 'max') => {
		switch (buttonWidth) {
			case 'regular':
				return styles.buttonDimensionsRegular;
			case 'max':
				return styles.buttonDimensionsMax;
			default:
				return '';
		}
	};