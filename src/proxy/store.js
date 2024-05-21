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
  SelectedColor: "rgb(78, 15, 120)",
  SelectedText: "Grape Thunder",
});
