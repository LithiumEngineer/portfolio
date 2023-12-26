import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/DC2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[1.513, -1.271, -4.063]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials.Material_1} position={[1.699, 1.721, 7.335]} />
        <mesh geometry={nodes.Cube002.geometry} material={materials.Material_2} position={[1.728, 1.723, 1.738]} />
      </group>
      <mesh geometry={nodes.Text.geometry} material={materials.Material_1} position={[2.656, 1.91, 2.929]} rotation={[1.577, 0.149, -1.545]} />
      <mesh geometry={nodes.Text001.geometry} material={materials['Material_1.001']} position={[-2.679, 1.954, -1.827]} rotation={[1.568, -0.132, 1.498]} />
    </group>
  )
}

useGLTF.preload('/DC2.glb')
