import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

jest.mock('./components/header/Header', () => () => <div data-testid='header'/>)
jest.mock('./components/navigation/NavBar', () => () => <div data-testid='navbar'/>)
jest.mock('./components/home/Home', () => () => <div data-testid='home'/>)

test('should render components correctly', () => {
  const { getByTestId } = render(<App />)

  expect(getByTestId(/header/)).toBeInTheDocument()
  expect(getByTestId(/navbar/)).toBeInTheDocument()
  expect(getByTestId(/home/)).toBeInTheDocument()
})
