import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';

function InnovationNetwork({ activeStage = 0 }) {
  const groupRef = useRef();
  const stage1Ref = useRef();
  const stage2Ref = useRef();
  const stage3Ref = useRef();

  // Create interconnected stages
  const stagePositions = [
    new THREE.Vector3(-2.2, 0.4, 0),
    new THREE.Vector3(0, -0.2, 0.5),
    new THREE.Vector3(2.2, 0.3, 0),
  ];

  // Connecting lines between stages
  const streamPoints = useMemo(() => {
    const curve1 = new THREE.CatmullRomCurve3([
      stagePositions[0],
      new THREE.Vector3(-1.1, -0.1, 0.2),
      stagePositions[1],
    ]);
    const curve2 = new THREE.CatmullRomCurve3([
      stagePositions[1],
      new THREE.Vector3(1.1, 0.5, 0.3),
      stagePositions[2],
    ]);
    return [
      new THREE.BufferGeometry().setFromPoints(curve1.getPoints(30)),
      new THREE.BufferGeometry().setFromPoints(curve2.getPoints(30)),
    ];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.15;
    }
    if (stage1Ref.current) stage1Ref.current.rotation.y = t * 0.4;
    if (stage2Ref.current) stage2Ref.current.rotation.x = t * 0.5;
    if (stage3Ref.current) stage3Ref.current.rotation.z = t * 0.3;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.7} />
      <pointLight position={[0, 4, 4]} intensity={2} color="#00f0ff" />
      <pointLight position={[2, -3, 2]} intensity={1.5} color="#6366f1" />

      {/* Connection Beams */}
      <line geometry={streamPoints[0]}>
        <lineBasicMaterial color="#00f0ff" transparent opacity={0.6} />
      </line>
      <line geometry={streamPoints[1]}>
        <lineBasicMaterial color="#6366f1" transparent opacity={0.6} />
      </line>

      {/* Stage 1: Discover (Abstract Sensor / Scanner Node) */}
      <Float speed={1.5} floatIntensity={0.5}>
        <group position={stagePositions[0]}>
          <mesh ref={stage1Ref}>
            <octahedronGeometry args={[0.7, 0]} />
            <meshStandardMaterial
              color="#00f0ff"
              emissive="#0070f3"
              emissiveIntensity={activeStage === 0 ? 0.8 : 0.2}
              wireframe
            />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshBasicMaterial color="#00f0ff" />
          </mesh>
        </group>
      </Float>

      {/* Stage 2: Build (Constructed Polyhedron Engine) */}
      <Float speed={2} floatIntensity={0.6}>
        <group position={stagePositions[1]}>
          <mesh ref={stage2Ref}>
            <dodecahedronGeometry args={[0.85, 0]} />
            <meshStandardMaterial
              color="#38bdf8"
              emissive="#38bdf8"
              emissiveIntensity={activeStage === 1 ? 0.9 : 0.3}
              roughness={0.1}
              metalness={0.8}
            />
          </mesh>
          <mesh rotation={[Math.PI / 4, 0, 0]}>
            <torusGeometry args={[1.2, 0.015, 16, 64]} />
            <meshBasicMaterial color="#38bdf8" transparent opacity={0.6} />
          </mesh>
        </group>
      </Float>

      {/* Stage 3: Evolve (Expanding Quantum Gyroscope) */}
      <Float speed={1.8} floatIntensity={0.7}>
        <group position={stagePositions[2]}>
          <mesh ref={stage3Ref}>
            <icosahedronGeometry args={[0.75, 1]} />
            <meshStandardMaterial
              color="#6366f1"
              emissive="#818cf8"
              emissiveIntensity={activeStage === 2 ? 0.9 : 0.3}
              wireframe
            />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.35, 16, 16]} />
            <meshBasicMaterial color="#a855f7" />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

export default function InnovationVisual({ activeStage = 0 }) {
  return (
    <div className="w-full h-[320px] md:h-[420px] relative select-none">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <InnovationNetwork activeStage={activeStage} />
        </Suspense>
      </Canvas>
    </div>
  );
}
