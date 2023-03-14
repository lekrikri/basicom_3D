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
import Macbook from './Macbook';




const Web = () => {
  return (
    <Canvas>
      <Stage environment="studio" intensity={0.6}>
      <PresentationControls
        global
        rotation={[0, -13.3, 0]}
        polar={[-0.4, 0.2]} //verticale
        azimuth={[-1, 0.75]} //horizontale
        config={{ mass: 2, tension: 400 }} //glisser-deposer
        snap={{ mass: 2, tension: 300 }} //liberation
      >
        <Float rotationIntensity={0.4}>
            <Macbook/>
            <Html
              occlude
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.47}
              position={[-5, -20.5, -13.2]}
              rotation-x={-0.256}
              scale={2}
            >
              <img src="./img/screen.jpg" /> 
            </Html>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
      </Stage>
      <OrbitControls enableZoom={true}/>
    </Canvas>
  )
}

export default Web




