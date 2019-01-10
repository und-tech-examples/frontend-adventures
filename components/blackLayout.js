import React from 'react'
import BaseLayout from './baseLayout'

export default ({ children }) => (
  <BaseLayout background="#161616" color= "white">
    <div>{children}</div>
  </BaseLayout>
)
