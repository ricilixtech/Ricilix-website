"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const RotatingSphere = ({ radius }: { radius: number }) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const texture = useTexture("/Model/Texture/earth texture.png");

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh ref={sphereRef} position={[0, 0, 0]}>
      <sphereGeometry args={[radius, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const SphereModel = () => {
  const [radius, setRadius] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setRadius(1.2); // small mobile
      else if (window.innerWidth < 1024) setRadius(1.6); // tablet
      else setRadius(2); // desktop
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0, // <--- behind content
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      camera={{ position: [0, 0, 6], fov: 50 }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <RotatingSphere radius={radius} />
    </Canvas>
  );
};

export default SphereModel;