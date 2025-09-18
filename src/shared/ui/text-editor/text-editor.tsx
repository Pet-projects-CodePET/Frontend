import React, { FC, useEffect, useState, useRef } from 'react';
import { TextEditorProps } from './types';
import 'react-quill-new/dist/quill.snow.css';
import styles from './text-editor.module.scss';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export const TextEditor: FC<TextEditorProps> = ({
	labelName,
	placeholder,
	desc,
	setCurrentText,
	currentText,
	error: errorChart, // Добавляем проп для внешней ошибки
	onFocus, 
	...props
}) => {
	const [isWindowLoaded, setIsWindowLoaded] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	//const quillRef = useRef(null);
	const previousTextRef = useRef<string>(currentText || '');

	useEffect(() => {
		setIsWindowLoaded(true);
	}, []);
	
	// Эффект для синхронизации при внешнем изменении currentText
	useEffect(() => {
		if (currentText !== previousTextRef.current) {
			previousTextRef.current = currentText || '';
			// Сбрасываем ошибку при внешнем изменении текста
			if (!currentText || currentText.length === 0) {
				setError(null);
			}
		}
	}, [currentText]);

	const handleChange = (content: string) => {
		if (typeof window !== 'object') return;

		const htmlLength = content.length;

		if (htmlLength < 20) {
			setError('Текст должен содержать минимум 20 символов');
		} else if (htmlLength > 1500) {
			setError('Текст не должен превышать 1500 символов');
		} else {
			setError(null);
		}
		setCurrentText(content);
	};

	const handleFocus = () => {
		if (onFocus) onFocus();
		if (error) {
			setError(null);
		}
	  };

	  const errorToShow = error || errorChart;

	const myModule = {
		toolbar: {
			container: [
				['bold', 'italic', 'underline'], // toggled buttons
				[{ list: 'ordered' }, { list: 'bullet' }],
				[{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
				[{ color: [] }], // dropdown with defaults from theme
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
						<ReactQuill
							placeholder={placeholder}
							modules={myModule}
							theme="snow"
							value={currentText}
							onChange={handleChange}
							onFocus={handleFocus}
							className={styles.inputMain}
							{...props}
						/>
					)}
				</div>
				<div className={styles.footer}>
					<p className={styles.desc}>{desc}</p>
					{errorToShow && <p className={styles.error}>{errorToShow}</p>}
					{!errorToShow && currentText && (
						<p className={styles.charCount}>
							{currentText?.length || 0} / 1500 символов (с учётом разметки)
						</p>
					)}
				</div>
			</div>
		</div>
	);
};
