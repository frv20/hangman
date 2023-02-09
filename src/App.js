import { useReducer, useState } from "react";
import "./App.css";
import Hangman from "./components/Hangman";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";
import { keyboardClickReducer } from "./reducers";
var randomWord = require('random-word-by-length');
function App() {
   const [word, setfirst] = useState(randomWord(10))
  const word_ = word.split("");
  const size = word_.length;
  let wordChars = [];

  for (let i = 0; i < size; i++) {
    wordChars.push({ letter: word.charAt(i), isVisible: false });
  }

  const [hangmanState, dispatch] = useReducer(keyboardClickReducer, {
    letters: wordChars,
    points: 0,
    hangmanPoints: 0,
  });

  return (
    <>
      <div> {hangmanState.points} </div>

      <Hangman dispatch={dispatch} hangmanPoints={hangmanState.hangmanPoints} />
      <Word word={word_} visibleState={hangmanState} dispatch={dispatch} />
      <Keyboard dispatch={dispatch} />
    </>
  );
}

export default App;
