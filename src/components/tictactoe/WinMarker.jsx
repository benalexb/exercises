import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import styles from '../../styles/tictactoe/WinMarker.module.css'

export const FIRST_ROW = 'first-row'
export const SECOND_ROW = 'second-row'
export const THIRD_ROW = 'third-row'
export const FIRST_COL = 'first-col'
export const SECOND_COL = 'second-col'
export const THIRD_COL = 'third-col'
export const TRANS_ONE = 'trans-one'
export const TRANS_TWO = 'trans-two'

export const VARIANTS = [
  FIRST_ROW,
  SECOND_ROW,
  THIRD_ROW,
  FIRST_COL,
  SECOND_COL,
  THIRD_COL,
  TRANS_ONE,
  TRANS_TWO
]

const WinMarker = ({ variant }) => <div className={clsx(styles.marker, { [styles[variant]]: variant })} />

WinMarker.propTypes = {
  variant: PropTypes.oneOf(VARIANTS)
}

export default WinMarker
