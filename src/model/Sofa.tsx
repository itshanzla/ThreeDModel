import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/native'

export default function Sofa(props : any) {
  const { nodes , materials } : any = useGLTF(require('../model/sofa.glb'))
  return (
    <group {...props} dispose={null} scale={1}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wood.geometry}
        material={materials.Wood}
        position={[0.001, 0, -0.006]}
        rotation={[0, 0.715, 0]}
        scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fabric.geometry}
          material={materials.Fabric}
          position={[0, 194.882, -196.89]}
          scale={[1, 0.938, 1]}
        />
      </mesh>
    </group>
  )
}