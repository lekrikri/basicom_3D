import React from 'react'
import { useGLTF } from "@react-three/drei";



const House = () => {
    const house = useGLTF("/models/mobius_house.glb");
  return (
    <primitive object={house.scene}/>
  )
}

export default House