import React from 'react'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 50px;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const AboutUs = () => {
  return (
    <Wrapper>
      <h3>Front End Developers en <a href="https://github.com/und-tech" target="_blank">UND</a></h3>
      <Flex width="800px">
        <Box width={1 / 2} px={2}>
          <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/24289/images/5098530/logo.svg" width="352" height="56" />
          <List>
            <li>Claudia Valdivieso</li>
            <li>Daniela Tizón</li>
          </List>
        </Box>
        <Box width={1 / 2} px={2}>
          <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/904844/images/5100168/logo-urbania.svg" width="249" height="64" />
          <List>
            <li>Kathia Neira</li>
          </List>
        </Box>
      </Flex>
    </Wrapper>
  );
};