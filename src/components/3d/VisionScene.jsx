import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function VisionCore() {
  const meshRef = useRef();
  const outerWebRef = useRef();
  const particleWaveRef = useRef();

  // Create expanding web of 80 connected nodes
  const [nodePositions, connections] = useMemo(() => {
    const nodes = [];
    const count = 75;
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 2.8 + 0.8;
      const sinPhi = Math.sin(phi);
      nodes.push(
        new THREE.Vector3(
          r * sinPhi * Math.cos(theta),
          r * sinPhi * Math.sin(theta),
          r * Math.cos(phi)
        )
      );
    }

    const lines = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 1.4) {
          lines.push(nodes[i].x, nodes[i].y, nodes[i].z);
          lines.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }

    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute('position', new THREE.Float32BufferAttribute(lines, 3));
    return [nodes, lineGeom];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.2;
    }
    if (outerWebRef.current) {
      outerWebRef.current.rotation.y = -t * 0.1;
      outerWebRef.current.rotation.z = Math.cos(t * 0.1) * 0.15;
    }
    if (particleWaveRef.current) {
      particleWaveRef.current.rotation.y = t * 0.05;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.6} />
      <pointLight position={[0, 0, 0]} intensity={3} color="#00f0ff" />
      <pointLight position={[3, 4, 2]} intensity={2} color="#6366f1" />

      <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Core Heart */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.1, 2]} />
          <meshStandardMaterial
            color="#090d1f"
            emissive="#00f0ff"
            emissiveIntensity={0.35}
            roughness={0.1}
            metalness={0.9}
            wireframe
          />
        </mesh>

        {/* Center Glowing Nova */}
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshBasicMaterial color="#00f0ff" />
        </mesh>

        {/* Dynamic Connected Web */}
        <group ref={outerWebRef}>
          <lineSegments geometry={connections}>
            <lineBasicMaterial color="#38bdf8" transparent opacity={0.28} />
          </lineSegments>
          {nodePositions.map((pos, idx) => (
            <mesh key={idx} position={pos}>
              <sphereGeometry args={[0.035, 8, 8]} />
              <meshBasicMaterial color={idx % 3 === 0 ? "#00f0ff" : idx % 3 === 1 ? "#818cf8" : "#ffffff"} />
            </mesh>
          ))}
        </group>
      </Float>
    </group>
  );
}

export default function VisionScene() {
  return (
    <div className="w-full h-[400px] md:h-[520px] relative select-none">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <VisionCore />
        </Suspense>
      </Canvas>
    </div>
  );
}
