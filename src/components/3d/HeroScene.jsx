import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import KarmaoxCore from './KarmaoxCore';
import CanvasFallback from './CanvasFallback';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error) {
    console.warn("WebGL Error caught:", error);
  }
  render() {
    if (this.state.hasError) {
      return <CanvasFallback type="hero" />;
    }
    return this.props.children;
  }
}

export default function HeroScene() {
  return (
    <div className="w-full h-full min-h-[420px] md:min-h-[560px] relative select-none">
      <ErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={0.6} color="#6366f1" />
          
          <Suspense fallback={null}>
            <KarmaoxCore scale={1.05} />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
