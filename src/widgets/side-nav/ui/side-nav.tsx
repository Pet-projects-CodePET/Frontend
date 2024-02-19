import React from 'react';
import Link from 'next/link';
import styles from './side-nuv.module.scss';


export const SideNuv= () => {
	return (
    <div>
        <ul className={styles.container}>
            <Link href={'profile'}>Профиль</Link>
            <Link href={'settings'}>Управление аккаунтом</Link>
            <Link href={'my-projects'}>Проекты</Link>
            <ol>Избранные проекты</ol>
            <ol>Заявки</ol>
            <ol>Создать проекты</ol>
        </ul>
       
       
    </div>
    )
};
