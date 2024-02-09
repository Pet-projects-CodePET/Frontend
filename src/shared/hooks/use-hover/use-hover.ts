import { useCallback, useMemo, useState } from "react";

export const useHover = () => {
	const [isHover, setIsHover] = useState(false);

	const onMouseLeave = useCallback(() => {
		setIsHover(false);
	}, []);

	const onMouseEnter = useCallback(() => {
		setIsHover(true);
	}, []);

	return useMemo(
		() => ({
			isHover,
			onMouseLeave,
			onMouseEnter,
		}),
		[isHover, onMouseEnter, onMouseLeave],
	);
};