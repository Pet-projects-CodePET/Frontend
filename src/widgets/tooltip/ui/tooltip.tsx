import React, { useState, ReactNode } from 'react';
import styles from './tooltip.module.scss';

type TooltipProps = {
	text: string;
	children: ReactNode;
};

export const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [showTooltip, setShowTooltip] = useState(false);
	let timeoutId: NodeJS.Timeout | null = null;

	const handleMouseEnter = () => {
		setIsHovered(true);
		timeoutId = setTimeout(() => {
			setShowTooltip(true);
		}, 1000);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		if (timeoutId) {
			clearTimeout(timeoutId);
			timeoutId = null;
		}
		setShowTooltip(false);
	};

	return (
		<div className={styles.tooltipWrapper}>
			<div
				className={styles.tooltip}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}>
				{children}
			</div>
			{isHovered && showTooltip && (
				<div className={styles.tooltipContent}>{text}</div>
			)}
		</div>
	);
};
