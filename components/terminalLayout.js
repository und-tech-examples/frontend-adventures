import React from 'react'
import BaseLayout from './baseLayout'

export default ({ children }) => (
  <BaseLayout background="#2C3A41" color="#00B300">
    <div>{children}</div>
  </BaseLayout>
)
