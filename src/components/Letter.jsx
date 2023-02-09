import React from 'react'
import styles from '../css/Letter.module.css'
export default function Letter({ letter, isVisible }) {

    const l = () => {
        if (isVisible) {
            return letter;
        }
        return "."

    };
    return (
        <div className={styles.letter}>
            {l()}
        </div>
    )
}
