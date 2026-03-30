'use client';

import React, { useState, useEffect } from 'react';
import {
  IconPlus,
  IconMinus,
  IconMinusDisabled,
  IconPlusDisabled,
} from '@/shared/assets';
import styles from './counter.module.scss';

interface CounterProps {
  disabled: boolean;
  value?: number;
  onChange?: (value: number) => void;
}

export const Counter = ({ disabled, value = 1, onChange }: CounterProps) => {
  const [count, setCount] = useState(value);

  useEffect(() => {
    setCount(value);
  }, [value]);

  const increment = () => {
    if (count <= 14) {
      const newValue = count + 1;
      setCount(newValue);
      onChange?.(newValue);
    }
  };

  const decrement = () => {
    if (count > 1) {
      const newValue = count - 1;
      setCount(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <button
          type='button'
          className={styles.button}
          onClick={decrement}
          disabled={disabled}>
          {disabled ? (
            <IconMinusDisabled className={styles.icon} />
          ) : (
            <IconMinus className={styles.icon} />
          )}
        </button>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.count} disabled={disabled}>
          {count}
        </button>
      </div>
      <div className={styles.buttonWrapper}>
        <button
          type='button'
          className={styles.button}
          onClick={increment}
          disabled={disabled}>
          {disabled ? (
            <IconPlusDisabled className={styles.icon} />
          ) : (
            <IconPlus className={styles.icon} />
          )}
        </button>
      </div>
    </div>
  );
};
