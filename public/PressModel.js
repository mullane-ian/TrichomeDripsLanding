/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/pressModel-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0001.geometry} material={nodes.Mesh_0001.material} />
      <mesh geometry={nodes.Mesh_1001.geometry} material={nodes.Mesh_1001.material} />
      <mesh geometry={nodes.Mesh_10.geometry} material={nodes.Mesh_10.material} />
      <mesh geometry={nodes.Mesh_11.geometry} material={nodes.Mesh_11.material} />
      <mesh geometry={nodes.Mesh_12.geometry} material={nodes.Mesh_12.material} />
      <mesh geometry={nodes.Mesh_13.geometry} material={nodes.Mesh_13.material} />
      <mesh geometry={nodes.Mesh_14.geometry} material={nodes.Mesh_14.material} />
      <mesh geometry={nodes.Mesh_15.geometry} material={nodes.Mesh_15.material} />
      <mesh geometry={nodes.Mesh_2001.geometry} material={nodes.Mesh_2001.material} />
      <mesh geometry={nodes.Mesh_3001.geometry} material={materials['Material_3.001']} />
      <mesh geometry={nodes.Mesh_4.geometry} material={materials.Material_4} />
      <mesh geometry={nodes.Mesh_5.geometry} material={nodes.Mesh_5.material} />
      <mesh geometry={nodes.Mesh_6.geometry} material={nodes.Mesh_6.material} />
      <mesh geometry={nodes.Mesh_7.geometry} material={nodes.Mesh_7.material} />
      <mesh geometry={nodes.Mesh_8.geometry} material={nodes.Mesh_8.material} />
      <mesh geometry={nodes.Mesh_9.geometry} material={nodes.Mesh_9.material} />
      <mesh geometry={nodes.Mesh_59.geometry} material={materials.Material_14} />
      <mesh geometry={nodes.Mesh_16.geometry} material={nodes.Mesh_16.material} />
      <mesh geometry={nodes.Mesh_17.geometry} material={nodes.Mesh_17.material} />
      <mesh geometry={nodes.Mesh_18.geometry} material={nodes.Mesh_18.material} />
      <mesh geometry={nodes.Mesh_19.geometry} material={nodes.Mesh_19.material} />
      <mesh geometry={nodes.Mesh_20.geometry} material={nodes.Mesh_20.material} />
      <mesh geometry={nodes.Mesh_21.geometry} material={nodes.Mesh_21.material} />
      <mesh geometry={nodes.Mesh_22.geometry} material={nodes.Mesh_22.material} />
      <mesh geometry={nodes.Mesh_23.geometry} material={nodes.Mesh_23.material} />
      <mesh geometry={nodes.Mesh_24.geometry} material={nodes.Mesh_24.material} />
      <mesh geometry={nodes.Mesh_25.geometry} material={nodes.Mesh_25.material} />
      <mesh geometry={nodes.Mesh_26.geometry} material={nodes.Mesh_26.material} />
      <mesh geometry={nodes.Mesh_27.geometry} material={nodes.Mesh_27.material} />
      <mesh geometry={nodes.Mesh_28.geometry} material={nodes.Mesh_28.material} />
      <mesh geometry={nodes.Mesh_29.geometry} material={nodes.Mesh_29.material} />
      <mesh geometry={nodes.Mesh_30.geometry} material={nodes.Mesh_30.material} />
      <mesh geometry={nodes.Mesh_31.geometry} material={nodes.Mesh_31.material} />
      <mesh geometry={nodes.Mesh_32.geometry} material={nodes.Mesh_32.material} />
      <mesh geometry={nodes.Mesh_33.geometry} material={nodes.Mesh_33.material} />
      <mesh geometry={nodes.Mesh_34.geometry} material={nodes.Mesh_34.material} />
      <mesh geometry={nodes.Mesh_35.geometry} material={nodes.Mesh_35.material} />
      <mesh geometry={nodes.Mesh_36.geometry} material={nodes.Mesh_36.material} />
      <mesh geometry={nodes.Mesh_37.geometry} material={nodes.Mesh_37.material} />
      <mesh geometry={nodes.Mesh_38.geometry} material={nodes.Mesh_38.material} />
      <mesh geometry={nodes.Mesh_39.geometry} material={nodes.Mesh_39.material} />
      <mesh geometry={nodes.Mesh_40.geometry} material={nodes.Mesh_40.material} />
      <mesh geometry={nodes.Mesh_41.geometry} material={nodes.Mesh_41.material} />
      <mesh geometry={nodes.Mesh_42.geometry} material={materials.Material_13} />
      <mesh geometry={nodes.Mesh_43.geometry} material={nodes.Mesh_43.material} />
      <mesh geometry={nodes.Mesh_44.geometry} material={nodes.Mesh_44.material} />
      <mesh geometry={nodes.Mesh_45.geometry} material={nodes.Mesh_45.material} />
      <mesh geometry={nodes.Mesh_46.geometry} material={nodes.Mesh_46.material} />
      <mesh geometry={nodes.Mesh_47.geometry} material={nodes.Mesh_47.material} />
      <mesh geometry={nodes.Mesh_48.geometry} material={nodes.Mesh_48.material} />
      <mesh geometry={nodes.Mesh_49.geometry} material={nodes.Mesh_49.material} />
      <mesh geometry={nodes.Mesh_50.geometry} material={nodes.Mesh_50.material} />
      <mesh geometry={nodes.Mesh_51.geometry} material={nodes.Mesh_51.material} />
      <mesh geometry={nodes.Mesh_52.geometry} material={nodes.Mesh_52.material} />
      <mesh geometry={nodes.Mesh_53.geometry} material={nodes.Mesh_53.material} />
      <mesh geometry={nodes.Mesh_54.geometry} material={nodes.Mesh_54.material} />
      <mesh geometry={nodes.Mesh_55.geometry} material={nodes.Mesh_55.material} />
      <mesh geometry={nodes.Mesh_56.geometry} material={nodes.Mesh_56.material} />
      <mesh geometry={nodes.Mesh_57.geometry} material={nodes.Mesh_57.material} />
      <mesh geometry={nodes.Mesh_58.geometry} material={nodes.Mesh_58.material} />
      <mesh geometry={nodes.Mesh_60.geometry} material={nodes.Mesh_60.material} />
      <mesh geometry={nodes.Mesh_61.geometry} material={nodes.Mesh_61.material} />
    </group>
  )
}

useGLTF.preload('/pressModel-transformed.glb')