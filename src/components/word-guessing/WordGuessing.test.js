/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import WordGuessing from './WordGuessing'

describe('WordGuessing', () => {
  it('shound render in its default state', () => {
    render(<WordGuessing />)
    const input = screen.getByTestId('guess-input')
    const submitButton = screen.getByTestId('guess-submit')
    expect(input).toBeDefined()
    expect(submitButton).toBeDefined()
  })
})
