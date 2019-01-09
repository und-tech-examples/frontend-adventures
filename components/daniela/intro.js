import React from 'react'
import styled from 'styled-components'
import { Appear } from 'mdx-deck'

const P = styled.p`
  margin-top: 100px;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const Intro = () => {
  return (
    <React.Fragment>
      <iframe
        src="https://giphy.com/embed/8vc2rMUDjhy6Y" width="480" height="267" frameBorder="0" className="giphy-embed" allowFullScreen>
      </iframe>
      <Appear>
        <P>Lo que les quiero contar:</P>
        <List>
          <li>⋆ Lo que hacía antes ⋆</li>
          <li>⋆ Lo que hago ahora ⋆</li>
          <li>⋆ Lo que me hubiese gustado que me digan durante el camino ⋆</li>
        </List>
      </Appear>
    </React.Fragment>
  )
}
