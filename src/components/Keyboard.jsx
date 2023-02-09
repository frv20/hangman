import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import styles_word from '../css/Word.module.css'
import styles_letter from '../css/Letter.module.css'

const allKeys = String.fromCharCode(...Array(123).keys()).slice(97).split('');
export default function Keyboard({ dispatch }) {

  const initialState = allKeys.map((letter) => { return { letter: letter, isClicked: false } });
  const [clickedLetter, setClickedLetter] = useState(initialState);

  function setDisabled(letter)
  {
    return clickedLetter.find(e => e.letter === letter).isClicked;
  }


  return (
    <div className={styles_word.word}>
      {allKeys.map((letter, i) => <button key={uuidv4()} className={styles_letter.letter} disabled={setDisabled(letter)}
        onClick=
        {() => {

          let clone = clickedLetter.map((elem) => {
            if (elem.letter === letter) {
              if (!elem.isClicked) {
                elem.isClicked = true;
              }
            }
            return elem;
          });

          setClickedLetter(clone);
          dispatch({ payload: letter })

        }



        }>
        {letter}
      </button>)}
    </div>
  )
}
