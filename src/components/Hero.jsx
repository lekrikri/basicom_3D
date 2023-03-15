import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
  height: 180vh;
 }
`
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content:space-between;
  
  @media only screen and (max-width: 768px) {
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 }
  
`
const Left = styled.div`
 flex:2;
 display: flex;
 flex-direction:column;
 justify-content:center;
 gap: 20px;

 @media only screen and (max-width: 768px) {
  flex: 1;
  align-items: center;
 }
`
const Title = styled.h1`
 font-size: 74px;

 @media only screen and (max-width: 768px) {
  text-align: center;
  font-size: 52px;
 }
`
const WhatWeDo = styled.div`
 display: flex;
 align-items: center;
 gap: 10px;
`
const Line = styled.img`
 height: 5px;
`
const Subtitle = styled.h2`
 color: #50b3e8;
`
const DescA = styled.p`
position: relative;
left: 38%;
bottom: 9%;
font-size: 20px;
color: #50B3E8;

 @media only screen and (max-width: 768px) {
  padding: 60px;
  font-size: 16px;
  top: auto;
  left: auto;
  position: relative;
  text-align: center;
 }
`
const DescB = styled.p`
 font-size: 24px;
 color: lightgray;

 @media only screen and (max-width: 768px) {
  padding: 10px;
  text-align: center;
 }
`


const Button = styled.button`
 background-color: #3ca4ff;
 color: white;
 font-weight: 500;
 width: 100px;
 padding: 10px;
 border: none;
 border-radius:5px;
 cursor: pointer;
`

const Right = styled.div`
 flex: 3;
 position: relative;

 @media only screen and (max-width: 768px) {
  flex: 1;
  width: 100%;
  padding: 20%;
 }
`
const Img = styled.img`
 width: 800px;
 height:600px;
 object-fit: contain;
 position: absolute;
 top: 0;
 bottom: 0;
 left: 0;
 right: 0;
 margin: auto;
 animation: animate 2s infinite ease alternate;

 @media only screen and (max-width: 768px) {
  width: 300px;
  height: 300px;
  bottom: 30%;
 }

 @keyframes animate {
  to{
    transform: translateY(20px);
  }
 }
`

const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Agence de communication 360°</Title>
          <DescA>Guadeloupe - Martinique - Guyane</DescA>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>Ce que nous faisons</Subtitle>
          </WhatWeDo>
          <DescB>Nous developpons vos idees...</DescB>
          <Button>Savoir plus</Button>
        </Left>
        <Right>
        <Canvas>
          <OrbitControls enableZoom={false}/>
          <ambientLight intensity={0.5}/>
          <directionalLight position={[3,2,1]}/>
          <Sphere args={[1,100,200]} scale={2.5} position={[0,0,0]}>
            <MeshDistortMaterial
            color="#234f78"
            attach="material"
            distort={0.45}
            speed={1.25}
            />
          </Sphere>
        </Canvas>
          <Img src="./img/logo-basicom.png"/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero