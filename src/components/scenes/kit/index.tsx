"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Float,
  PresentationControls,
} from "@react-three/drei";
import * as THREE from "three";
import { Model } from "./kit";

/* ─────────────────────────────────────────────
   COMPONENT: SceneSetup — lumini & mediu
───────────────────────────────────────────── */
function SceneSetup() {
  return (
    <>
      {/* Lumină ambientală soft */}
      <ambientLight intensity={0.6} color="#f8f4ee" />

      {/* Lumină direcțională principală (key light) */}
      <directionalLight
        position={[4, 6, 3]}
        intensity={2.5}
        color="#fff8f0"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={0.1}
        shadow-camera-far={20}
        shadow-camera-left={-2}
        shadow-camera-right={2}
        shadow-camera-top={2}
        shadow-camera-bottom={-2}
        shadow-bias={-0.0005}
      />

      {/* Fill light (lateral) */}
      <directionalLight
        position={[-3, 2, -2]}
        intensity={0.8}
        color="#e8f4ff"
      />

      {/* Rim light (spate) */}
      <directionalLight position={[0, 1, -5]} intensity={0.4} color="#ffffff" />

      {/* Point light pentru highlights pe metal */}
      <pointLight
        position={[0, 3, 2]}
        intensity={0.6}
        color="#fff"
        distance={8}
      />

      {/* Mediu HDRI pentru reflecții PBR */}
      <Environment preset="studio" />
    </>
  );
}

/* ─────────────────────────────────────────────
   COMPONENT PRINCIPAL: App
───────────────────────────────────────────── */
export default function Kit() {
  return (
    <Canvas
      shadows
      camera={{
        position: [1.7, 0.8, -1],
        fov: 42,
        near: 0.01,
        far: 50,
      }}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      dpr={[1, 2]}
    >
      <SceneSetup />

      {/* Orbit Controls cinematice */}
      <OrbitControls
        enablePan={false}
        minDistance={1.5}
        maxDistance={3.5}
        minPolarAngle={Math.PI * 0.1}
        maxPolarAngle={Math.PI * 0.75}
        dampingFactor={0.06}
        enableDamping
        target={[0, -0.1, 0]}
      />

      <Model />
    </Canvas>
  );
}
