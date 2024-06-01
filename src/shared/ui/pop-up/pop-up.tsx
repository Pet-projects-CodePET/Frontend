'use client';

import React, { ReactNode, useEffect } from 'react';
import styles from './pop-up.module.scss';
import XmarkIcon from '@/shared/assets/icons/close-icon.svg';

type PopUpProps = {
	children: ReactNode;
	visible: boolean;
	title: string;
	onClose: () => void;
};

export const PopUp = ({
	children,
	visible = false,
	title,
	onClose,
}: PopUpProps) => {
	const onKeyDown = ({ key }: KeyboardEvent) => {
		switch (key) {
			case 'Escape':
				onClose();
				break;
			default:
				return null;
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	});

	if (!visible) return null;

	return (
		<div className={styles.popup}>
			<div className={styles.popup_body} onClick={onClose}></div>
			<div className={styles.popup_wrapper}>
				<div className={styles.popup_content}>
					<div className={styles.popup_title}>{title}</div>
					<XmarkIcon
						className={styles.xmark}
						data-close
						onClick={onClose}
						width={24}
						height={24}
					/>
					{children}
				</div>
			</div>
		</div>
	);
};
