import styles from './blank-card.module.scss'
import React from 'react';

export const BlankCard = ({children}: {children: React.ReactNode}) => {
    
    return(
        <section className={styles.card}>{children}</section>
    )
}