import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Initialize {
  firstTime: boolean;
  setFirstTime: () => void;
}

export const useInitialize = create<Initialize>()(
  persist(
    (set) => ({
      firstTime: true,
      setFirstTime: () => set({ firstTime: false }),
    }),
    {
      name: "init-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
