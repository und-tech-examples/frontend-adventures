import React from 'react'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 50px;
  a {
    color: inherit;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0 auto 1.5em;
  padding-left: 0;
  width: 400px;
`;

const ItemList = styled.li`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  border-radius: 50%;
`;

export const AboutUs = () => {
  return (
    <Wrapper>
      <List>
        <ItemList>
          <Avatar src="https://media.licdn.com/dms/image/C4E03AQFLS7JMfx9QIw/profile-displayphoto-shrink_200_200/0?e=1552521600&v=beta&t=VQValn8ftPZbCjt4o9x0-0Iy6NppezAnV4kFyVg-9F8" alt="Claudia Valdivieso" width="90" height="90" />
          <span style={{ marginLeft: '10px' }}>Claudia Valdivieso</span>
        </ItemList>
        <ItemList>
          <Avatar src="https://media.licdn.com/dms/image/C4D03AQFx6E1FAjOkzw/profile-displayphoto-shrink_200_200/0?e=1549497600&v=beta&t=_dOBDzgUGNo9fwSrYgYmd-7cyAXogj7bISHJb4jf5c0" alt="Daniela Tizón" width="90" height="90" />
          <span style={{ marginLeft: '10px' }}>Daniela Tizón</span>
        </ItemList>
        <ItemList>
          <Avatar src="https://avatars1.githubusercontent.com/u/8573730?s=460&v=4" alt="Kathia Neira" width="90" height="90" />
          <span style={{ marginLeft: '10px' }}>Kathia Neira</span>
        </ItemList>
      </List>
      <Flex width="800px">
        <Box width={1 / 2} px={2}>
          <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/24289/images/5098530/logo.svg" width="352" height="56" />
        </Box>
        <Box width={1 / 2} px={2}>
          <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/904844/images/5100168/logo-urbania.svg" width="249" height="64" />
        </Box>
      </Flex>
    </Wrapper>
  );
};