import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  margin-top: 50px;
  a {
    color: inherit;
  }
`;
const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 auto 1.5em;
  padding-left: 0;
  width: 1000px;
`;
const ItemList = styled.li`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
`;
const Avatar = styled.img`
    width: 200px;
`;
export const Today = () => {
  return (
    <Wrapper>
      <List>
          <ItemList style= {{ marginBottom: '25px' }}>
              <Avatar src="https://cdn-images-1.medium.com/max/1026/1*3SVfBkNZI2f-sspiq59xcw.png" alt="react" />
          </ItemList>
          <ItemList style= {{ marginBottom: '25px' }}>
              <Avatar src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" alt="Styled component" />
          </ItemList>
          <ItemList style= {{ marginBottom: '25px' }}>
              <Avatar src="https://aspgems.com/wp-content/uploads/2018/11/Webpack_logo-on-white-bg.png" alt="Styled component" />
          </ItemList>
          <ItemList style= {{ marginBottom: '25px' }}>
              <Avatar src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/JIlwezxNS3OU0h4oqKc8" alt="Pug" />
          </ItemList>
          <ItemList style= {{ marginBottom: '25px' }}>
              <Avatar src="http://it-master-ar.github.io/curso-javascript/img/babel.png" alt="Babel" />
          </ItemList>
          <ItemList style= {{ marginBottom: '25px' }}>
              <Avatar src="https://mherman.org/assets/img/blog/typescript-logo.png" alt="Typescript" />
          </ItemList>
          <ItemList style= {{ marginBottom: '25px' }}>
              <Avatar src="http://www.themightycribb.com/wp-content/uploads/2016/08/gulpjs-logo.jpg" alt="Gulp" />
          </ItemList>
          <ItemList style= {{ marginBottom: '25px' }}>
              <span>Y vendrán más...</span>
          </ItemList>
      </List>
    </Wrapper>
  )
}