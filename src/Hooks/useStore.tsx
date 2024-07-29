/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { OutcomeType, outcomes } from "../utils/constants";

type StoreT = {
  options: any[];
  showResult: boolean;
  setShowResult: () => void;
  setExtrovertOrIntrovert: (val: "e" | "i") => void;
  setSensingOrIntuition: (val: "s" | "n") => void;
  setThinkingOrFeeling: (val: "t" | "f") => void;
  setJudgingOrPerceiving: (val: "j" | "p") => void;
  calculateTheResult: () => OutcomeType;
};

const useStore = create<StoreT>((set) => ({
  showResult: false,
  options: [
    {
      e: 0,
      i: 0,
    },
    {
      s: 0,
      n: 0,
    },
    {
      t: 0,
      f: 0,
    },
    {
      j: 0,
      p: 0,
    },
  ],
  setShowResult: () => set(() => ({ showResult: true })),
  setExtrovertOrIntrovert: (val: "e" | "i") =>
    set((state) => {
      const tempResult = [...state.options];
      tempResult[0][val] += 1;
      return { options: tempResult };
    }),
  setSensingOrIntuition: (val: "s" | "n") =>
    set((state) => {
      const tempResult = [...state.options];
      tempResult[1][val] += 1;
      return { options: tempResult };
    }),
  setThinkingOrFeeling: (val: "t" | "f") =>
    set((state) => {
      const tempResult = [...state.options];
      tempResult[2][val] += 1;
      return { options: tempResult };
    }),
  setJudgingOrPerceiving: (val: "j" | "p") =>
    set((state) => {
      const tempResult = [...state.options];
      tempResult[3][val] += 1;
      return { options: tempResult };
    }),
  calculateTheResult: () => {
    let result = "";
    const { options } = useStore.getState();

    if (options[0].e > options[0].i) result += "E";
    else result += "I";

    if (options[1].s > options[1].n) result += "S";
    else result += "N";

    if (options[2].t > options[2].f) result += "T";
    else result += "F";

    if (options[3].j > options[3].p) result += "J";
    else result += "P";

    const outcome = outcomes.filter((d) => d.code === result);

    return outcome[0];
  },
}));

export default useStore;
