function Banner({ answer, guesses, didWin }) {
  return (
    <div className={`banner ${didWin ? 'happy' : 'sad'}`}>
      <p>
        {didWin ? (
          <>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{guesses.length} guesses</strong>.
          </>
        ) : (
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        )}
      </p>
    </div>
  )
}

export default Banner