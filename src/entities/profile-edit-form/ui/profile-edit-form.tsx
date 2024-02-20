'use client';

import React from 'react';
// import Image from "next/image";
import { MainButton } from '@/shared/ui';
import { Input } from '@/shared/ui';
import { useForm } from 'react-hook-form';
import Edit from '@/shared/assets/icons/edit-icon.svg';
import './profile-edit-form.module.scss';

export const Fields = () => {
	const { register } = useForm();

	return (
		<div className="fields">
			<div className="photo">
				<div className="overlap-group">
					<div className="avatar">
						<div className="text-wrapper-2">A</div>
					</div>
					<Edit className="icon-button-instance" />
				</div>
			</div>
			<div className="div-2">
				<Input
					label="Имя"
					labelName="name"
					register={register}
					className="full-input-instance"
				/>
				<Input
					className="full-input-instance"
					label="Имя"
					register={register}
					//   inputTextDivClassName="design-component-instance-node"
					//   inputTextText="Укажите свое настоящее имя и фамилию"
					//   stateProp="default"
					//   status="inactive"
					//   text="Имя"
					//   text1="Укажите свое настоящее имя и фамилию"
				/>
				<Input
					className="full-input-instance"
					label="Имя"
					register={register}
					//   inputTextText={
					//     <>
					//       Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
					//       tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
					//       sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad
					//       litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
					//       scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
					//       bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
					//       <br />
					//       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Curabitur tempor quis
					//       eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis
					//       sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
					//     </>
					//   }
					//   stateProp="default"
					//   status="inactive"
					//   text="О себе"
					//   text1="Ограничение по символам"
				/>
				<Input
					className="full-input-instance"
					label="Имя"
					register={register}
					//   description={false}
					//   inputTextText="Добавьте ссылку на портфолио"
					//   stateProp="default"
					//   status="inactive"
					//   text="Ссылка на портфолио"
				/>
				<Input
					className="full-input-instance"
					label="Имя"
					register={register}
					//   description={false}
					//   inputTextText="Укажите контакты для связи"
					//   stateProp="default"
					//   status="inactive"
					//   text="Контакты для связи"
				/>
				<Input
					className="full-input-instance"
					label="Имя"
					register={register}
					//   description={false}
					//   inputTextText="Укажите дату рождения"
					//   stateProp="default"
					//   status="inactive"
					//   text="Дата рождения"
				/>
				<div className="double">
					<Input
						className="full-input-2"
						label="Имя"
						register={register}
						// description={false}
						// inputTextText="Выберите страну"
						// stateProp="default"
						// status="inactive"
						// text="Страна"
					/>
					<Input
						className="full-input-2"
						label="Имя"
						register={register}
						// description={false}
						// inputTextText="Выберите город"
						// stateProp="default"
						// status="inactive"
						// text="Город"
					/>
				</div>
				<Input
					className="full-input-instance"
					label="Имя"
					register={register}
					//   inputTextText="Выберите специальность"
					//   stateProp="default"
					//   status="inactive"
					//   text="Специальность"
					//   text1="Выберите до двух специальностей"
				/>
				<Input
					className="full-input-instance"
					label="Имя"
					register={register}
					//   inputTextText="Выберите навыки"
					//   stateProp="default"
					//   status="inactive"
					//   text="Навыки"
					//   text1="Выберите не более 12 навыков"
				/>
				<Input
					className="full-input-instance"
					label="Имя"
					register={register}
					//   description={false}
					//   inputTextText="Выберите уровень квалификации"
					//   stateProp="default"
					//   status="inactive"
					//   text="Уровень квалификации"
				/>
				{/* <Image className="image" alt="Image" src="image-39.png" /> */}
			</div>
			<div className="buttons">
				<button className="button-2">
					<div className="div-wrapper">
						<div className="text-3">Сохранить</div>
					</div>
				</button>
				<MainButton
					variant="primary"
					width="regular"
					className="button-instance">
					children
				</MainButton>
				{/* //   leftIconActive={false}
        //   rightIconActive={false}
        //   stateProp="default"
        //   text="Как видят мой профиль другие" */}
			</div>
		</div>
	);
};
