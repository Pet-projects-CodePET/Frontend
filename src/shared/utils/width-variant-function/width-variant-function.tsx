import clsx from "clsx";

export function generateClassName(baseClass: string,  size: 'small' | 'large') {
    return clsx(
      baseClass,
      {
        [`${baseClass}__small`]: size === 'small',
        [`${baseClass}__large`]: size === 'large',
      }
    );
  }
  