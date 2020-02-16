/**
 * Spacing
 * -------
 */

// import { responsive } from '.';

const baseUnit = 0.25;

export const space = {
	LARGE: 26,
	MEDIUM: 16,
	SMALL: 8,
};

// const getBaseUnit = () => {
// 	return window.innerWidth < responsive.minWidths.small ? 0.1 : 0.25;
// };

const spacing = (multiplier = 0) => `${baseUnit * multiplier}rem`;

export default spacing;
