import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

import Guess from '../Guess';

function Results({ answer, guesses = [] }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map(guessIdx => {
        const guessWord = guesses[guessIdx]
        const guessResults = checkGuess(guessWord, answer)

        return <Guess key={guessIdx} guesses={guessResults} />
      })}
    </div>
  )
}

export default Results