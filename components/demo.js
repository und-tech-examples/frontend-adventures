import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  width: 100vw;
`;

export const Demo = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}