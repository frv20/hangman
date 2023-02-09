import React from 'react'
import { ReactComponent as HangmanSvg1 } from '../hangmanSvg/hangman1.svg'
import { ReactComponent as HangmanSvg2 } from '../hangmanSvg/hangman2.svg'
import { ReactComponent as HangmanSvg3 } from '../hangmanSvg/hangman3.svg'
import { ReactComponent as HangmanSvg } from '../hangmanSvg/hangman.svg'

import styles from '../css/Hangman.module.css'
export default function Hangman({ dispatch, hangmanPoints }) {

  function renderSwitch(hangmanState) {
    switch (hangmanState) {
      case 0: return <HangmanSvg1 className={styles.hangman} />;
      case 2: return <HangmanSvg2 className={styles.hangman} />;
      case 4: return <HangmanSvg3 className={styles.hangman} />;
      default: return <HangmanSvg className={styles.hangman} />
    }
  }
  return (
    <>
      <div>Hangman</div>
      {renderSwitch(hangmanPoints)}

    </>
  )
}
