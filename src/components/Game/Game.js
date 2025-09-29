import { useState } from 'react';


import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import Results from '../Results';
import { NUM_OF_GUESSES_ALLOWED, NUM_OF_LETTERS_ALLOWED } from '../../constants';
import Banner from '../Banner';
import Input from '../Input/Input';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [guess, setGuess] = useState('')
  const [guesses, setGuesses] = useState([])

  const handleSubmit = evt => {
    evt.preventDefault()
    evt.stopPropagation()

    if (guess.length !== NUM_OF_LETTERS_ALLOWED) return

    setGuesses([...guesses, guess])
    setGuess('')
  }

  const didWin = guesses.some(guessWord => {
    const guessResult = checkGuess(guessWord, answer)
    return guessResult.every(result => result.status === 'correct')
  })
  const didGameOver = didWin || guesses.length === NUM_OF_GUESSES_ALLOWED

  return (
    <div className='game-wrapper'>
      <Results answer={answer} guesses={guesses} />

      <form onSubmit={handleSubmit} className='guess-input-wrapper'>
        <Input
          didGameOver={didGameOver}
          onChange={evt => setGuess(evt.target.value.toUpperCase())}
          value={guess}
        />
      </form>

      {didGameOver && (
        <Banner answer={answer} guesses={guesses} didWin={didWin} />
      )}
    </div>
  );
}

export default Game;
