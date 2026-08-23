import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import CanvasFallback from './CanvasFallback';

function AboutSceneContent() {
  const card1Ref = useRef();
  const card2Ref = useRef();
  const card3Ref = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (card1Ref.current) {
      card1Ref.current.rotation.y = Math.sin(t * 0.4) * 0.15;
      card1Ref.current.rotation.x = Math.cos(t * 0.3) * 0.1;
    }
    if (card2Ref.current) {
      card2Ref.current.rotation.y = Math.sin(t * 0.4 + 1.5) * 0.2;
      card2Ref.current.rotation.z = Math.sin(t * 0.3) * 0.08;
    }
    if (card3Ref.current) {
      card3Ref.current.rotation.x = Math.cos(t * 0.3 + 0.8) * 0.15;
      card3Ref.current.rotation.y = -Math.sin(t * 0.35) * 0.12;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} color="#00f0ff" />
      <directionalLight position={[-5, -5, -2]} intensity={1.0} color="#6366f1" />

      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
        {/* Layer 1: Back glass plate */}
        <group ref={card1Ref} position={[0, 0, -0.6]}>
          <RoundedBox args={[2.8, 1.8, 0.08]} radius={0.06} smoothness={4}>
            <meshPhysicalMaterial
              color="#0d1326"
              roughness={0.2}
              metalness={0.1}
              transmission={0.6}
              transparent
              opacity={0.7}
              reflectivity={0.9}
            />
          </RoundedBox>
        </group>

        {/* Layer 2: Main center floating card */}
        <group ref={card2Ref} position={[0.2, 0.1, 0]}>
          <RoundedBox args={[2.5, 1.5, 0.1]} radius={0.06} smoothness={4}>
            <meshPhysicalMaterial
              color="#11172e"
              roughness={0.15}
              metalness={0.4}
              clearcoat={1}
              transparent
              opacity={0.85}
            />
          </RoundedBox>
          {/* Glowing accent border line */}
          <mesh position={[0, 0, 0.06]}>
            <planeGeometry args={[2.4, 0.03]} />
            <meshBasicMaterial color="#00f0ff" />
          </mesh>
        </group>

        {/* Layer 3: Front small floating node */}
        <group ref={card3Ref} position={[-0.7, -0.6, 0.7]}>
          <RoundedBox args={[1.2, 0.8, 0.08]} radius={0.04} smoothness={4}>
            <meshStandardMaterial
              color="#00f0ff"
              emissive="#0070f3"
              emissiveIntensity={0.4}
              roughness={0.2}
              metalness={0.8}
            />
          </RoundedBox>
        </group>

        {/* Dynamic orbital ring */}
        <mesh ref={ringRef} position={[0.8, 0.8, 0.3]} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[0.9, 0.012, 16, 64]} />
          <meshBasicMaterial color="#6366f1" transparent opacity={0.7} />
        </mesh>
      </Float>
    </group>
  );
}

export default function AboutVisual() {
  return (
    <div className="w-full h-[380px] md:h-[480px] relative select-none">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <AboutSceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
