import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FooterProps } from '../../../shared/types/footer-type';
import logo from '@/shared/assets/images/logo-header.svg';
import styles from './footer.module.scss';

export const Footer: FC<FooterProps> = ({ device }) => {
	return (
		<div className={styles.Footer__footer}>
			{device === 'desktop' && (
				<div className={styles.Footer__desktop}>
					<Link href="/">
						<Image src={logo} alt="CodePet logo" />
					</Link>
					<div className={styles.desktop_}></div>
				</div>
			)}

			{/* {device === 'mobile' && (
				<>
					<div className="logo-2">
						<div className="logo-3" />
						<img className="img" alt="Codepet" src="codepet-4.svg" />
					</div>
					<div className="div-2">
						<div className="text-wrapper">Навигация</div>
						<div className="links">
							<div className="text-wrapper-2">О нас</div>
							<div className="text-wrapper-3">Проекты</div>
							<div className="text-wrapper-3">Специалисты</div>
						</div>
					</div>
					<div className="div-2">
						<div className="text-wrapper">Условия</div>
						<div className="links">
							<div className="text-wrapper-2">Пользовательское соглашение</div>
							<div className="text-wrapper-3">{text}</div>
						</div>
					</div>
					<div className="links-contscts">
						<div className="text-wrapper">Контакты</div>
						<div className="links-2">
							<div className="text-wrapper-2">сode_pet@gmail.ru</div>
							<div className="socials">
								<Vk className="instance-node" />
								<Tg className="instance-node" />
							</div>
						</div>
					</div>
				</>
			)}

			{device === 'tablet' && (
				<div className="logo-4">
					<div className="logo-5" />
					<img className="img" alt="Codepet" src="image.svg" />
				</div>
			)}

			{['desctop', 'tablet'].includes(device) && (
				<div className="frame">
					<div className="links-navigation">
						<div className="text-wrapper-4">Навигация</div>
						<div className="links-3">
							<div className="text-wrapper-5">О нас</div>
							<div className="text-wrapper-6">Проекты</div>
							<div className="text-wrapper-7">Специалисты</div>
						</div>
					</div>
					<div className="links-contacts">
						<div className="text-wrapper-8">Условия</div>
						<div className="links-4">
							<div className="text-wrapper-9">Пользовательское соглашение</div>
							<div className="div-3">
								{device === 'desctop' && <>{text}</>}

								{device === 'tablet' && <>Условия конфиденциальности</>}
							</div>
						</div>
					</div>
					<div className="frame-2">
						<div className="socials-2">
							<div className="text-wrapper-10">Контакты</div>
						</div>
						<div className="links-5">
							<div className="codepet-gmail-com">
								{device === 'desctop' && <>{text1}</>}

								{device === 'tablet' && <>code_pet@gmail.ru</>}
							</div>
							<div className="socials-2">
								<Vk className="instance-node-2" />
								<Tg className="instance-node-2" />
							</div>
						</div>
					</div>
				</div>
			)} */}
		</div>
	);
};
