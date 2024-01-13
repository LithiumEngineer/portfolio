import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/test4.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[1.513, -1.271, -4.063]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials.Material_1} position={[1.699, 1.721, 7.335]} />
        <mesh geometry={nodes.Cube002.geometry} material={materials.Material_2} position={[1.728, 1.723, 1.738]} />
      </group>
      <mesh geometry={nodes.Text.geometry} material={materials['Material.001']} position={[2.673, 1.944, 2.789]} rotation={[1.577, 0.149, -1.545]} />
      <mesh geometry={nodes.Text001.geometry} material={materials['Material_1.001']} position={[-2.587, 1.964, -1.829]} rotation={[1.571, -0.13, 1.565]} />
    </group>
  )
}

useGLTF.preload('/test4.glb')
