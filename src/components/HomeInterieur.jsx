import React from 'react'
import { useGLTF } from "@react-three/drei";



const HomeInterieur = () => {
    const house = useGLTF("/models/home_interior_floor_plan.glb");
  return (
    <primitive object={house.scene}/>
  )
}

export default HomeInterieur