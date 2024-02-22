'use client';

import React from 'react';
import { FC } from 'react';
import { TagsProps } from './types';
import styles from './tags.module.scss';

export const Tags: FC<TagsProps> = ({ tags }) => {
	return (
		<ul className={styles.tags}>
			{tags.map((item, index, array) => {
				const { text, color } = item;
				if (index < 2) {
					// TODO: key поменять на ID, приходящий с бэка
					return (
						<li
							key={index}
							className={styles.tag}
							style={{ backgroundColor: color }}>
							{text}
						</li>
					);
				}
				if (array.length - 1 === index) {
					return (
						<li key={index} className={styles.more}>
							+{array.length - 2}
						</li>
					);
				}
			})}
		</ul>
	);
};
