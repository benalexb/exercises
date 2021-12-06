import React, { useReducer } from 'react'
import Tile from './Tile'
import WinMarker, {
  FIRST_ROW,
  SECOND_ROW,
  THIRD_ROW,
  FIRST_COL,
  SECOND_COL,
  THIRD_COL,
  TRANS_ONE,
  TRANS_TWO
} from './WinMarker'
import styles from '../../styles/tictactoe/TicTacToe.module.css'

const initialState = {
  turn: 'x', // x | o
  win: null,
  winner: null,
  gameState: ['', '', '', '', '', '', '', '', '']
}

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'setTurn':
      return { ...state, turn: action.payload }
    case 'setGameState':
      return { ...state, gameState: action.payload }
    case 'setWin':
      return { ...state, win: action.payload.win, winner: action.payload.winner }
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

const TRANS_WIN_POSSIBILITIES = [
  [0, 4, 8],
  [2, 4, 6]
]

const getWinMarkerVariant = (winResult) => {
  switch (JSON.stringify(winResult)) {
    case JSON.stringify(ROW_WIN_POSSIBILITIES[0]):
      return FIRST_ROW
    case JSON.stringify(ROW_WIN_POSSIBILITIES[1]):
      return SECOND_ROW
    case JSON.stringify(ROW_WIN_POSSIBILITIES[2]):
      return THIRD_ROW
    case JSON.stringify(COL_WIN_POSSIBILITIES[0]):
      return FIRST_COL
    case JSON.stringify(COL_WIN_POSSIBILITIES[1]):
      return SECOND_COL
    case JSON.stringify(COL_WIN_POSSIBILITIES[2]):
      return THIRD_COL
    case JSON.stringify(TRANS_WIN_POSSIBILITIES[0]):
      return TRANS_ONE
    case JSON.stringify(TRANS_WIN_POSSIBILITIES[1]):
      return TRANS_TWO
    default:
      return null
  }
}

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

const hasTransWin = (turn, gameState) => hasWin(TRANS_WIN_POSSIBILITIES, turn, gameState)

const getGameResult = (turn, gameState) => {
  const rowResult = hasRowWin(turn, gameState)
  const colResult = hasColWin(turn, gameState)
  const transResult = hasTransWin(turn, gameState)

  if (rowResult[0]) {
    return rowResult
  }

  if (colResult[0]) {
    return colResult
  }

  if (transResult[0]) {
    return transResult
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
  const [{ gameState, turn, win, winner }, dispatch] = useReducer(gameReducer, initialState)

  const onTileClick = (tileValue, tileIndex) => {
    // Only take action if the tile has not been played yet
    if (tileValue === '' && !win) {
      const nextState = getNextGameState(turn, gameState, tileValue, tileIndex)
      const [hasWin, win] = getGameResult(turn, nextState)
      dispatch({
        type: 'setState',
        payload: {
          turn: getNextTurn(turn),
          gameState: nextState,
          ...(hasWin && { win, winner: turn })
        }
      })
    }
  }

  const onResetGame = () => dispatch({ type: 'resetGame' })

  return (
    <div className={styles.container}>
      {!win && <h1>{`Player turn: ${turn.toUpperCase()}`}</h1>}
      {!!win && <h1>{`Winner: ${winner.toUpperCase()}`}</h1>}
      <div className={styles['game-grid']}>
        {!!win && <WinMarker winResult={win} variant={getWinMarkerVariant(win)} />}
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
