import React from 'react'
import { Box } from '@rebass/grid'

export default ({ children, background, color }) => (
  <Box
    css={{
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: background || 'white',
      color: color || 'black',
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      width: '100vw',
      '& a': {
        color: 'inherit',
        '&:visited': {
          color: 'inherit'
        },
      },
    }}
  >
    <div>{children}</div>
  </Box>
)