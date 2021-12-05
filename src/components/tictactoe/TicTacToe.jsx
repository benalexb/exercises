import React, { useReducer } from 'react'
import Tile from './Tile'
import styles from '../../styles/tictactoe/TicTacToe.module.css'

const initialState = {
  turn: 'x', // x | o
  win: null,
  gameState: ['', '', '', '', '', '', '', '', '']
}

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'setTurn':
      return { ...state, turn: action.payload }
    case 'setGameState':
      return { ...state, gameState: action.payload }
    case 'setWin':
      return { ...state, win: action.payload }
    case 'setState':
      return { ...state, ...action.payload }
    case 'resetGame':
      return { ...initialState }
    default:
      return { ...state }
  }
}

const ROW_WIN_POSSIBILITIES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
]

const COL_WIN_POSSIBILITIES = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]

const hasWin = (possibilities, turn, gameState) => {
  let hasWin = false
  for (let i = 0; i < possibilities.length; i++) {
    hasWin = possibilities[i].every((tile) => {
      return gameState[tile] === turn
    })
    if (hasWin) {
      return [hasWin, possibilities[i]]
    }
  }
  return [hasWin, null]
}

const hasRowWin = (turn, gameState) => hasWin(ROW_WIN_POSSIBILITIES, turn, gameState)

const hasColWin = (turn, gameState) => hasWin(COL_WIN_POSSIBILITIES, turn, gameState)

const getGameResult = (turn, gameState) => {
  const [rowWin, rowResult] = hasRowWin(turn, gameState)
  const [colWin, colResult] = hasColWin(turn, gameState)

  if (rowWin) {
    return [rowWin, rowResult]
  }

  if (colWin) {
    return [colWin, colResult]
  }

  return [false, null]
}

const getNextGameState = (turn, gameState, tileValue, tileIndex) => {
  const nextState = [...gameState]
  nextState[tileIndex] = turn
  return nextState
}

const getNextTurn = (turn) => turn === 'x' ? 'o' : 'x' // Switch turns

const TicTacToe = () => {
  const [{ gameState, turn, win }, dispatch] = useReducer(gameReducer, initialState)

  const onTileClick = (tileValue, tileIndex) => {
    // Only take action if the tile has not been played yet
    if (tileValue === '') {
      const nextState = getNextGameState(turn, gameState, tileValue, tileIndex)
      const [hasWin, win] = getGameResult(turn, nextState)
      dispatch({
        type: 'setState',
        payload: {
          turn: getNextTurn(turn),
          gameState: nextState,
          ...(hasWin && { win })
        }
      })
    }
  }

  const onResetGame = () => dispatch({ type: 'resetGame' })

  console.log('win', win) // bbarreto_debug

  return (
    <div className={styles.container}>
      <h1>{`Player turn: ${turn}`}</h1>
      <div className={styles['game-grid']}>
        {gameState.map((tile, index) => (
          <Tile type="button" key={`${tile}-${index}`} onClick={() => onTileClick(tile, index)}>
            {tile}
          </Tile>
        ))}
      </div>
      <button type="button" onClick={onResetGame}>Reset Game</button>
    </div>
  )
}

export default TicTacToe
