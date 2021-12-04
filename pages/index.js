import React from 'react'
import Link from 'next/link'
import styles from '../src/styles/Home.module.css'

const Home = () => (
  <div className={styles.container}>
    <h2>Generic Exercises</h2>
    <ul>
      <li>
        <Link href="/calendar">Calendar</Link>
      </li>
      <li>
        <Link href="/numpad">NumPad</Link>
      </li>
      <li>
        <Link href="/calculator">Calculator</Link>
      </li>
      <li>
        <Link href="/tictactoe">TicTacToe</Link>
      </li>
    </ul>
    <h2>Performance</h2>
    <ul>
      <li>
        <Link href="/perf/hook-simple-state">Hook with useState</Link>
      </li>
      <li>
        <Link href="/perf/hook-reducer-state">Hook with a reducer</Link>
      </li>
      <li>
        <Link href="/perf/context-simple-state">Context with useState</Link>
      </li>
      <li>
        <Link href="/perf/context-reducer-state">Context with reducer</Link>
      </li>
      <li>
        <Link href="/perf/redux-state">Redux state</Link>
      </li>
    </ul>
  </div>
)

export default Home
