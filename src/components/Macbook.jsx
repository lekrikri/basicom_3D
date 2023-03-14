import React from 'react'
import { useGLTF } from "@react-three/drei";

const Macbook = () => {
    const macbook = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf");
  return (
    <primitive object={macbook.scene} scale={9.5} position={[-5, -35, 0]} />
  )
}

export default Macbook