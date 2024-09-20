import React, { FC, useEffect, useState } from 'react';
import { TextEditorProps } from './types';
import 'react-quill-new/dist/quill.snow.css';
import styles from './text-editor.module.scss';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });
import { Controller } from 'react-hook-form';

export const TextEditor: FC<TextEditorProps> = ({
	labelName,
	placeholder,
	desc,
	name,
	control,
	...props
}) => {
	const [isWindowLoaded, setIsWindowLoaded] = useState<boolean>(false);

	useEffect(() => {
		setIsWindowLoaded(true);
	}, []);

	const myModule = {
		toolbar: {
			container: [
				['bold', 'italic', 'underline'], // toggled buttons
				[{ list: 'ordered' }, { list: 'bullet' }],
				[{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
				[{ background: [] }], // dropdown with defaults from theme
				[{ align: [] }],
			],
		},
	};

	return (
		<div className={styles.textEditor}>
			<div className={styles.container}>
				<p className={styles.title}>{labelName}</p>
				<div className={styles.editor}>
					{isWindowLoaded && (
						<Controller
							name={name}
							control={control}
							render={({ field }) => (
								<ReactQuill
									placeholder={placeholder}
									modules={myModule}
									theme="snow"
									value={field.value || ''}
									onChange={field.onChange}
									className={styles.inputMain}
								/>
							)}
							{...props}
						/>
					)}
				</div>
				<p className={styles.desc}>{desc}</p>
			</div>
		</div>
	);
};
