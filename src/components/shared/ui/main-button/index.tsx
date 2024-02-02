import { ReactNode, FC, ButtonHTMLAttributes } from 'react';
import styles from './main-button.module.scss';
console.log('🚀 ~ styles:', styles)

type MainButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
};

const MainButton: FC<MainButtonProps> = ({ children, ...props }) => {
	return <button {...props}>{children}</button>;
};

export default MainButton;
