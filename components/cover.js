import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #311f18;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const Wrapper = styled.div`
  background-size: cover;
  background: url('public/adventure-book.jpg') no-repeat center center fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 5.5em;
  margin-top: 12%;
  margin-left: 7%;
  span {
    color: #4FAEE6;
  }
  span:nth-child(3n+1) {
    color: #E93133;
  }
  span:nth-child(3n+2) {
    color: #F68713;
  }
  span:nth-child(7),
  span:nth-child(12) {
    color: #5b268d;
  }
`;

export const Cover = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <span>F</span>
          <span>r</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>&nbsp;</span>
          <span>E</span>
          <span>n</span>
          <span>d</span>
          <br />
          <span>A</span>
          <span>d</span>
          <span>v</span>
          <span>e</span>
          <span>n</span>
          <span>t</span>
          <span>u</span>
          <span>r</span>
          <span>e</span>
          <span>s</span>
        </Title>
      </Wrapper>
    </Container>
  );
};