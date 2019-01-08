import React from 'react'

export default ({ children, background, color }) => (
  <div
    style={{
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: background || 'white',
      color: color || 'black',
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      width: '100vw',
    }}
  >
    <div>{children}</div>
  </div>
)