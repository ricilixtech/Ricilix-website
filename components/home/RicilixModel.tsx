"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, ContactShadows } from "@react-three/drei";
import { useRef, Suspense, useEffect, useState } from "react";
import * as THREE from "three";

function Model({ isMobile }: { isMobile: boolean }) {
  const { scene } = useGLTF("/Model/Ricilix Model.glb");
  const modelRef = useRef<THREE.Group>(null);

  // Center model properly
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);
  }, [scene]);

  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.7;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={isMobile ? 2.8 : 4.8}
      rotation={[Math.PI, 0, Math.PI]}
      position={[0, -3.2, -6]}
    />
  );
}

useGLTF.preload("/Model/Ricilix Model.glb");

export default function RicilixModel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="w-full h-[250px] md:h-[350px] lg:h-[400px]"> 

{/* bg-gradient-to-b from-black via-purple-900 to-black */}
      <Canvas
        shadows
        camera={{
          position: [0, 2.5, isMobile ? 4 : 10],
          fov: 40,
        }}
      >
        {/* Bright Ambient Light */}
        <ambientLight intensity={0.9} />

        {/* White Main Light */}
        <directionalLight
          castShadow
          position={[5, 8, 5]}
          intensity={2}
          color="#ffffff"
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* Soft Fill */}
        <hemisphereLight
          intensity={0.8}
          color="#ffffff"
          groundColor="#222222"
        />

        <Suspense fallback={null}>
          <Model isMobile={isMobile} />
        </Suspense>

        <ContactShadows
          position={[0, 0, 0]}
          opacity={0.4}
          scale={20}
          blur={3}
          far={8}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}
