import {
  AccumulativeShadows,
  Center,
  Environment,
  Image,
  RandomizedLight,
  SpotLight,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { easing } from "maath";
import React, { useEffect, useRef } from "react";
import { useSnapshot } from "valtio";
import { Can } from "./Can";
import { state } from "./proxy/store";

export default function Models() {
  let snap = useSnapshot(state);

  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 1.1], fov: 50 }}
      eventPrefix="client"
    >
      <ambientLight intensity={30} />
      <SpotLight
        position={[6, 0, 0]}
        penumbra={1}
        intensity={50}
        castShadow={true}
        color={snap.SelectedColor}
      />
      <Backdrop />
      <Center position={[0.5, 0, 0]}>
        <Can />
        <IconsGroup />
      </Center>
      <Environment preset="sunset" blur={0.3} />
    </Canvas>
  );
}

function Backdrop() {
  const shadows = useRef();

  useFrame((state, delta) =>
    easing.dampC(
      shadows.current.getMesh().material.color,
      state.selectedColor,
      0.5,
      delta
    )
  );

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.4]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, 0]}
      />
    </AccumulativeShadows>
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
    ref.current.position.y = (0 + Math.sin(t / 3)) / 20;
  });

  return (
    <motion.group
      key={snap.SelectedIcons.icon1}
      initial={{ x: -2, scale: 0 }}
      animate={{ x: 0, scale: 0.3 }}
      transition={{ ease: "backOut", duration: 0.5 }}
      ref={ref}
      scale={0.35}
    >
      <Icon url={snap.SelectedIcons.icon1} position={[0.5, -0.5, 0]} />
      <Icon url={snap.SelectedIcons.icon2} position={[3, 1.5, 0]} />
    </motion.group>
  );
}

const Icon = ({ url, ...props }) => {
  return <Image url={url} transparent {...props} />;
};
