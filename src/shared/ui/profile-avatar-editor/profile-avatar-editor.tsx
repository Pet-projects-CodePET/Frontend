import React, { ChangeEvent, FC, useState } from 'react';
import AvatarEditor, { type Position } from 'react-avatar-editor';
import { ProfileAvatarEditorProps, ProfileAvatarEditorState } from './type';
import styles from './profile-avatar-editor.module.scss';

export const ProfileAvatarEditor: FC<ProfileAvatarEditorProps> = ({
	image,
	width,
	height,
	editor,
}) => {
	const [state, setState] = useState<ProfileAvatarEditorState>({
		image: image,
		allowZoomOut: false,
		position: { x: 0.5, y: 0.5 },
		scale: 1,
		rotate: 0,
		borderRadius: 50,
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

	const handlePositionChange = (position: Position) => {
		setState({ ...state, position });
	};

	return (
		<div className={styles.container}>
			{state.image !== '' && (
				<>
					<AvatarEditor
						ref={editor}
						scale={state.scale}
						width={state.width}
						height={state.height}
						position={state.position}
						onPositionChange={handlePositionChange}
						rotate={state.rotate}
						borderRadius={state.width / (100 / state.borderRadius)}
						backgroundColor={state.backgroundColor}
						image={state.image}
						disableCanvasRotation={state.disableCanvasRotation}
						color={[255, 255, 255, 0.6]} // RGBA
					/>
					<label htmlFor="scale" className={styles.scaleLabel}>
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
				</>
			)}
			<input
				name="newImage"
				className={styles.selectImageInput}
				type="file"
				onChange={handleNewImage}
			/>
		</div>
	);
};
