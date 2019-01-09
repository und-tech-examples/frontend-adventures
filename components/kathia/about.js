import React from 'react'
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
export const About = () => {
  return (
    <Wrapper>
      <List>
          <ItemList style= {{ marginBottom: '25px' }}>
              <Avatar src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github" width="90" height="90" />
              <span style={{ marginLeft: '10px' }}>KathiaNeira</span>
          </ItemList>
          <ItemList style= {{ marginBottom: '25px' }}>
              <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/New_Logo_Gmail.svg/2000px-New_Logo_Gmail.svg.png" alt="correo" width="90" height="90" />
              <span style={{ marginLeft: '10px' }}>Kathianeira@gmail.com</span>
          </ItemList>
          <ItemList style= {{ marginBottom: '25px' }}>
              <Avatar src="http://www.logosvectorfree.com/wp-content/uploads/2018/01/Twitter.png" alt="twitter" width="90" height="90" />
              <span style={{ marginLeft: '10px' }}>@kathiaNeira</span>
          </ItemList>
      </List>
    </Wrapper>
  )
}