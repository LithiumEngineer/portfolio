import React, { useRef } from "react"
import { useGLTF, PerspectiveCamera } from "@react-three/drei"

export function Model(props) {
  const { nodes, materials } = useGLTF("/DCLib.glb")
  return (
    <group {...props} dispose={null}>
      <group position={[1.513, -1.271, -4.063]}>
        <PerspectiveCamera
          makeDefault={false}
          far={100}
          near={0.1}
          fov={22.895}
          position={[7.359, 4.958, 6.926]}
          rotation={[-0.627, 0.71, 0.441]}
        />
        <mesh
          geometry={nodes.Cube001.geometry}
          material={materials.Material_0}
        />
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material_1}
          position={[1.699, 1.721, 7.335]}
        />
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials.Material_2}
          position={[1.728, 1.723, 1.738]}
        />
      </group>
      <mesh
        geometry={nodes.Text.geometry}
        material={materials.Material_1}
        position={[2.656, 1.91, 2.929]}
        rotation={[1.577, 0.149, -1.545]}
      />
    </group>
  )
}

useGLTF.preload("/DCLib.glb")
