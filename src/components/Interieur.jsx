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
import HomeInterieur from './HomeInterieur';

const Interieur = () => {

  return (
    <Canvas>
      <Stage environment="park" intensity={0.65}>
      <PresentationControls
        global
        rotation={[0, 0.6, 0]}
        polar={[0.55, 0.2]} //verticale
        azimuth={[-1, 0.75]} //horizontale
        config={{ mass: 2, tension: 400 }} //glisser-deposer
        snap={{ mass: 2, tension: 300 }} //liberation
      >
        <Float rotationIntensity={0.55}>
          <HomeInterieur/>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
      </Stage>
      <OrbitControls enableZoom={true}/>
    </Canvas>
  )
}

export default Interieur