"use client";

import { type ComponentProps } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props: ComponentProps<"group">) {
  const { nodes, materials } = useGLTF(
    "https://u4d6xf5i5b.ufs.sh/f/6kGNuz9TajAxF31utG66ZctxUdQ9VNGARpgDSk7fjoz3yHwL",
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes["tripo_node_46bb032e-b1a6-4b3c-8807-ab64aa2b4bc6"] as any)
            .geometry
        }
        material={materials["tripo_mat_46bb032e-b1a6-4b3c-8807-ab64aa2b4bc6"]}
      />
    </group>
  );
}

useGLTF.preload(
  "https://u4d6xf5i5b.ufs.sh/f/6kGNuz9TajAxF31utG66ZctxUdQ9VNGARpgDSk7fjoz3yHwL",
);
