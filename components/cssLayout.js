import React from 'react'
import BaseLayout from './baseLayout'

export default ({ children }) => (
  <BaseLayout background="#0171B9" color="white">
    <div>{children}</div>
  </BaseLayout>
)
