import { Canvas } from '@react-three/fiber'
import { Text, Html } from '@react-three/drei'

export default (x, y, z) => {

  const onClick = () => {
    console.log('first')
  }

  return (
      <Html distanceFactor={10} position={[x+5 , y + 0.8, z - 10]} rotation={[-0.1, -0.2, 0]} transform>
        <div className="container">
          <div className='bg-[#9e2424] w-52 rounded-md border-4 border-[#732402] p-4 flex-row text-center'>
            <p className="text-white text-lg">Introduction</p>
            <p className="text-white bg-[#546d26] text-sm inline border-2 rounded-md"><button className='px-1' onClick={onClick}>OPEN</button></p>
          </div>
        </div>
      </Html>
  );
};