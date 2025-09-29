import { NUM_OF_LETTERS_ALLOWED } from '../../constants';
import { range } from '../../utils';



function Guess({ guesses = [] }) {
  return (
    <p className="guess">
      {range(0, NUM_OF_LETTERS_ALLOWED).map(charIdx => {
        const guess = guesses?.at(charIdx)

        const guessClassName = `cell ${guess?.status ?? ''}`.trim()

        return (
          <span key={charIdx} className={guessClassName}>
            {guess?.letter ?? ''}
          </span>
        )
      })}
    </p>
  )
}

export default Guess