import { OrbitControls, PresentationControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Drone from './Drone'

const ProductDesign = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
      <PresentationControls
        global
        rotation={[0, 0.6, 0]}
        polar={[0.85, 0.2]} //verticale
        azimuth={[-1, 0.75]} //horizontale
        config={{ mass: 2, tension: 400 }} //glisser-deposer
        // snap={{ mass: 2, tension: 300 }} //liberation
      >
        <Drone/>
      </PresentationControls>
      </Stage>
      <OrbitControls enableZoom={true}/>
    </Canvas>
  )
}

export default ProductDesign