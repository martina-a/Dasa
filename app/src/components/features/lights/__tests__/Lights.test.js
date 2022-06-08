import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Lights from '../Lights'

test('should render correct name', () => {
  render(<Lights name='Test Light'/>)

  const nameElement = screen.getByText(/Test Light/i)
  expect(nameElement).toBeInTheDocument()
})

test('should register a click event', () => {
  const mockOnClick = jest.fn()

  const { container } = render(<Lights name='Test light' onClick={mockOnClick()}/>)

  const theSwitch = container.getElementsByClassName('switch')[0]

  fireEvent.click(theSwitch)

  expect(mockOnClick).toHaveBeenCalledTimes(1)
})
