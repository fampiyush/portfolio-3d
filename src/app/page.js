'use client'

import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, OrbitControls, Loader } from '@react-three/drei'
import * as THREE from 'three'
import Image from 'next/image'
import gsap from 'gsap'
import WelcomeSection from '../components/WelcomeSection'
import IntroSection from '../components/IntroSection'
import SkillSection from '../components/SkillSection'
import KeepMovingSection from '../components/KeepMovingSection'
import ProjectSection from '../components/ProjectSection'
import WorkSection from '../components/WorkSection'
import SocialsBanner from '../components/SocialsBanner'
import EndSection from '../components/EndSection'

export default function Home() {

  const [cameraPathPoints, setCameraPathPoints] = useState([])
  const [isMobile, setIsMobile] = useState(false);

  const dronePosition = useRef()
  dronePosition.current = new THREE.Vector3()

  const indexRef = useRef(0)

  const cameraRef = useRef()

  useEffect(() => {
    const getCameraPathPoints = async () => {
      await fetch('/points.json')
      .then(res => res.json())
      .then(data => setCameraPathPoints(data))
    }
    getCameraPathPoints()
  },[])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize() // Call the function once to set the initial value

    window.addEventListener('resize', handleResize) // Add event listener for resize

    return () => {
      window.removeEventListener('resize', handleResize) // Clean up the event listener on component unmount
    }
  }, [])

  const Render = () => {
    const camera = useThree((state) => state.camera)
    cameraRef.current = camera

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

        if(index == 6) {
          document.getElementById('socialBanner').style.display = 'none'
        } else {
          document.getElementById('socialBanner').style.display = 'block'
        }

        const {x, y, z} = cameraPathPoints.position[index] 
        gsap.to(camera.position, {duration: 2, x, y, z})

        const {x: rx, y: ry, z: rz} = cameraPathPoints.rotation[index]
        gsap.to(camera.rotation, {x: rx, y: ry, z: rz, duration: 2})

      }, 200)
    }

    document.getElementById('canvasContainer').addEventListener('wheel', handleScroll)
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
    if(isMobile) {
      gltf.scene.position.set(x - 2, y - 2, z - 10)
      gltf.scene.rotation.y = 0.2
    }else {
      gltf.scene.position.set(x - 3, y - 2, z - 5)
      gltf.scene.rotation.y = 0.6
    }
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
    if(isMobile) {
      return WelcomeSection(x+3, y, z-10, true)
    }else {
      return WelcomeSection(x, y, z)
    }
  }

  const SecondSection = () => {
    const { x, y, z } = cameraPathPoints.position[1]
    if(isMobile) {
      return IntroSection(x-1, y, z-10)
    }else {
      return IntroSection(x, y, z)
    }
  }

  const ThirdSection = () => {
    const { x, y, z } = cameraPathPoints.position[2]
    if(isMobile) {
      return SkillSection(x-3, y, z-5)
    }else {
      return SkillSection(x, y, z)
    }
  }

  const FourthSection = () => {
    const { x, y, z } = cameraPathPoints.position[3]
    return KeepMovingSection(x, y, z)
  }

  const FifthSection = () => {
    const { x, y, z } = cameraPathPoints.position[4]
    if(isMobile) {
      return ProjectSection(x+3, y, z-5, true)
    }else {
      return ProjectSection(x, y, z)
    }
  }

  const SixthSection = () => {
    const { x, y, z } = cameraPathPoints.position[5]
    if(isMobile) {
      return WorkSection(x-3, y, z-5, true)
    }else {
      return WorkSection(x, y, z)
    }
  }

  const SeventhSection = () => { 
    const { x, y, z } = cameraPathPoints.position[6]
    if(isMobile) {
      return EndSection(x-2, y, z-1)
    }else {
      return EndSection(x, y, z)
    }
  }

  const onUp = () => {
    setTimeout(() => {
      indexRef.current += 1
      if (indexRef.current > cameraPathPoints.position.length - 1) {
        indexRef.current = cameraPathPoints.position.length - 1
      }
      const {x, y, z} = cameraPathPoints.position[indexRef.current]
      gsap.to(cameraRef.current.position, {duration: 2, x, y, z})

      const {x: rx, y: ry, z: rz} = cameraPathPoints.rotation[indexRef.current]
      gsap.to(cameraRef.current.rotation, {x: rx, y: ry, z: rz, duration: 2})
    }, 200)
  }

  const onDown = () => {
    setTimeout(() => {
      indexRef.current -= 1
      if (indexRef.current < 0) {
        indexRef.current = 0
      }
      const {x, y, z} = cameraPathPoints.position[indexRef.current]
      gsap.to(cameraRef.current.position, {duration: 2, x, y, z})

      const {x: rx, y: ry, z: rz} = cameraPathPoints.rotation[indexRef.current]
      gsap.to(cameraRef.current.rotation, {x: rx, y: ry, z: rz, duration: 2})
    }, 200)
  }

  return (
    <div className="w-screen h-screen" id='canvasContainer'>
      <Suspense fallback={null}>
        <Canvas id='canvas'>
          <ambientLight intensity={1} />
          <Model />
          <directionalLight intensity={0.3} position={dronePosition.current} />
          <Drone />
          <Render />
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <SixthSection />
          <SeventhSection />
          {/* <OrbitControls /> */}
        </Canvas>
        <div id='socialBanner' style={{display: 'block'}}>
          <SocialsBanner />
        </div>
        {
          isMobile &&
          <div>
            <div className='fixed bottom-24 left-[45%]'>
              <button onClick={onUp}><Image src='/images/next.png' width={60} height={60} alt='Next icon' style={{transform: 'rotate(-90deg)'}} priority /></button>
            </div>
            <div className='fixed bottom-8 left-[45%]'>
              <button onClick={onDown}><Image src='/images/next.png' width={60} height={60} alt='Next icon' style={{transform: 'rotate(90deg)'}} priority /></button>
            </div>
          </div>
        }
      </Suspense>
      <Loader />
    </div>
  )
}
