import React from 'react'
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";


const Drone = () => {
    const drone = useGLTF("/models/drone.glb");
    const animations = useAnimations(drone.animations, drone.scene);
    console.log(animations);
    useEffect(() => {
      const action = animations.actions.hover;
      action.play();
    }, [animations.actions.hover]);
  return (
    <primitive object={drone.scene} scale={0.5} position={[-5, -75, 0]} />
  )
}

export default Drone