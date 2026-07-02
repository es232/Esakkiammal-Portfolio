import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");

    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

const Particles = () => {
  const ref = useRef<THREE.Points>(null!);

  const sphere = useMemo(() => {
    const points = [];

    for (let i = 0; i < 1500; i++) {
      const x = (Math.random() - 0.5) * 15;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 15;

      const d = Math.sqrt(x * x + y * y + z * z);

      if (d < 7 && d > 3) {
        points.push(x, y, z);
      }
    }

    return new Float32Array(points);
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y += delta * 0.05;
    ref.current.rotation.x += delta * 0.02;

    ref.current.rotation.x +=
      (state.pointer.y * 0.15 - ref.current.rotation.x) * 0.03;

    ref.current.rotation.y +=
      (state.pointer.x * 0.15 - ref.current.rotation.y) * 0.03;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#D4AF37"
          size={0.045}
          depthWrite={false}
          opacity={0.75}
          sizeAttenuation
        />
      </Points>
    </group>
  );
};

const HeroScene = () => {
  const [webglSupported, setWebglSupported] = useState(false);

  useEffect(() => {
    setWebglSupported(hasWebGL());
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Background */}
      <div className="absolute inset-0 bg-[#F8F5F0]" />

      {/* Gold glow */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/20 blur-[140px]" />

      {/* Red glow */}
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#8B1E2D]/10 blur-[120px]" />

      {/* Decorative gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8F5F0]" />

      {webglSupported ? (
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <Particles />
        </Canvas>
      ) : (
        <div className="absolute inset-0 overflow-hidden">

          {/* Floating circles */}

          <div className="absolute left-[18%] top-[22%] h-32 w-32 rounded-full bg-[#D4AF37]/20 blur-3xl animate-pulse" />

          <div
            className="absolute right-[15%] top-[28%] h-24 w-24 rounded-full bg-[#8B1E2D]/15 blur-2xl animate-pulse"
            style={{
              animationDelay: "1s",
            }}
          />

          <div
            className="absolute bottom-[15%] left-[35%] h-40 w-40 rounded-full bg-[#D4AF37]/15 blur-[90px] animate-pulse"
            style={{
              animationDelay: "2s",
            }}
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)]" />
        </div>
      )}
    </div>
  );
};

export default HeroScene;