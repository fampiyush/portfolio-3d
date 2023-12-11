import { Canvas } from '@react-three/fiber'
import { Text } from '@react-three/drei'

export default (x, y, z) => {
  const stripWidth = 0.1; // Adjust this value to change the width of the brown strips
  const stripColor = '#732402'; // Adjust this value to change the color of the brown strips

  return (
    <mesh position={[x - 3, y + 0.6, z - 4.7]} rotation={[-0.1, 0.1, 0]}>
      {/* Top strip */}
      <mesh position={[0, stripWidth / 2 + 1, 0]}>
        <planeGeometry args={[3 + 2 * stripWidth, stripWidth, 10]} />
        <meshBasicMaterial color={stripColor} />
      </mesh>

      {/* Bottom strip */}
      <mesh position={[0, -stripWidth / 2 - 1, 0]}>
        <planeGeometry args={[3 + 2 * stripWidth, stripWidth, 10]} />
        <meshBasicMaterial color={stripColor} />
      </mesh>

      {/* Left strip */}
      <mesh position={[-stripWidth / 2 - 1.5, 0, 0]}>
        <planeGeometry args={[stripWidth, 2 + 2 * stripWidth, 10]} />
        <meshBasicMaterial color={stripColor} />
      </mesh>

      {/* Right strip */}
      <mesh position={[stripWidth / 2 + 1.5, 0, 0]}>
        <planeGeometry args={[stripWidth, 2 + 2 * stripWidth, 10]} />
        <meshBasicMaterial color={stripColor} />
      </mesh>

      {/* Main rectangle */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[3, 2, 10]} />
        <meshBasicMaterial color="#9e2424" />
      </mesh>

      {/* Texts */}
      <Text position={[-0.45, 0.4, 0.1]} scale={[0.2, 0.2, 0.2]} color={'#ffffff'}>
        Hello, Welcome to {'\n'}Portfolio.
      </Text>
      <Text position={[0.76, 0.5, 0.1]} scale={[0.2, 0.2, 0.2]} color={'#1b02fa'}>
        Piyush's
      </Text>
      <Text position={[-0.1, -0.1, 0.1]} scale={[0.15, 0.15, 0.15]} color={'#ffffff'}>
        {'\n'}Scroll down to go to next section.{'\n \n'}Scroll up to go to previous section.
      </Text>
    </mesh>
  );
};