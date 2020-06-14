import React from 'react'
import renderer from 'react-test-renderer'
import Roller from './Roller'

describe('Roller component', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<Roller />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
