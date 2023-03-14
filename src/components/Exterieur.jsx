import React from 'react'
import {
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  useGLTF,
  OrbitControls,
  Stage,
} from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import House from './House';

const Exterieur = () => {

  return (
    <Canvas>
      <Stage environment="park" intensity={0.45}>
      <PresentationControls
        global
        rotation={[0, -3.6, 0]}
        polar={[-0.4, 0.2]} //verticale
        azimuth={[-1, 0.75]} //horizontale
        config={{ mass: 2, tension: 400 }} //glisser-deposer
        snap={{ mass: 2, tension: 300 }} //liberation
      >
        <Float rotationIntensity={0.55}>
          <House/>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
      </Stage>
      <OrbitControls enableZoom={true}/>
    </Canvas>
  )
}

export default Exterieur