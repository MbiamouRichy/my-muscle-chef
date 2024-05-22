import { Environment, Image, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import React, { useEffect, useRef } from "react";
import { useSnapshot } from "valtio";
import { state } from "./proxy/store";

export default function Models() {
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 1.1], fov: 50 }}
      eventPrefix="client"
    >
      <IconsGroup />
      <Environment preset="sunset" blur={0.3} />
    </Canvas>
  );
}

function IconsGroup() {
  let snap = useSnapshot(state);
  let ref = useRef();
  useEffect(() => {
    let { innerWidth } = window;
    console.log(innerWidth);
  });
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(
      0.1 + Math.cos(t / 4.5) / 10,
      0,
      0.3 - (1 + Math.sin(t / 4)) / 8
    );
    ref.current.position.y = (0 + Math.sin(t / 2)) / 10;
  });
  return (
    <motion.group ref={ref} scale={0.4}>
      <Icon
        key={snap.SelectedIcons.icon1}
        url={snap.SelectedIcons.icon1}
        position={[2, 0.2, 0]}
      />
      <Icon
        key={snap.SelectedIcons.icon2}
        url={snap.SelectedIcons.icon2}
        position={[0.5, -0.2, 0]}
      />
    </motion.group>
  );
}

const Icon = ({ url, ...props }) => {
  return <Image url={url} transparent {...props} />;
};

["/project.png"].forEach(useTexture.preload);
