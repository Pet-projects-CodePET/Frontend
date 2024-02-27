import React, { ReactNode } from 'react';
import style from './pop-up.module.scss';
import XmarkIcon from '@/shared/assets/icons/xmark.svg';

type PopUpProps = {
	children: ReactNode;
};

export const PopUp = ({ children }: PopUpProps) => {
	return (
		<div className={style.body}>
			<div className={style.wrapper}>
				<div className={style.content}>
					<XmarkIcon className={style.xmark} />
					{children}
				</div>
			</div>
		</div>
	);
};
