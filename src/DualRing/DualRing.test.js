import React from 'react'
import renderer from 'react-test-renderer'
import DualRing from './DualRing'

describe('DualRing component', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<DualRing />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
