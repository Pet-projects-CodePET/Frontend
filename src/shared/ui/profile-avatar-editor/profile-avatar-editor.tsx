import React, { ChangeEvent, FC, useState } from 'react';
import AvatarEditor, { type Position } from 'react-avatar-editor';
import { ProfileAvatarEditorProps, ProfileAvatarEditorState } from './type';
import styles from './profile-avatar-editor.module.scss';

export const ProfileAvatarEditor: FC<ProfileAvatarEditorProps> = ({
	image,
	width,
	height,
	borderRadius,
	editor,
}) => {
	const [state, setState] = useState<ProfileAvatarEditorState>({
		image: image,
		allowZoomOut: false,
		position: { x: 0.5, y: 0.5 },
		scale: 1,
		rotate: 0,
		borderRadius: borderRadius,
		preview: undefined,
		width: width,
		height: height,
		disableCanvasRotation: false,
		isTransparent: false,
		backgroundColor: undefined,
		showGrid: false,
	});

	const handleNewImage = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.[0]) {
			setState({ ...state, image: e.target.files[0] });
		}
	};

	const handleScale = (e: ChangeEvent<HTMLInputElement>) => {
		const scale = parseFloat(e.target.value);
		setState({ ...state, scale });
	};

	const logCallback = (e: () => void) => {
		console.log('callback', e);
	};

	const handlePositionChange = (position: Position) => {
		setState({ ...state, position });
	};

	return (
		<div className={styles.container}>
			<AvatarEditor
				ref={editor}
				className={styles.canvas}
				scale={state.scale}
				width={state.width}
				height={state.height}
				position={state.position}
				// showGrid={state.showGrid}
				onPositionChange={handlePositionChange}
				rotate={state.rotate}
				borderRadius={state.width / (100 / state.borderRadius)}
				backgroundColor={state.backgroundColor}
				onLoadFailure={logCallback.bind(this, () => 'onLoadFailed')}
				onLoadSuccess={logCallback.bind(this, () => 'onLoadSuccess')}
				onImageReady={logCallback.bind(this, () => 'onImageReady')}
				image={state.image}
				disableCanvasRotation={state.disableCanvasRotation}
				color={[255, 255, 255, 0.6]} // RGBA
			/>
			<label htmlFor="volume" className={styles.scaleLabel}>
				Масштаб:{' '}
				<input
					name="scale"
					type="range"
					onChange={handleScale}
					min={state.allowZoomOut ? '0.1' : '1'}
					max="2"
					step="0.01"
					defaultValue="1"
				/>
			</label>
			<input
				name="newImage"
				className={styles.selectImageInput}
				type="file"
				onChange={handleNewImage}
			/>
		</div>
	);
};
