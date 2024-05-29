import { motion } from "framer-motion";
import React from "react";
import { useSnapshot } from "valtio";
import App from "./App";
import Models from "./canvas";
import { state } from "./proxy/store";

export default function Page() {
  const snap = useSnapshot(state);
  return (
    <motion.main
      style={{
        backgroundColor: snap.SelectedColor,
        transition: "all ease-out 0.5s 1s",
      }}
      className="relative h-screen w-screen overflow-hidden"
    >
      <App />
      <Models />
    </motion.main>
  );
}
