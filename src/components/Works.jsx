import React, { useState } from 'react';
import styled from 'styled-components';
import Developpement from './Developpement';
// import WebDesign from './webDesign';
import Exterieur from './Exterieur';
import ProductDesign from './ProductDesign';
import Interieur from './Interieur';
import Web from './Web';

const data = [
  "Product design",
  "Architecture extérieur",
  "Aménagement intérieur",
  "Développement",
  "Web design",
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
 width: 1400px;
 display: flex;
 justify-content: space-between;

 @media only screen and (max-width: 768px) {
  width: 100%;
  flex-direction: column;
 }
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
  padding: 20px;
  justify-content: center;
 }
`
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const ListItem = styled.li`
 font-size: 60px;
 font-weight: bold;
 cursor: pointer;
 color: transparent;
 -webkit-text-stroke: 0.25px white;
 position: relative;

 @media only screen and (max-width: 768px) {
  font-size: 30px;
  color: white;
  -webkit-text-stroke: 0px;
 }

 ::after{
  content: "${(props)=>props.text}";
  position: absolute;
  top: 0;
  left: 0;
  color: #0063b3;
  width: 0;
  overflow: hidden;
  white-space: nowrap;
 }

 &:hover{
  ::after{
    animation: moveText 0.5s linear both;

    @keyframes moveText{
      to{
        width: 100%;
      }
    }
  }
 }

`
const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
  position: relative;
  bottom: 5%;
 }
`


const Works = () => {
  const [work, setWork] = useState()
  const components = {
    "Développement": <Developpement />,
    "Architecture extérieur": <Exterieur />,
    "Product design": <ProductDesign />,
    "Aménagement intérieur": <Interieur />,
    "Web design": <Web />,
  };
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem 
              key={item} 
              text={item}
              onClick={() => setWork(item)}
              >
              {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
        {components[work] || <div>Veuillez selectionner un composant</div>}
        </Right>
      </Container>
    </Section>
  )
}

export default Works