import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Drone from './Drone'

const ProductDesign = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Drone/>
      </Stage>
      <OrbitControls enableZoom={true}/>
    </Canvas>
  )
}

export default ProductDesign