import { Canvas } from '@react-three/fiber'
import { Text, Html } from '@react-three/drei'

export default (x, y, z) => {
  return (
      <Html occlude distanceFactor={10} position={[x+1 , y + 2, z - 20]} rotation={[0, 0.1, 0]} transform>
        <div className="container">
          <div className='bg-[#9e2424] w-52 rounded-md border-4 border-[#732402] p-4 flex-row text-center'>
            <p className="text-white text-lg">Keep Moving</p>
          </div>
        </div>
      </Html>
  );
};