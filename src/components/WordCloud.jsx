import React, { useRef, useState, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }
  
  const technologies = [
    'React',
    'Vite',
    'NodeJS',
    'ThreeJS',
    '@react-three/fiber',
    '@react-three/drei',
    '3D',
    'Styled-components',
    'HTML',
    'CSS',
    'Visite virtuel',
    'useState',
    'MongoDB',
    'FrontEnd',
    'BackEnd',
    'Visualisation 3D',
  ]

  function Word({ children, onClick, controlsRef, sphericalRef, ...props }) {
    const color = new THREE.Color()
    const fontProps = {
      font: '/Inter-Bold.woff',
      fontSize: 2.5,
      letterSpacing: -0.05,
      lineHeight: 1,
      'material-toneMapped': false
    }
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    const over = (e) => {
      e.stopPropagation()
      setHovered(true)
    }
    const out = () => setHovered(false)
  
    // Change the mouse cursor on hover
    useEffect(() => {
      if (hovered) document.body.style.cursor = 'pointer'
      return () => (document.body.style.cursor = 'auto')
    }, [hovered])
  
    // Tie component to the render-loop
    useFrame(({ camera }) => {
      // Make text face the camera
      ref.current.quaternion.copy(camera.quaternion)
      // Animate font color
      ref.current.material.color.lerp(
        color.set(hovered ? '#55c4ff' : 'white'),
        0.1
      )
    })
  
    return (
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        {...props}
        {...fontProps}
        children={children}
      />
    )
  }
  
  function Cloud({ radius }) {
    const count = Math.ceil(Math.sqrt(technologies.length))
    const sphericalRef = useRef(new THREE.Spherical())
    const words = useMemo(() => {
      shuffleArray(technologies)
      let idx = 0
      const temp = []
      const phiSpan = Math.PI / (count + 1)
      const thetaSpan = (Math.PI * 2) / count
      for (let i = 1; i < count + 1; i++) {
        // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
        for (let j = 0; j < count; j++) {
          const v3 = new THREE.Vector3().setFromSpherical(
            sphericalRef.current.set(radius, phiSpan * i, thetaSpan * j)
          )
          temp.push([v3, technologies[idx]])
          idx++
        }
      }
      return temp.filter((w) => Boolean(w[1]))
    }, [count, radius])
  
    return words.map(([pos, word]) => (
      <Word key={word} position={pos} children={word} />
    ))
  }  
  

const WordCloud = () => {
    return (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
          <fog attach="fog" args={['#202025', 0, 80]} />
          <Cloud radius={15} />
          <TrackballControls />
        </Canvas>
      )
}

export default WordCloud

