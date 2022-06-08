import React from 'react'
import { render, screen } from '@testing-library/react'
import EngineModel from '../EngineModel'

test('should render name', () => {
  render(<EngineModel models={['Diesel', 'Petrol']}/>)

  const nameElement = screen.getByText(/Engine Model/i)
  expect(nameElement).toBeInTheDocument()
})

test('should set default to Diesel', () => {
  render(<EngineModel models={['Diesel', 'Petrol']}/>)

  const defaultVal = screen.getByDisplayValue(/Diesel/)

  expect(defaultVal).toBeInTheDocument()
})

test('should render Select element', () => {
  const { container } = render(<EngineModel models={['Diesel', 'Petrol', 'Gas', 'Electric']}/>)

  const selectElem = container.getElementsByClassName('select-model')

  expect(selectElem.length === 1).toBeTruthy()
})
