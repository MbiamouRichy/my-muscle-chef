import { AnimatePresence, motion } from "framer-motion";
import React, { memo, useState } from "react";
import { useSnapshot } from "valtio";
import { state } from "./proxy/store";

const cans = [
  "grape_can.png",
  "apple_can.png",
  "blue_can.png",
  "mango_can.png",
  "tropical_can.png",
  "cosmic_can.png",
];

function CanNav() {
  let [activeCans, setActiveCans] = useState(0);
  const handleActiveCans = (idx) => {
    setActiveCans(idx);
    state.SelectedColor = snap.ColorList[idx];
    state.SelectedText = snap.TextList[idx];
    state.SelectedIcons = snap.IconsCansList[idx];
    state.SelectedTexture = `/cans/${cans[idx]}`;

    console.log(state.SelectedTexture);
  };
  const snap = useSnapshot(state);
  return (
    <>
      <div className="bottom-0 z-30 right-0 absolute w-full flex flex-row items-center justify-center lg:justify-end">
        <ul
          style={{
            backgroundColor: snap.SelectedColor,
            transition: "all ease-in 0.5s",
          }}
          className="w-fit px-5 h-16 gap-3 rounded-t-3xl flex justify-center items-center"
        >
          {cans.map((_, idx) => (
            <li
              onClick={() => handleActiveCans(idx)}
              key={idx}
              className="mb-10"
            >
              <img
                className={`${
                  activeCans === idx ? "scale-110" : "hover:scale-110"
                } h-20 w-8 transition-transform duration-500`}
                src={`/cans/${cans[idx]}`}
                alt="can illustration"
              />
            </li>
          ))}
        </ul>
      </div>

      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        style={{ textShadow: `${snap.SelectedColor} 0px 0px 40px` }}
        className="text-center z-30 whitespace-pre-line absolute text-white right-[12%] md:right-[15%] xl:right-[5%] bottom-[30%] m-0 pointer-events-none text-[2.1em] md:text-[6em] leading-[18px] md:leading-[48px]"
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={snap.SelectedText}
            initial={{ x: 500, rotate: 260 }}
            animate={{ x: 0, rotate: -10, transition: { delay: 0.01 } }}
            exit={{ scale: 0, rotate: -260, x: -500, y: 500 }}
            transition={{ ease: "backOut", duration: 1 }}
          >
            {snap.SelectedText.split(/\s+/).join("\n")}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default memo(CanNav);
