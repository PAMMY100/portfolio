"use client";

import { useGLTF } from "@react-three/drei";

export default function Model() {
  const { scene } = useGLTF("/models/model.glb");
  return <primitive object={scene} scale={1.5} />;
}

// Preload model for smoother experience
useGLTF.preload("/models/model.glb");
