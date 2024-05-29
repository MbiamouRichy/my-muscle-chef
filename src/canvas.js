import { Center, Environment, Image, SpotLight } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion-3d";
import React, { useRef } from "react";
import { useSnapshot } from "valtio";
import { Can } from "./Can";
import { state } from "./proxy/store";
import "./util";

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
      <PlaneBackground snap={snap} />
      <Center position={[innerWidth >= 1024 ? 0.5 : 0, 0, 0]}>
        <Can />
        <IconsGroup />
      </Center>

      <Environment preset="sunset" blur={0.3} />
    </Canvas>
  );
}

const PlaneBackground = ({ snap }) => {
  return (
    <motion.mesh
      key={snap.SelectedColor}
      initial={{ scale: 0 }}
      animate={{
        scale: 30,
        transition: { ease: "easeOut", duration: 1, delay: 0.5 },
      }}
      exit={{ scale: 0 }}
      scale={30}
      position={[0.5, 0, -5]}
    >
      <bentPlaneGeometry args={[0.3, 1, 1, 20, 20]} />

      <meshStandardMaterial color={snap.SelectedColor} />
    </motion.mesh>
  );
};

function IconsGroup() {
  let snap = useSnapshot(state);
  let ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.position.y = (0 + Math.sin(t / 3)) / 15;
  });

  return (
    <AnimatePresence mode="wait">
      <motion.group
        key={snap.SelectedIcons.icon1}
        initial={{ scale: 0, rotateZ: -2, x: -0.5 }}
        animate={{ rotateZ: 0, scale: 0.28, x: 0 }}
        exit={{ scale: 0, rotateZ: -2, x: -0.5 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        ref={ref}
        scale={0.28}
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
