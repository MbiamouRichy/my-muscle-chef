import {
  Center,
  Environment,
  Image,
  MeshWobbleMaterial,
  SpotLight,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion-3d";
import React, { useRef } from "react";
import { useSnapshot } from "valtio";
import { Can } from "./Can";
import { state } from "./proxy/store";

export default function Models() {
  let snap = useSnapshot(state);
  const { innerWidth } = window;

  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 1.1], fov: 50 }}
      eventPrefix="client"
    >
      <SpotLight
        position={[6, 0, 0]}
        penumbra={1}
        intensity={0.5}
        castShadow={true}
        color={snap.SelectedColor}
      />
      {/* <ShereBackground snap={snap} /> */}
      <Center
        position={[innerWidth > 768 ? 0.5 : 0, 0, innerWidth > 768 ? 0 : -0.5]}
      >
        <Can />
        <IconsGroup />
      </Center>
      <Environment preset="sunset" blur={0.3} />
    </Canvas>
  );
}

const ShereBackground = ({ snap }) => {
  return (
    <motion.mesh
      transition={{ ease: "backOut", duration: 0.5 }}
      scale={30}
      position={[0, 0, -5]}
    >
      <planeGeometry />
      <MeshWobbleMaterial color={snap.SelectedColor} />
    </motion.mesh>
  );
};

function IconsGroup() {
  let snap = useSnapshot(state);
  let ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.position.y = (0 + Math.sin(t / 3)) / 20;
  });

  return (
    <AnimatePresence mode="wait">
      <motion.group
        key={snap.SelectedIcons.icon1}
        initial={{ rotateZ: -2 }}
        animate={{ rotateZ: 0 }}
        exit={{ scale: 0, rotateZ: -2, x: -0.5 }}
        transition={{ ease: "backOut", duration: 0.5 }}
        ref={ref}
        scale={0.35}
      >
        <Icon url={snap.SelectedIcons.icon1} position={[0.5, -0.5, 0]} />
        <Icon url={snap.SelectedIcons.icon2} position={[3, 1.5, 0]} />
      </motion.group>
    </AnimatePresence>
  );
}

const Icon = ({ url, ...props }) => {
  return <Image url={url} transparent {...props} />;
};
