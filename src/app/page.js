'use client'

import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'

export default function Home() {

  const [cameraPathPoints, setCameraPathPoints] = useState([])

  useEffect(() => {
    fetch('/points.json')
      .then(res => res.json())
      .then(data => setCameraPathPoints(data))
  },[])

  const Render = () => {
    const camera = useThree((state) => state.camera)

    let index = 0
    const {x, y, z} = cameraPathPoints.position[index] 
    camera.position.set(x, y, z)

    const {x: rx, y: ry, z: rz} = cameraPathPoints.rotation[index]
    camera.rotation.set(rx, ry, rz)

    let timeout
    const handleScroll = (e) => {
      if(timeout) clearTimeout(timeout)
      timeout = setTimeout(() => {
        if (e.deltaY > 0) {
          index = index + 1
          if (index > cameraPathPoints.position.length - 1) {
            index = cameraPathPoints.position.length - 1
          }
        } else {
          index = index - 1
          if (index < 0) {
            index = 0
          }
        }

          const {x, y, z} = cameraPathPoints.position[index] 
          gsap.to(camera.position, {duration: 2, x, y, z})
  
          const {x: rx, y: ry, z: rz} = cameraPathPoints.rotation[index]
          gsap.to(camera.rotation, {x: rx, y: ry, z: rz, duration: 2})
      }, 200)
    }

    window.addEventListener('wheel', handleScroll)
  }

  const Model = () => {
    const gltf = useGLTF('possum_springs.glb')
    gltf.scene.rotation.y = -1.55
    return (<primitive object={gltf.scene} />)
  }

  return (
    <div className="w-screen h-screen">
      <Suspense fallback={'loading...'}>
        <Canvas>
          <ambientLight intensity={1} />
          <Model />
          <Render />
          {/* <OrbitControls /> */}
        </Canvas>
      </Suspense>
    </div>
  )
}
