'use client';

import React, { ReactNode, useEffect } from 'react';
import style from './pop-up.module.scss';
import XmarkIcon from '@/shared/assets/icons/xmark.svg';

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
		<div className={style.popup_body} onClick={onClose}>
			<div className={style.popup_wrapper}>
				<div className={style.popup_content}>
					<div className={style.popup_title}>{title}</div>
					<XmarkIcon className={style.xmark} data-close onClick={onClose} />
					{children}
				</div>
			</div>
		</div>
	);
};
