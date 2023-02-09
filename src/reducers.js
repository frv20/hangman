export function keyboardClickReducer(state, payload) {
  let found = false;
  let clone = state.letters.map((elem) => {
    if (elem.letter === payload.payload) {
      found = true;
      if (!elem.isVisible) {
        elem.isVisible = true;
        state.points++;
      }
    }
    return elem;
  });

  if (!found) {
    state.points--;
    state.hangmanPoints+=1;
  }

  return {
    letters: clone,
    points: state.points,
    hangmanPoints: state.hangmanPoints,
  };
}
