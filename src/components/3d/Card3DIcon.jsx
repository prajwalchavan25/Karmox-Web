import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function MeshByType({ type }) {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.6;
      meshRef.current.rotation.y += delta * 0.8;
    }
  });

  if (type === 'ai') {
    // AI Neural Crystal
    return (
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[1.1, 0]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#0070f3"
            emissiveIntensity={0.6}
            wireframe
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshBasicMaterial color="#00f0ff" />
        </mesh>
      </Float>
    );
  }

  if (type === 'web') {
    // Web Stack Polyhedron
    return (
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0284c7"
            emissiveIntensity={0.5}
            wireframe
          />
        </mesh>
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[0.9, 0.04, 16, 32]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
      </Float>
    );
  }

  if (type === 'digital') {
    // Digital Core Gear / Dodecahedron
    return (
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <dodecahedronGeometry args={[1.0, 0]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#4338ca"
            emissiveIntensity={0.5}
            wireframe
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshBasicMaterial color="#818cf8" wireframe />
        </mesh>
      </Float>
    );
  }

  // Experimental Quantum Ring
  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.6}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[0.7, 0.22, 64, 16]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#7e22ce"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

export default function Card3DIcon({ type = 'ai' }) {
  return (
    <div className="w-16 h-16 pointer-events-none select-none">
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <pointLight position={[2, 2, 2]} intensity={2} color="#ffffff" />
        <Suspense fallback={null}>
          <MeshByType type={type} />
        </Suspense>
      </Canvas>
    </div>
  );
}
