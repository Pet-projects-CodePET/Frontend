'use client';

import React, { FC, useRef, useEffect } from 'react';
import { clsx } from 'clsx';
import { debounce } from 'lodash';
import { Search } from 'lucide-react'

import type { InputSearchProps } from './types';
import styles from './input-search.module.scss';

export const InputSearch: FC<InputSearchProps> = ({
    search,
    delay = 500,
    className,
    type = 'search',
    ...props
}) => {

    const debouncedSearch = useRef(debounce(search, delay)).current;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        debouncedSearch(e.target.value);
    };

    useEffect(() => {
        return () => {
            debouncedSearch.cancel();
        };
    }, [debouncedSearch]);

    return (
        <div className={clsx(className,styles.inputContainer)}>
            <input
                className={styles.input}
                type={type}
                onChange={handleChange}
                {...props}
            />
            <div className={styles.icon}>
                <Search color="#94A3B8" />
            </div>
        </div>
    );
};

