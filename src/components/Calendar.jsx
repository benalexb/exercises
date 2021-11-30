import React, { useMemo, useState } from 'react'
import { DateTime, Info, Duration } from 'luxon'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { range } from 'lodash'
import styles from '../styles/Calendar.module.css'

export const Cell = ({ children, strong, highlight }, key) => {
  const classes = clsx(
    styles.cell,
    {
      [styles.strong]: strong,
      [styles.highlight]: highlight
    }
  )
  return <div key={key} className={classes}>{children}</div>
}

Cell.defaultProps = {
  children: null,
  strong: false,
  highlight: false
}

Cell.propTypes = {
  children: PropTypes.node,
  strong: PropTypes.bool,
  highlight: PropTypes.bool
}

const Calendar = () => {
  const today = DateTime.now().startOf('day')
  const [selectedDate, setSelectedDate] = useState(today)

  const onPreviousClick = () => {
    const duration = Duration.fromObject({ months: 1 })
    const newDate = selectedDate.minus(duration)
    setSelectedDate(newDate.startOf('month'))
  }

  const onNextClick = () => {
    const duration = Duration.fromObject({ months: 1 })
    const newDate = selectedDate.plus(duration)
    setSelectedDate(newDate.startOf('month'))
  }

  const onTodayClick = () => {
    setSelectedDate(today)
  }

  // Determine in which day of the week we start looping days.
  const gapRange = useMemo(() => range(1, selectedDate.weekday), [selectedDate])

  // Not all months have the same amount of days.
  const dayRange = useMemo(() => range(1, selectedDate.endOf('month').day + 1), [selectedDate])

  return (
    <div className={styles.container}>
      <h1>{`${Info.months()[selectedDate.month - 1]}, ${selectedDate.year}`}</h1>
      <div className={styles.control}>
        <button type="button" onClick={onPreviousClick}>{'<'}</button>
        <button type="button" onClick={onTodayClick}>today</button>
        <button type="button" onClick={onNextClick}>{'>'}</button>
      </div>
      <div className={styles['grid-container']}>
        {Info.weekdays('short').map((weekDay) => (
          <Cell key={weekDay} strong>{weekDay}</Cell>
        ))}
        {gapRange.map((gap) => (
          <Cell key={`gap-${gap}`} />
        ))}
        {dayRange.map((day) => {
          const isToday = today.diff(selectedDate.set({ day }).startOf('day')).toObject().milliseconds === 0
          return <Cell key={day} highlight={isToday}>{day}</Cell>
        })}
      </div>
    </div>
  )
}

export default Calendar
