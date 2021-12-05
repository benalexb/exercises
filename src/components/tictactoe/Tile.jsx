import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../styles/tictactoe/Tile.module.css'

const Tile = ({ children, onClick }) => {
  const handleClick = () => {
    onClick && onClick()
  }
  return <button type="button" className={styles.tile} onClick={handleClick}>{children}</button>
}

Tile.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}

export default Tile
