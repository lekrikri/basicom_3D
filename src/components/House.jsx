import React from 'react'
import { useGLTF } from "@react-three/drei";



const House = () => {
    const mobius = useGLTF("/models/mobius_house.glb");
  return (
    <primitive object={mobius.scene}/>
  )
}

export default House