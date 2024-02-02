import { FC } from 'react';
import LikeIcon from '@/components/shared/ui/icons/like-icon.svg';
import ChevronRightIcon from '@/components/shared/ui/icons/chevron-right-icon.svg';
import type { MainButtonProps } from './types';
import styles from './main-button.module.scss';

const MainButton: FC<MainButtonProps> = ({ children, ...props }) => {
	return (
		<>
			<button className={styles.button} {...props}>
				{children}
			</button>
			<LikeIcon className={styles.icon} />
			<ChevronRightIcon className={styles.icon} />
		</>
	);
};

export default MainButton;
