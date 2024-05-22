import { proxy } from "valtio";

export const state = proxy({
  ColorList: [
    "rgb(78, 15, 120)",
    "rgb(0, 121, 77)",
    "rgb(0, 130, 203)",
    "rgb(232, 27, 60)",
    "rgb(255, 198, 45)",
    "rgb(63, 33, 32)",
  ],
  TextList: [
    "Grape Thunder",
    "Electric Apple",
    "Blue RASPBERRY Trance",
    "Mango Peach Sunset",
    "Tropical Beats",
    "Cosmic Cola",
  ],
  IconsCansList: [
    { icon1: "/icons/grapes.svg", icon2: "/icons/energy.svg" },
    { icon1: "/icons/energy-green.svg", icon2: "/icons/apple.svg" },
    { icon1: "/icons/rapsberry.svg", icon2: "/icons/trance.svg" },
    { icon1: "/icons/peach.svg", icon2: "/icons/mango.svg" },
    { icon1: "/icons/palm.svg", icon2: "/icons/shakers.svg" },
    { icon1: "/icons/cosmic.svg", icon2: "/icons/cola.svg" },
  ],
  SelectedColor: "rgb(78, 15, 120)",
  SelectedText: "Grape Thunder",
  SelectedIcons: { icon1: "/icons/grapes.svg", icon2: "/icons/energy.svg" },
});
