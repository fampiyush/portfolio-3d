'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'

export default function Home() {
  
  const Model = () => {
    const gltf = useGLTF('possum_springs.glb')
    gltf.scene.rotation.y = -1.55
    return (<primitive object={gltf.scene} />)
  }

  return (
    <div className="w-screen h-screen">
      <Suspense fallback={'loading...'}>
        <Canvas camera={{position: [0,20,200]}}>
          <ambientLight intensity={1} />
          <Model />
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  )
}
