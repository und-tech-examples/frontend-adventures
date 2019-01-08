import React from 'react'
import BaseLayout from './baseLayout'

export default ({ children }) => (
  <BaseLayout background="#6bbf47" color="white">
    <div>{children}</div>
  </BaseLayout>
)