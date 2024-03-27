/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Denkon (https://sketchfab.com/nykondenys)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/room-blank-4a3b97905f9549218525e14c49403e28
Title: Room Blank
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Model(props) {
  const { nodes, materials } = useGLTF("./room_blank.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.836}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.beige_wall_001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.Glass}
            position={[0, 1.562, -5.222]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.Glass}
          />
          <RigidBody type="fixed" colliders="trimesh" ccd>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.laminate_floor_02}
            />
          </RigidBody>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.leather_white}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials.plywood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={materials.Plastic}
            position={[0, 1.562, -5.222]}
            scale={[1, 1, 1.834]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20.geometry}
            material={materials.Plastic}
            position={[-5.226, 1.568, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.965, 0.965, 1.769]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./room_blank.glb");
