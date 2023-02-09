import React, { useReducer, useState } from 'react'
import Letter from './Letter'
import styles from '../css/Word.module.css'
import { v4 as uuidv4 } from 'uuid';
export default function Word({word, visibleState}) {
  return (
    <div className={styles.word}>
    {word.map((letter, i) =>  <Letter key={uuidv4()} letter={letter} isVisible = {visibleState.letters[i].isVisible} />)}
    </div>
  )
}
