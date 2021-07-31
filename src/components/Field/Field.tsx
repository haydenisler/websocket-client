import type { FC } from 'react';

import styles from './Field.module.css';

export const Field: FC = () => {
    return <input className={styles.textField} type="text"></input>;
};
