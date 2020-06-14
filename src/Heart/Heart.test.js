import React from 'react'
import renderer from 'react-test-renderer'
import Heart from './Heart'

describe('Heart component', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<Heart />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
