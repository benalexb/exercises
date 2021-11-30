import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import styles from '../../styles/calculator/InputDisplay.module.css'

const InputDisplay = ({ value, className }) => {
  const classes = clsx(styles['input-display'], { [className]: className })

  return <div className={classes}>{value}</div>
}

InputDisplay.defaultProps = {
  className: null
}

InputDisplay.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default InputDisplay
