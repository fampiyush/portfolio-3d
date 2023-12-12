'use client'

import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, OrbitControls, Text, Html } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import firstSection from './firstSection'
import secondSection from './secondSection'

export default function Home() {

  const [cameraPathPoints, setCameraPathPoints] = useState([])

  const dronePosition = useRef()
  dronePosition.current = new THREE.Vector3()

  const indexRef = useRef(0)

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
        indexRef.current = index

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

  const Drone = () => {
    const gltf = useGLTF('mini-bot.glb')
    gltf.scene.scale.set(0.5, 0.5, 0.5)

    const { x, y, z } = cameraPathPoints.position[0]
    gltf.scene.position.set(x - 3, y - 2, z - 4.6)
    gltf.scene.rotation.y = 0.6
    dronePosition.current.x = gltf.scene.position.x - 2
    dronePosition.current.y = gltf.scene.position.x + 2
    dronePosition.current.z = gltf.scene.position.z

    let mixer
    if (gltf.animations.length) {
      mixer = new THREE.AnimationMixer(gltf.scene)
      gltf.animations.forEach((clip) => {
        if (clip.name === 'hip_control|waving') {
          const action = mixer.clipAction(clip)
          action.setLoop(THREE.LoopOnce) // Set the animation to play only once
          action.clampWhenFinished = true // Keep the animation in its final state after it finishes
          action.play()
        }
      })
    }

    useFrame((state, delta) => {
      if (mixer) mixer.update(delta)
    })

    return <primitive object={gltf.scene} />
  }

  const FirstSection = () => {
    const { x, y, z } = cameraPathPoints.position[0]
    return firstSection(x, y, z)
  }

  const SecondSection = () => {
    const { x, y, z } = cameraPathPoints.position[1]
      return secondSection(x, y, z)
  }

  return (
    <div className="w-screen h-screen">
      <Suspense fallback={'loading...'}>
        <Canvas>
          <ambientLight intensity={1} />
          <Model />
          <directionalLight intensity={0.3} position={dronePosition.current} />
          <Drone />
          <Render />
          <FirstSection />
          <SecondSection />
          {/* <OrbitControls /> */}
        </Canvas>
      </Suspense>
    </div>
  )
}
