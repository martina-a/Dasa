import React from 'react'
import { render } from '@testing-library/react'
import LeftContainer from '../LeftContainer'
import RightContainer from '../RightContainer'

jest.mock('../../features/parts/Parts', () => () => <div data-testid='parts'/>)
jest.mock('../../features/lights/Lights', () => () => <div data-testid='lights'/>)
jest.mock('../../features/model/EngineModel', () => () => <div data-testid='models'/>)

// Left container tests.

test('should render Parts components', () => {
  const { getAllByTestId } = render(<LeftContainer />)

  expect(getAllByTestId(/parts/).length === 2).toBeTruthy()
})

test('should render Lights component', () => {
  const { getByTestId } = render(<LeftContainer />)

  expect(getByTestId(/lights/)).toBeInTheDocument()
})

// Right container tests.

test('should render Parts component', () => {
  const { getByTestId } = render(<RightContainer />)

  expect(getByTestId(/parts/)).toBeInTheDocument()
})

test('should render EngineModel component', () => {
  const { getByTestId } = render(<RightContainer />)

  expect(getByTestId(/models/)).toBeInTheDocument()
})
