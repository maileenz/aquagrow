"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";

// Componenta pentru Acvariu
const Aquarium = () => {
  return (
    <group position={[0, 0, 0]}>
      {/* Sticla Acvariului */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[4, 2, 2]} />
        <meshPhysicalMaterial
          color="#aaddff"
          transparent
          opacity={0.2}
          transmission={0.9}
          roughness={0.05}
          thickness={0.1}
        />
      </mesh>

      {/* Apa din Acvariu */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[3.9, 1.6, 1.9]} />
        <meshStandardMaterial color="#0055ff" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

// Componenta pentru Sistemul Acvaponic
const AquaponicSystem = () => {
  return (
    <group position={[0, 2.1, 0]}>
      {/* Platforma / Tava sistemului acvaponic (stă deasupra acvariului) */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4.2, 0.2, 2.2]} />
        <meshStandardMaterial color="#444444" />
      </mesh>

      {/* 1. Container Germinare (Burete/Turbă) */}
      <group position={[-1, 0.3, 0]}>
        {/* Lădița */}
        <mesh>
          <boxGeometry args={[1.5, 0.4, 1.5]} />
          <meshStandardMaterial color="#2a2a2a" />
        </mesh>

        {/* Substratul (Turbă/Burete) */}
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[1.4, 0.2, 1.4]} />
          <meshStandardMaterial color="#3b2818" roughness={1} />{" "}
          {/* Culoare maro închis */}
        </mesh>

        {/* Un vlăstar mic care tocmai germinează */}
        <mesh position={[0, 0.35, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.2]} />
          <meshStandardMaterial color="#90ee90" />
        </mesh>
      </group>

      {/* 2. Container Creștere (Bile de Argilă) */}
      <group position={[1, 0.4, 0]}>
        {/* Vasul de creștere (mai adânc) */}
        <mesh>
          <boxGeometry args={[1.5, 0.6, 1.5]} />
          <meshStandardMaterial color="#eeeeee" />
        </mesh>

        {/* Substratul (Argilă expandată) */}
        <mesh position={[0, 0.25, 0]}>
          <boxGeometry args={[1.4, 0.15, 1.4]} />
          {/* Culoare teracotă pentru argilă, cu rugozitate mare */}
          <meshStandardMaterial color="#a0522d" roughness={0.9} />
        </mesh>

        {/* Planta matură */}
        <group position={[0, 0.35, 0]}>
          {/* Tulpina */}
          <mesh position={[0, 0.4, 0]}>
            <cylinderGeometry args={[0.04, 0.05, 0.8]} />
            <meshStandardMaterial color="#228b22" />
          </mesh>
          {/* Frunza 1 */}
          <mesh position={[0.15, 0.5, 0]} rotation={[0, 0, -Math.PI / 4]}>
            <sphereGeometry args={[0.1, 16, 16]} scale={[2, 0.2, 1]} />
            <meshStandardMaterial color="#32cd32" />
          </mesh>
          {/* Frunza 2 */}
          <mesh position={[-0.15, 0.7, 0]} rotation={[0, 0, Math.PI / 4]}>
            <sphereGeometry args={[0.1, 16, 16]} scale={[2, 0.2, 1]} />
            <meshStandardMaterial color="#32cd32" />
          </mesh>
        </group>
      </group>
    </group>
  );
};

// Scena Principală
export default function AquaponicsScene() {
  return (
    <Canvas
      camera={{ position: [0, 4, 8], fov: 45 }}
      className="absolute inset-0 min-w-0"
    >
      {/* Lumini */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />

      {/* Mediu pentru reflexii pe sticlă */}
      <Environment preset="city" />

      {/* Componentele sistemului */}
      <Aquarium />
      <AquaponicSystem />

      {/* Umbre pe podea pentru realism */}
      <ContactShadows
        position={[0, -0.5, 0]}
        opacity={0.4}
        scale={10}
        blur={2}
        far={4}
      />

      {/* Controale pentru a roti scena cu mouse-ul */}
      <OrbitControls target={[0, 2, 0]} makeDefault />
    </Canvas>
  );
}
