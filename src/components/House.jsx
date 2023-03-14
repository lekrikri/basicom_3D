import { useGLTF } from '@react-three/drei';
import React from 'react'

const House = () => {
    const mobius = useGLTF("/models/mobius_house.glb");
    return (
      <primitive object={mobius.scene}/>
    )
}

export default House