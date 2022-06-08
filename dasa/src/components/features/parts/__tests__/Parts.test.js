import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Parts from '../Parts'

test('should render labels correctly', () => {
  render(<Parts firstLabel='first' secondLabel='second' max={10} min={0}/>)

  const firstLabel = screen.getByText(/first/)
  const secondLabel = screen.getByText(/second/)

  expect(firstLabel).toBeInTheDocument()
  expect(secondLabel).toBeInTheDocument()
})

test('should set input value', () => {
  render(<Parts firstLabel='first' secondLabel='second' max={100} min={0}/>)

  const input = screen.getByLabelText('first')
  fireEvent.change(input, {target: {value: '23'}})
  expect(input.value).toBe('23')

  const anotherInput = screen.getByLabelText('second')
  fireEvent.change(anotherInput, {target: {value: '50'}})
  expect(anotherInput.value).toBe('50')
})