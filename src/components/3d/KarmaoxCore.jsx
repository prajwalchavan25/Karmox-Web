import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, MeshDistortMaterial } from '@react-three/drei';

export default function KarmaoxCore({ scale = 1, interactive = true }) {
  const outerGroupRef = useRef();
  const innerCoreRef = useRef();
  const cageRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const particlesRef = useRef();
  const nodesRef = useRef();

  // Generate particle cloud
  const particleCount = 140;
  const [positions, nodeCoords] = useMemo(() => {
    const coords = new Float32Array(particleCount * 3);
    const nodes = [];
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2.2 + Math.random() * 1.8;
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      coords[i * 3] = x;
      coords[i * 3 + 1] = y;
      coords[i * 3 + 2] = z;
      
      if (i < 18) {
        nodes.push(new THREE.Vector3(x * 0.7, y * 0.7, z * 0.7));
      }
    }
    return [coords, nodes];
  }, []);

  // Generate node connecting line geometry
  const lineGeometry = useMemo(() => {
    const points = [];
    for (let i = 0; i < nodeCoords.length; i++) {
      for (let j = i + 1; j < nodeCoords.length; j++) {
        if (nodeCoords[i].distanceTo(nodeCoords[j]) < 2.3) {
          points.push(nodeCoords[i].x, nodeCoords[i].y, nodeCoords[i].z);
          points.push(nodeCoords[j].x, nodeCoords[j].y, nodeCoords[j].z);
        }
      }
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    return geom;
  }, [nodeCoords]);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Smooth subtle mouse parallax
    if (interactive && outerGroupRef.current) {
      const targetX = state.pointer.x * 0.4;
      const targetY = state.pointer.y * 0.4;
      outerGroupRef.current.rotation.y += (targetX - outerGroupRef.current.rotation.y) * 0.05;
      outerGroupRef.current.rotation.x += (-targetY - outerGroupRef.current.rotation.x) * 0.05;
    }

    // Continuous distinct rotations
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.x = time * 0.35;
      innerCoreRef.current.rotation.y = time * 0.45;
    }

    if (cageRef.current) {
      cageRef.current.rotation.y = -time * 0.15;
      cageRef.current.rotation.z = time * 0.1;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.5) * 0.2;
      ring1Ref.current.rotation.z = time * 0.25;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = Math.PI / 4 + Math.cos(time * 0.4) * 0.2;
      ring2Ref.current.rotation.x = -time * 0.2;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.06;
    }

    if (nodesRef.current) {
      nodesRef.current.rotation.y = time * 0.12;
      nodesRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
    }
  });

  return (
    <group ref={outerGroupRef} scale={scale}>
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
        {/* Inner Glowing Energy Heart */}
        <mesh ref={innerCoreRef}>
          <octahedronGeometry args={[0.9, 0]} />
          <MeshDistortMaterial
            color="#00f0ff"
            emissive="#0070f3"
            emissiveIntensity={0.6}
            roughness={0.1}
            metalness={0.9}
            distort={0.25}
            speed={2.5}
            wireframe={false}
          />
        </mesh>

        {/* Central Pulsing Point Light */}
        <pointLight color="#00f0ff" intensity={2.5} distance={6} />
        <pointLight color="#6366f1" intensity={1.8} distance={8} position={[0, -1, 1]} />

        {/* Outer Geodesic Crystalline Hull */}
        <mesh ref={cageRef}>
          <icosahedronGeometry args={[1.55, 1]} />
          <meshStandardMaterial
            color="#1e293b"
            emissive="#00f0ff"
            emissiveIntensity={0.25}
            wireframe
            transparent
            opacity={0.35}
            roughness={0.3}
          />
        </mesh>

        {/* Outer Fine Glass facets */}
        <mesh>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshPhysicalMaterial
            color="#0a0f1d"
            emissive="#6366f1"
            emissiveIntensity={0.1}
            transparent
            opacity={0.2}
            roughness={0.1}
            metalness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Orbital Glowing Tech Rings */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2.0, 0.015, 16, 100]} />
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.6} />
        </mesh>
        
        <mesh ref={ring2Ref}>
          <torusGeometry args={[2.3, 0.012, 16, 100]} />
          <meshBasicMaterial color="#6366f1" transparent opacity={0.5} />
        </mesh>

        {/* Connected Node Network */}
        <group ref={nodesRef}>
          {nodeCoords.map((pos, idx) => (
            <mesh key={idx} position={pos}>
              <sphereGeometry args={[0.045, 12, 12]} />
              <meshBasicMaterial color={idx % 2 === 0 ? "#00f0ff" : "#818cf8"} />
            </mesh>
          ))}
          <lineSegments geometry={lineGeometry}>
            <lineBasicMaterial color="#00f0ff" transparent opacity={0.22} />
          </lineSegments>
        </group>

        {/* Surrounding Ambient Particle Cloud */}
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particleCount}
              array={positions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.035}
            color="#38bdf8"
            transparent
            opacity={0.5}
            blending={THREE.AdditiveBlending}
            sizeAttenuation
          />
        </points>
      </Float>
    </group>
  );
}
