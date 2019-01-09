import React from 'react'
import styled from 'styled-components'
import { Appear } from 'mdx-deck'

const ImageWrapper = styled.div`
  height: 90%;

`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  max-height: 80vh;
  padding-left: 20vw;
`;

export const Today = () => {
  return (
    <Wrapper>
      <p>...hoy</p>
      <Appear>
        <ImageWrapper>
          <Image
            src="public/software-developer-meme.jpg"
          />
        </ImageWrapper>
      </Appear>
    </Wrapper>
  )
}

