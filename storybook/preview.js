import { addDecorator } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import packageJson from '../package.json'

addDecorator(
  withOptions({
    name: 'React Easy Spinners',
    url: packageJson.repository.url,
    showAddonPanel: false
  })
)
