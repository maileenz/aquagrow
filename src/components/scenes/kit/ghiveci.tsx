import * as THREE from "three";
import React, { type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Body244_1: THREE.Mesh;
    Body269_1: THREE.Mesh;
    Body274_1: THREE.Mesh;
    Body275_1: THREE.Mesh;
    Body288_1: THREE.Mesh;
    Body289_1: THREE.Mesh;
    Body290_1: THREE.Mesh;
    Body291_1: THREE.Mesh;
    Body292_1: THREE.Mesh;
    Body293_1: THREE.Mesh;
    Body294_1: THREE.Mesh;
    Body295_1: THREE.Mesh;
    Body296_1: THREE.Mesh;
    Body297_1: THREE.Mesh;
    Body298_1: THREE.Mesh;
    Body299_1: THREE.Mesh;
  };
  materials: {
    Material_0: THREE.MeshStandardMaterial;
    Material_1: THREE.MeshStandardMaterial;
    Material_2: THREE.MeshStandardMaterial;
    Material_3: THREE.MeshStandardMaterial;
    Material_4: THREE.MeshStandardMaterial;
    Material_5: THREE.MeshStandardMaterial;
    Material_6: THREE.MeshStandardMaterial;
    Material_7: THREE.MeshStandardMaterial;
    Material_8: THREE.MeshStandardMaterial;
    Material_9: THREE.MeshStandardMaterial;
    Material_10: THREE.MeshStandardMaterial;
    Material_11: THREE.MeshStandardMaterial;
    Material_12: THREE.MeshStandardMaterial;
    Material_13: THREE.MeshStandardMaterial;
    Material_14: THREE.MeshStandardMaterial;
    Material_15: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "https://u4d6xf5i5b.ufs.sh/f/6kGNuz9TajAxUWfaG5k0NaIjg2SvPZAbCu8mTqkMQXFrV7yf",
  ) as unknown as GLTFResult;

  return (
    <group {...props} scale={0.05} dispose={null}>
      <group position={[0, 0, -28.1]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Body244_1.geometry}
          material={materials.Material_0}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Body269_1.geometry}
          material={materials.Material_1}
        />
        <mesh
          geometry={nodes.Body274_1.geometry}
          material={materials.Material_2}
        />
        <mesh
          geometry={nodes.Body275_1.geometry}
          material={materials.Material_3}
        />
        <mesh
          geometry={nodes.Body288_1.geometry}
          material={materials.Material_4}
        />
        <mesh
          geometry={nodes.Body289_1.geometry}
          material={materials.Material_5}
        />
        <mesh
          geometry={nodes.Body290_1.geometry}
          material={materials.Material_6}
        />
        <mesh
          geometry={nodes.Body291_1.geometry}
          material={materials.Material_7}
        />
        <mesh
          geometry={nodes.Body292_1.geometry}
          material={materials.Material_8}
        />
        <mesh
          geometry={nodes.Body293_1.geometry}
          material={materials.Material_9}
        />
        <mesh
          geometry={nodes.Body294_1.geometry}
          material={materials.Material_10}
        />
        <mesh
          geometry={nodes.Body295_1.geometry}
          material={materials.Material_11}
        />
        <mesh
          geometry={nodes.Body296_1.geometry}
          material={materials.Material_12}
        />
        <mesh
          geometry={nodes.Body297_1.geometry}
          material={materials.Material_13}
        />
        <mesh
          geometry={nodes.Body298_1.geometry}
          material={materials.Material_14}
        />
        <mesh
          geometry={nodes.Body299_1.geometry}
          material={materials.Material_15}
        />
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://u4d6xf5i5b.ufs.sh/f/6kGNuz9TajAxUWfaG5k0NaIjg2SvPZAbCu8mTqkMQXFrV7yf",
);
