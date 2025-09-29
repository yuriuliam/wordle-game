import { NUM_OF_LETTERS_ALLOWED } from "../../constants"

function Input({ didGameOver, onChange, value }) {
  return (
    <>
      <label>Enter guess:</label>
      <input
        aria-disabled={didGameOver}
        disabled={didGameOver}
        id='guess-input'
        title="5 letter word"
        pattern={`^\\w{${NUM_OF_LETTERS_ALLOWED},${NUM_OF_LETTERS_ALLOWED}}$`}
        type='text'
        onChange={onChange}
        value={value}
      />
    </>
  )
}

export default Input