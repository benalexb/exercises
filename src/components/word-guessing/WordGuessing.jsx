import React, { useEffect, useState } from 'react'
import faker from 'faker'
import styles from './WordGuessing.module.css'

const RANDOM_WORD = faker.random.word().toLowerCase()

export const WordGuessing = () => {
  const [turn, setTurn] = useState('A') // A | B
  const [guess, setGuess] = useState('')
  const [randomWord, setRandomWord] = useState(RANDOM_WORD)
  const [gameState, setGameState] = useState([])
  const [tried, setTried] = useState(new Set())

  const processPlay = () => {
    const futureGameState = []
    for (let i = 0; i < randomWord.length; i++) {
      futureGameState.push(gameState[i] || guess === randomWord[i])
    }

    if (!randomWord.split('').includes(guess)) {
      setTried(tried.add(guess))
    }

    setGameState(futureGameState)
    setTurn(turn === 'A' ? 'B' : 'A')
    setGuess('')
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    processPlay()
  }

  const onReset = () => {
    setRandomWord(faker.random.word().toLowerCase())
    setGameState([])
    setTried(new Set())
  }

  const onInputChange = (event) => {
    setGuess(event.target.value)
  }

  useEffect(() => {
    console.log(randomWord)
  }, [randomWord])

  return (
    <div className={styles.container}>
      <h1>{`Turn: ${turn}`}</h1>
      <form className={styles.form} onSubmit={onFormSubmit}>
        <input type="text" name="guess" maxLength={1} value={guess} onChange={onInputChange} />
        <button type="submit">Check!</button>
      </form>
      <div className={styles.board}>
        {randomWord.split('').map((char, index) => {
          return <span key={`${char}-${index}`}>{gameState[index] ? char : '_'}</span>
        })}
      </div>
      <button className={styles.reset} type="button" onClick={onReset}>Reset</button>
      <div className={styles.tries}>
        {[...Array.from(tried)].sort().map((char, index) => <span key={`${char}-${index}`}>{char}</span>)}
      </div>
    </div>
  )
}

export default WordGuessing
